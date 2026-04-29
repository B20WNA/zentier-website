import useReveal from './useReveal'
import { scrollToSection } from './scrollHelper'

const steps = [
  {
    num: '1',
    title: 'The brief',
    body: "A proper conversation before we approach anyone. We want to understand the firm's AI programme, where it is, where it is going, and what kind of person is most likely to succeed in this specific environment.",
  },
  {
    num: '2',
    title: 'The profile',
    body: 'Not a job description. A picture of a person. Their background, their experience of failure as much as success, the decisions they have made that reveal how they think.',
  },
  {
    num: '3',
    title: 'The search',
    body: 'Direct. Selective. With a specific reason for every approach we make. We do not spray and wait. We identify and engage.',
  },
  {
    num: '4',
    title: 'The outcome',
    body: 'Candidates who are not just qualified. They are right. The difference is the brief. It always comes back to the brief.',
  },
]

export default function ForClients() {
  const [ref, visible] = useReveal()

  return (
    <section id="for-clients" className="clients">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow">For clients</div>
        <h2 className="section-title">
          The hire that changes the trajectory
          <br />
          of <em>your AI programme.</em>
        </h2>

        <div className="service-grid">
          <div className="service-body">
            <p>
              The challenge most firms face right now is not finding someone
              with legal AI experience on their CV. It is finding someone who
              has been inside the problem, who has sat with the ambiguity, made
              decisions under pressure, and built something that actually
              worked.
            </p>
            <p>
              That person exists. They are almost certainly not actively
              looking. And the process of finding them looks nothing like a
              standard recruitment search.
            </p>
            <p>
              The briefs we receive come in too narrow or too broad. Too
              narrow: a job description written for a role that does not quite
              exist yet. Too broad: a vague mandate to find someone good in
              legal AI with no clear sense of what good looks like here.
            </p>
            <p>Both produce the same result. A search that generates activity without generating the right outcome.</p>

            <div className="commercial-callout">
              A wrong hire in this market is not a six-month problem. It costs
              the firm a year of programme momentum, the salary, and the
              credibility of the function with the people meant to use it. The
              right hire pays back several times over. The difference between
              the two is usually the brief.
            </div>

            <p>
              If you have a hire coming up, or a capability gap you have not
              yet turned into a brief, that is where the conversation starts.
            </p>

            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => scrollToSection(e, 'contact')}
              style={{ marginTop: '0.5rem' }}
            >
              Start a conversation
            </a>
          </div>

          <div className="service-steps">
            {steps.map((s) => (
              <div className="step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <div className="step-content">
                  <div className="step-title">{s.title}</div>
                  <div className="step-body">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
