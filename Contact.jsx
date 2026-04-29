import useReveal from './useReveal'
import { scrollToSection } from './scrollHelper'

const types = [
  {
    title: 'Lawyers in transition',
    body: 'Those considering a move into AI governance, product, or innovation roles inside firms or vendors. Typically 2 to 6 years PQE, from tech, IP, or data practices.',
  },
  {
    title: 'Legal technologists',
    body: 'People whose remit has expanded faster than their title. Running AI programmes they were never hired to run. Frequently underrecognised.',
  },
  {
    title: 'Vendor side talent',
    body: 'Engineers and product people from the leading legal AI platforms who want to take what they have learned into a firm or a new build.',
  },
  {
    title: 'Governance and regulatory',
    body: 'Professionals from regulatory bodies whose skills are becoming increasingly valuable inside legal institutions as AI liability becomes load-bearing.',
  },
]

export default function ForCandidates() {
  const [ref, visible] = useReveal()

  return (
    <section id="for-candidates" className="candidates">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow eyebrow-light">For candidates</div>
        <h2 className="section-title title-light">
          The right move is
          <br />
          <em>rarely the obvious one.</em>
        </h2>

        <div className="candidates-grid">
          <div className="cand-body">
            <p>
              The legal AI market is creating roles that did not exist three
              years ago. Some of them are genuinely significant, the kind of
              position that shapes what a firm looks like in five years. Others
              are reactive and poorly defined.
            </p>
            <p>Knowing the difference requires being close to the market. We are.</p>
            <p>
              The people we work with are not usually looking. They are
              performing well, they are in demand, and they are selective about
              who they give their time to. They move when the opportunity is
              right, not when a recruiter sends them a message about an exciting
              opportunity.
            </p>
            <p>
              A conversation first. We want to understand where you are, what
              you are building toward, and what would genuinely make a move
              worth considering. We do not pitch roles at that stage. We
              listen.
            </p>
            <p>
              We do not share candidate information without permission. We do
              not send CVs speculatively. Your career is not ours to manage.
              But we can be useful at the moments that matter.
            </p>

            <a
              href="#contact"
              className="btn-primary btn-terracotta"
              onClick={(e) => scrollToSection(e, 'contact')}
              style={{ marginTop: '0.5rem' }}
            >
              Get in touch
            </a>
          </div>

          <div className="cand-types">
            {types.map((t) => (
              <div className="cand-type" key={t.title}>
                <div className="cand-type-title">{t.title}</div>
                <div className="cand-type-body">{t.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
