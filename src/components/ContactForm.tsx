import { useEffect, useId, useState, type FormEvent } from 'react';

/**
 * Contact form, posting to Formspree.
 *
 * The endpoint is supplied at build time from PUBLIC_FORMSPREE_ID. Until that
 * is set the form renders a clearly-labelled unconfigured notice with the
 * direct contact routes instead, rather than silently swallowing submissions.
 *
 * Accessibility: every field has a real <label>, errors are tied to their
 * input with aria-describedby and aria-invalid, and the status region is
 * aria-live so success and failure are announced rather than only shown.
 *
 * All copy arrives pre-translated from Astro.
 */
interface Labels {
  name: string;
  namePlaceholder: string;
  contactField: string;
  contactPlaceholder: string;
  company: string;
  companyPlaceholder: string;
  fleetSize: string;
  fleetSizePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  required: string;
  optional: string;
  send: string;
  sending: string;
  successTitle: string;
  successBody: string;
  errorTitle: string;
  errorBody: string;
  validationName: string;
  validationContact: string;
  validationMessage: string;
  unconfiguredTitle: string;
  unconfiguredBody: string;
}

interface Props {
  endpoint: string;
  labels: Labels;
  email: string;
  whatsappUrl: string;
  whatsappLabel: string;
  locale: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ endpoint, labels, email, whatsappUrl, whatsappLabel, locale }: Props) {
  const id = useId();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [topic, setTopic] = useState('');

  /* /analyze-your-fleet/ passes the visitor's selected challenges through. */
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('topic');
    if (value) setTopic(value);
  }, []);

  if (!endpoint) {
    return (
      <div className="rounded-[--radius-panel] border border-prime-200 bg-prime-50 p-6 sm:p-8">
        <p className="text-label uppercase text-prime-700">{labels.unconfiguredTitle}</p>
        <p className="mt-3 measure text-ink-700">{labels.unconfiguredBody}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-[--radius-card] bg-prime-500 px-6 font-semibold text-white hover:bg-prime-600"
          >
            {email}
          </a>
          <a
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex min-h-12 items-center justify-center rounded-[--radius-card] border border-ink-300 bg-white px-6 font-semibold text-ink-900 hover:bg-white/70"
          >
            {whatsappLabel}
          </a>
        </div>
      </div>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const next: Record<string, string> = {};
    if (!String(data.get('name') ?? '').trim()) next.name = labels.validationName;
    if (!String(data.get('contact') ?? '').trim()) next.contact = labels.validationContact;
    if (!String(data.get('message') ?? '').trim()) next.message = labels.validationMessage;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[data-field="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus('success');
      form.reset();
      setTopic('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-[--radius-panel] border border-ink-100 bg-ink-50 p-6 sm:p-8">
        <p className="text-h3 text-ink-950">{labels.successTitle}</p>
        <p className="mt-3 measure text-ink-600">{labels.successBody}</p>
      </div>
    );
  }

  const field =
    'mt-1.5 w-full rounded-[--radius-card] border bg-white px-3.5 py-3 text-[1rem] text-ink-900 ' +
    'transition-colors duration-[--duration-fast] placeholder:text-ink-400 ' +
    'focus:border-prime-500 focus:outline-none focus:ring-2 focus:ring-prime-500/25';
  const ok = 'border-ink-200';
  const bad = 'border-signal-700';
  const labelCls = 'block text-[0.9375rem] font-semibold text-ink-800';
  const hintCls = 'ml-1.5 text-[0.8125rem] font-normal text-ink-400';

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <input type="hidden" name="_subject" value="PrimeTrack Rwanda website enquiry" />
      <input type="hidden" name="locale" value={locale} />
      {/* Honeypot: bots fill it, people never see it. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label htmlFor={`${id}-name`} className={labelCls}>
          {labels.name}
          <span className={hintCls}>{labels.required}</span>
        </label>
        <input
          id={`${id}-name`}
          name="name"
          data-field="name"
          type="text"
          autoComplete="name"
          placeholder={labels.namePlaceholder}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          className={`${field} ${errors.name ? bad : ok}`}
        />
        {errors.name && (
          <p id={`${id}-name-error`} className="mt-1.5 text-[0.875rem] font-medium text-signal-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-contact`} className={labelCls}>
          {labels.contactField}
          <span className={hintCls}>{labels.required}</span>
        </label>
        <input
          id={`${id}-contact`}
          name="contact"
          data-field="contact"
          type="text"
          inputMode="email"
          autoComplete="email"
          placeholder={labels.contactPlaceholder}
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? `${id}-contact-error` : undefined}
          className={`${field} ${errors.contact ? bad : ok}`}
        />
        {errors.contact && (
          <p id={`${id}-contact-error`} className="mt-1.5 text-[0.875rem] font-medium text-signal-700">
            {errors.contact}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-company`} className={labelCls}>
            {labels.company}
            <span className={hintCls}>{labels.optional}</span>
          </label>
          <input
            id={`${id}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={labels.companyPlaceholder}
            className={`${field} ${ok}`}
          />
        </div>
        <div>
          <label htmlFor={`${id}-fleet`} className={labelCls}>
            {labels.fleetSize}
            <span className={hintCls}>{labels.optional}</span>
          </label>
          <input
            id={`${id}-fleet`}
            name="fleetSize"
            type="text"
            placeholder={labels.fleetSizePlaceholder}
            className={`${field} ${ok}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className={labelCls}>
          {labels.message}
          <span className={hintCls}>{labels.required}</span>
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          data-field="message"
          rows={5}
          defaultValue={topic ? `${topic}\n\n` : ''}
          placeholder={labels.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={`${field} resize-y ${errors.message ? bad : ok}`}
        />
        {errors.message && (
          <p id={`${id}-message-error`} className="mt-1.5 text-[0.875rem] font-medium text-signal-700">
            {errors.message}
          </p>
        )}
      </div>

      <div aria-live="polite">
        {status === 'error' && (
          <div className="rounded-[--radius-card] border border-signal-700/30 bg-signal-100 p-4">
            <p className="font-semibold text-signal-700">{labels.errorTitle}</p>
            <p className="mt-1 text-[0.9375rem] text-ink-700">{labels.errorBody}</p>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-13 items-center justify-center self-start rounded-[--radius-card] bg-prime-500 px-7
                   text-[1.0625rem] font-semibold text-white transition-colors duration-[--duration-base]
                   ease-[--ease-prime] hover:bg-prime-600 disabled:opacity-60"
      >
        {status === 'submitting' ? labels.sending : labels.send}
      </button>
    </form>
  );
}
