import useReveal from './useReveal'

export default function Who() {
  const [ref, visible] = useReveal()

  return (
    <section id="who" className="who">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow">Who we work with</div>
        <h2 className="section-title">
          Three distinct markets.
          <br />
          <em>One deep specialism.</em>
        </h2>

        <div className="who-grid">
          <div className="who-card">
            <svg className="who-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="4" y="12" width="32" height="24" rx="1" stroke="#1C1C1A" strokeWidth="1.5" />
              <path d="M14 12V8a6 6 0 0112 0v4" stroke="#1C1C1A" strokeWidth="1.5" />
              <line x1="20" y1="20" x2="20" y2="28" stroke="#1C1C1A" strokeWidth="1.5" />
              <line x1="16" y1="24" x2="24" y2="24" stroke="#1C1C1A" strokeWidth="1.5" />
            </svg>
            <div className="who-title">Law firms</div>
            <div className="who-body">
              From Magic Circle to boutique, firms building internal AI
              capability, governance functions, and innovation teams that
              require people who understand both the law and the technology
              transforming it.
            </div>
          </div>

          <div className="who-card">
            <svg className="who-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="6" y="6" width="28" height="28" rx="2" stroke="#1C1C1A" strokeWidth="1.5" />
              <path d="M13 20h4l3-7 4 14 3-7h4" stroke="#1C1C1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="who-title">Legal technology companies</div>
            <div className="who-body">
              Vendors, platforms, and tools competing for the small number of
              people who can translate between the product and the market it
              serves.
            </div>
          </div>

          <div className="who-card">
            <svg className="who-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="14" stroke="#1C1C1A" strokeWidth="1.5" />
              <path d="M20 6v28M6 20h28M9 9l22 22M31 9L9 31" stroke="#1C1C1A" strokeWidth="1" />
            </svg>
            <div className="who-title">Legal AI spin-outs and startups</div>
            <div className="who-body">
              Early-stage teams that need commercial, product, and technical
              hires who understand the legal buyer and the workflow they are
              selling into.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
