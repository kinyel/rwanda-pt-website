/**
 * A country's flag, drawn rather than typed.
 *
 * Flag emoji do not exist on Windows (they show as two letters in boxes), so
 * the three flags the region switcher needs are drawn here, at a common 3:2,
 * small enough to sit beside a name in a menu. Simplified where a detail would
 * be a speck at 20px (Rwanda's sun keeps its rays and ring; Egypt's eagle is a
 * gold emblem), but every colour and band is the real one.
 *
 * A React component so the desktop switcher (Astro, rendered to plain HTML)
 * and the phone menu (React) draw exactly the same flags. Decorative: the
 * country's name is always written beside it.
 */
interface Props {
  code: string;
  className?: string;
}

/* Rwanda's sun: 24 rays round a ring, as a star of 48 points. */
const SUN =
  '24.00,2.20 24.23,3.46 24.78,2.30 24.67,3.58 25.50,2.60 25.07,3.81 26.12,3.08 25.39,4.13 26.60,3.70 25.62,4.53 26.90,4.42 25.74,4.97 27.00,5.20 25.74,5.43 26.90,5.98 25.62,5.87 26.60,6.70 25.39,6.27 26.12,7.32 25.07,6.59 25.50,7.80 24.67,6.82 24.78,8.10 24.23,6.94 24.00,8.20 23.77,6.94 23.22,8.10 23.33,6.82 22.50,7.80 22.93,6.59 21.88,7.32 22.61,6.27 21.40,6.70 22.38,5.87 21.10,5.98 22.26,5.43 21.00,5.20 22.26,4.97 21.10,4.42 22.38,4.53 21.40,3.70 22.61,4.13 21.88,3.08 22.93,3.81 22.50,2.60 23.33,3.58 23.22,2.30 23.77,3.46';

export default function Flag({ code, className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 30 20"
      width="20"
      height="14"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={`flag ${className}`}
    >
      {code === 'NGR' && (
        <>
          <rect width="30" height="20" fill="#fff" />
          <rect width="10" height="20" fill="#008751" />
          <rect x="20" width="10" height="20" fill="#008751" />
        </>
      )}
      {code === 'RWA' && (
        <>
          <rect width="30" height="20" fill="#20603d" />
          <rect width="30" height="15" fill="#fad201" />
          <rect width="30" height="10" fill="#00a1de" />
          <polygon points={SUN} fill="#e5be01" />
          <circle cx="24" cy="5.2" r="1.5" fill="#e5be01" stroke="#00a1de" strokeWidth="0.45" />
        </>
      )}
      {code === 'EGY' && (
        <>
          <rect width="30" height="20" fill="#000" />
          <rect width="30" height="13.34" fill="#fff" />
          <rect width="30" height="6.67" fill="#ce1126" />
          <path
            d="M15 7.7c-.55 0-.95.45-.95 1l-1.65.45.5 1.55 1.1-.3.2 1.6h1.6l.2-1.6 1.1.3.5-1.55-1.65-.45c0-.55-.4-1-.95-1z"
            fill="#c09300"
          />
        </>
      )}
    </svg>
  );
}
