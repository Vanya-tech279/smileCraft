export default function Logo({ id = "logo-grad" }) {
  return (
    <svg viewBox="0 0 48 48" width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b9bff" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill={`url(#${id})`} />
      <path
        d="M24 13c-3-2.6-9-1.6-10 3.6-.7 3.6 1.2 6.2 2 9.4.8 3.2 1 8 3.4 8 2.2 0 1.8-5.4 4.6-5.4s2.4 5.4 4.6 5.4c2.4 0 2.6-4.8 3.4-8 .8-3.2 2.7-5.8 2-9.4C33 11.4 27 10.4 24 13z"
        fill="#fff"
      />
      <path d="M37 6l1.3 3.2 3.2 1.3-3.2 1.3L37 15l-1.3-3.2-3.2-1.3 3.2-1.3z" fill="#bfdbfe" />
    </svg>
  );
}
