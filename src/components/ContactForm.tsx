import { useEffect, useId, useState, type FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PhoneField from './PhoneField';

/**
 * Contact form, posting to Formspree through @formspree/react.
 *
 * WHY THE SDK RATHER THAN A HAND-ROLLED FETCH. `useForm` owns the request, the
 * submitting flag and the succeeded flag, and `ValidationError` surfaces what
 * Formspree itself rejected: a malformed address, a blocked domain, a spam
 * verdict. A hand-rolled fetch can only report that something failed. Client
 * validation stays local because it has to speak the visitor's language, which
 * the SDK's server messages do not.
 *
 * The form ID is supplied at build time from PUBLIC_FORMSPREE_ID. Until it is
 * set the form renders a clearly-labelled notice with the direct contact
 * routes instead of silently swallowing submissions.
 *
 * SHAPE. It asks seven things and only three are required: who you are, where
 * to reply, and what you need. Topic and fleet size are single taps, because a
 * chip someone actually presses is worth more than a text field they skip.
 *
 * ACCESSIBILITY. Every control has a real label, errors are tied to their input
 * with aria-describedby and aria-invalid, the first invalid field takes focus on
 * a failed submit, and the status region is aria-live so both success and
 * failure are announced rather than only shown.
 *
 * All copy arrives pre-translated from Astro.
 */
interface Labels {
  name: string;
  namePlaceholder: string;
  email: string;
  phone: string;
  company: string;
  fleetSize: string;
  message: string;
  messagePlaceholder: string;
  required: string;
  optional: string;
  send: string;
  sending: string;
  successTitle: string;
  successBody: string;
  successNext: string;
  successSteps: readonly string[];
  sendAnother: string;
  errorTitle: string;
  errorBody: string;
  validationName: string;
  validationEmail: string;
  validationEmailFormat: string;
  validationMessage: string;
  validationPhone: string;
  topicLegend: string;
  topics: Record<string, string>;
  fleetLegend: string;
  fleetBands: Record<string, string>;
  phoneCountry: string;
  phoneSearch: string;
  phoneNoMatches: string;
  phonePlaceholder: string;
  charactersLeft: string;
  privacyNote: string;
  unconfiguredTitle: string;
  unconfiguredBody: string;
}

interface Props {
  /** The Formspree form ID, not the full URL. Empty disables the form. */
  formId: string;
  labels: Labels;
  email: string;
  whatsappUrl: string;
  whatsappLabel: string;
  locale: string;
}

const MESSAGE_MAX = 1200;
/** The counter appears only inside this much of the ceiling. */
const COUNT_FROM = 200;

/* Deliberately permissive. Its job is to catch a typo, not to adjudicate what
   is a legal address; Formspree does the real check and reports it back. */
const looksLikeEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export default function ContactForm({ formId, labels, email, whatsappUrl, whatsappLabel, locale }: Props) {
  const id = useId();
  const [state, submitToFormspree, resetForm] = useForm(formId || 'disabled');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [topic, setTopic] = useState('');
  const [chars, setChars] = useState(0);
  const [phone, setPhone] = useState({ empty: true, valid: false, e164: '' });

  /* /analyze-your-fleet/ passes the visitor's selected challenges through as
     ?topic=. It goes into the message rather than a chip because it arrives as
     free text describing several problems at once. */
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('topic');
    if (value) {
      setTopic(value);
      setChars(value.length + 2);
    }
  }, []);

  if (!formId) {
    return (
      <div className="rounded-[--radius-panel] border border-prime-200 bg-prime-50 p-6 sm:p-8">
        <p className="text-label uppercase text-prime-700">{labels.unconfiguredTitle}</p>
        <p className="mt-3 measure text-ink-700">{labels.unconfiguredBody}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${email}`} className="btn btn-md btn-primary">{email}</a>
          <a href={whatsappUrl} rel="noopener noreferrer" target="_blank" className="btn btn-md btn-secondary">
            {whatsappLabel}
          </a>
        </div>
      </div>
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const data = new FormData(form);

    const next: Record<string, string> = {};
    if (!String(data.get('name') ?? '').trim()) next.name = labels.validationName;

    const address = String(data.get('email') ?? '').trim();
    if (!address) next.email = labels.validationEmail;
    else if (!looksLikeEmail(address)) next.email = labels.validationEmailFormat;

    /* Optional, but if it has been started it has to be finishable. */
    if (!phone.empty && !phone.valid) next.phone = labels.validationPhone;

    if (!String(data.get('message') ?? '').trim()) next.message = labels.validationMessage;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      event.preventDefault();
      form.querySelector<HTMLElement>(`[data-field="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    submitToFormspree(event);
  }

  if (state.succeeded) {
    return (
      <div role="status" className="rounded-[--radius-panel] border border-ink-100 bg-white p-7 shadow-[--shadow-card] sm:p-9">
        <svg className="sent-tick" width="52" height="52" viewBox="0 0 60 60" fill="none" aria-hidden="true">
          <circle cx="30" cy="30" r="27" stroke="var(--color-prime-500)" strokeWidth="2.5" strokeLinecap="round" transform="rotate(-90 30 30)" />
          <path d="M19 30.5 26.5 38 41 23" stroke="var(--color-prime-500)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <p className="mt-5 text-h3 text-ink-950">{labels.successTitle}</p>
        <p className="mt-3 measure text-ink-600">{labels.successBody}</p>

        <p className="mt-7 text-label uppercase text-ink-400">{labels.successNext}</p>
        <ol className="mt-4 flex flex-col gap-3">
          {labels.successSteps.map((step, i) => (
            <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-700">
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-prime-50 text-[0.75rem] font-bold text-prime-700"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappUrl} rel="noopener noreferrer" target="_blank" className="btn btn-md btn-primary">
            {whatsappLabel}
          </a>
          {/* The SDK's own reset, not a page reload. The form below is
              unmounted while this panel is showing, so it comes back with empty
              fields; reloading would also throw away the scroll position and
              re-fetch the page for no reason. */}
          <button
            type="button"
            onClick={() => {
              resetForm();
              setErrors({});
              setChars(0);
            }}
            className="btn btn-md btn-secondary"
          >
            {labels.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  const topicKeys = Object.keys(labels.topics);
  const fleetKeys = Object.keys(labels.fleetBands);
  const left = MESSAGE_MAX - chars;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <input type="hidden" name="_subject" value="PrimeTrack Rwanda website enquiry" />
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot: bots fill it, people never see it. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {/* --- Topic ------------------------------------------------------- */}
      <fieldset>
        <legend className="text-label uppercase text-ink-400">{labels.topicLegend}</legend>
        <div className="chips mt-3">
          {topicKeys.map((key) => (
            <label key={key} className="chip">
              <input type="radio" name="topic" value={labels.topics[key]} />
              {labels.topics[key]}
            </label>
          ))}
        </div>
      </fieldset>

      {/* --- Name -------------------------------------------------------- */}
      <div className="field">
        <div className={`field-box${errors.name ? ' is-invalid' : ''}`}>
          <input
            id={`${id}-name`}
            name="name"
            data-field="name"
            type="text"
            autoComplete="name"
            placeholder=" "
            className="field-input"
            aria-invalid={Boolean(errors.name) || undefined}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
          />
          <label htmlFor={`${id}-name`} className="field-label">{labels.name}</label>
        </div>
        {errors.name && <p id={`${id}-name-error`} className="field-error">{errors.name}</p>}
      </div>

      {/* --- Email + phone ------------------------------------------------ */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="field">
          <div className={`field-box${errors.email ? ' is-invalid' : ''}`}>
            <input
              id={`${id}-email`}
              name="email"
              data-field="email"
              type="email"
              autoComplete="email"
              placeholder=" "
              className="field-input"
              aria-invalid={Boolean(errors.email) || undefined}
              aria-describedby={errors.email ? `${id}-email-error` : undefined}
            />
            <label htmlFor={`${id}-email`} className="field-label">{labels.email}</label>
          </div>
          {errors.email && <p id={`${id}-email-error`} className="field-error">{errors.email}</p>}
          <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
        </div>

        <div>
          <PhoneField
            id={`${id}-phone`}
            name="phone"
            invalid={Boolean(errors.phone)}
            describedBy={errors.phone ? `${id}-phone-error` : undefined}
            onValidityChange={setPhone}
            labels={{
              label: labels.phone,
              optional: labels.optional,
              countryLabel: labels.phoneCountry,
              searchPlaceholder: labels.phoneSearch,
              noMatches: labels.phoneNoMatches,
              placeholder: labels.phonePlaceholder,
              invalid: labels.validationPhone,
            }}
          />
          {errors.phone && <p id={`${id}-phone-error`} className="field-error">{errors.phone}</p>}
        </div>
      </div>

      {/* --- Company ----------------------------------------------------- */}
      <div className="field">
        <div className="field-box">
          <input
            id={`${id}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder=" "
            className="field-input"
          />
          <label htmlFor={`${id}-company`} className="field-label">
            {labels.company} <span className="text-ink-400">({labels.optional})</span>
          </label>
        </div>
      </div>

      {/* --- Fleet size --------------------------------------------------- */}
      <fieldset>
        <legend className="text-label uppercase text-ink-400">{labels.fleetLegend}</legend>
        <div className="chips mt-3">
          {fleetKeys.map((key) => (
            <label key={key} className="chip">
              <input type="radio" name="fleetSize" value={labels.fleetBands[key]} />
              {labels.fleetBands[key]}
            </label>
          ))}
        </div>
      </fieldset>

      {/* --- Message ------------------------------------------------------ */}
      <div className="field">
        <div className={`field-box${errors.message ? ' is-invalid' : ''}`}>
          <textarea
            id={`${id}-message`}
            name="message"
            data-field="message"
            rows={5}
            maxLength={MESSAGE_MAX}
            defaultValue={topic ? `${topic}\n\n` : ''}
            onChange={(e) => setChars(e.target.value.length)}
            placeholder=" "
            className="field-input"
            aria-invalid={Boolean(errors.message) || undefined}
            aria-describedby={
              [left <= COUNT_FROM ? `${id}-count` : '', errors.message ? `${id}-message-error` : '']
                .filter(Boolean)
                .join(' ') || undefined
            }
          />
          <label htmlFor={`${id}-message`} className="field-label">{labels.message}</label>
        </div>
        <div className="mt-2 flex items-start justify-between gap-4">
          {errors.message ? (
            <p id={`${id}-message-error`} className="field-error mt-0">{errors.message}</p>
          ) : (
            <p className="text-[0.8125rem] text-ink-400">{labels.messagePlaceholder}</p>
          )}
          {/* Only once it is nearly relevant. A counter reading "1,111
              characters left" under an empty box is noise, and it raises the
              question of how to punctuate a thousand in two languages for no
              benefit. The textarea's own maxLength is what browsers announce. */}
          {left <= COUNT_FROM && (
            <p id={`${id}-count`} className="shrink-0 text-[0.8125rem] tabular-nums text-prime-700">
              {labels.charactersLeft.replace('{n}', String(left))}
            </p>
          )}
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="field-error" />
      </div>

      {/* --- Status ------------------------------------------------------- */}
      <div aria-live="polite">
        {state.errors && (
          <div className="rounded-[--radius-card] border border-signal-700/30 bg-signal-100 p-4">
            <p className="font-semibold text-signal-700">{labels.errorTitle}</p>
            <p className="mt-1 text-[0.9375rem] text-ink-700">{labels.errorBody}</p>
            <ValidationError errors={state.errors} className="mt-2 text-[0.9375rem] text-signal-700" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button type="submit" disabled={state.submitting} className="btn btn-lg btn-primary self-start">
          {state.submitting ? labels.sending : labels.send}
        </button>
        <p className="text-[0.8125rem] leading-snug text-ink-500">{labels.privacyNote}</p>
      </div>
    </form>
  );
}
