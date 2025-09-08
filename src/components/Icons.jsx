export const IconGithub = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
        <path
          fill="currentColor"
          d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577
          0-.285-.011-1.04-.017-2.045-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758
          -1.089-.744.083-.729.083-.729 1.205.084 1.838 1.268 1.838 1.268 1.07 1.836 2.807 1.306 3.492.998
          .108-.795.419-1.306.762-1.606-2.665-.305-5.467-1.365-5.467-6.075 0-1.342.469-2.44 1.236-3.297
          -.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.262.957-.266 1.984-.399 3.003-.404
          1.02.005 2.047.138 3.003.404 2.293-1.585 3.3-1.262 3.3-1.262.654 1.652.242 2.873.119 3.176
          .77.857 1.235 1.955 1.235 3.297 0 4.72-2.807 5.767-5.479 6.067.43.37.823 1.102.823 2.222
          0 1.604-.014 2.896-.014 3.289 0 .319.216.694.825.576C20.565 22.092 24 17.597 24 12.297
          24 5.667 18.627.297 12 .297z"
        />
  </svg>
);

export const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M20.45 20.45h-3.55v-5.6c0-1.34-.48-2.25-1.66-2.25-.9 0-1.43.6-1.66 1.18-.09.22-.11.52-.11.83v5.84H9.91s.05-9.48 0-10.46h3.55v1.48c.47-.73 1.31-1.77 3.19-1.77 2.33 0 4.08 1.52 4.08 4.79v5.96zM6.39 8.51c-1.14 0-1.88-.75-1.88-1.69 0-.96.75-1.69 1.91-1.69s1.88.73 1.9 1.69c0 .94-.73 1.69-1.93 1.69zM8.17 20.45H4.6V10h3.57v10.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.25.78 24 1.77 24h20.46c.98 0 1.77-.75 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/>
  </svg>
);

export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
  </svg>
);

export const IconHome = (props) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
    <path d="M3 9.75L12 3l9 6.75V20a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1V9.75z"/>
  </svg>
);

export const IconUser = (props) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
  </svg>
);

export const IconWork = (props) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
    <path d="M4 7V5a2 2 0 0 1 2-2h4V1h4v2h4a2 2 0 0 1 2 2v2h-2V5H6v2H4zm16 2H4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  </svg>
);

export const IconGlobe = (props) => {
  return (
    <svg
      {...props}
      className={`h-5 w-5 ${props.className ?? ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 0 0 20M12 2a15.3 15.3 0 0 1 0 20" />
    </svg>
  );
}

export const IconCheck = (props) => {
  return (
    <svg
      {...props}
      className={`h-4 w-4 ${props.className ?? ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export const IconDots = (props) => { 
  return (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
  </svg>
)}

export const IconList = (props) => { 
  return (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1.5"/><circle cx="4" cy="12" r="1.5"/><circle cx="4" cy="18" r="1.5"/>
  </svg>
)}