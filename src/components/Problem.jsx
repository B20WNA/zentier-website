import useReveal from './useReveal'

export default function Problem() {
  const [ref, visible] = useReveal()
  return (
    <section id="problem" className="problem">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow eyebrow-light">The challenge</div>
        <h2 className="section-title title-light">A rare intersection.<br /><em>Rarely hired well.</em></h2>
        <div className="problem-grid">
          <div className="problem-body">
            <p>Roles are being created that did not exist two years ago. The people who can fill them sit at an unusual intersection: legal knowledge, technical fluency, and the ability to operate inside institutions changing faster than they expected.</p>
            <p>That combination is rare. It does not appear on job boards. It is not found by sending the same CV to six firms and waiting.</p>
            <p>Most recruitment in this space is optimised for speed and volume. Neither produces the right result when the role is genuinely hard to define and the candidate pool is genuinely small.</p>
            <p>The firms getting it right are the ones where someone internal has enough knowledge to ask hard questions in a brief. Most do not have that person yet. We are that person.</p>
          </div>
          <div className="problem-stats">
            <div className="stat-item">
              <div className="stat-num">50+</div>
              <div className="stat-label">Countries in CMS's Harvey enterprise deployment. The governance and adoption work is only just beginning.</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">1,300+</div>
              <div className="stat-label">Documented AI hallucination cases in legal filings, including a Sullivan and Cromwell apology in April 2026.</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">3</div>
              <div className="stat-label">Years since AI entered legal practice at scale. The talent infrastructure has not kept pace.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
