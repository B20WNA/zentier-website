import useReveal from './useReveal'

export default function Intel() {
  const [ref, visible] = useReveal()
  return (
    <section id="intel" className="intel">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow">Market intelligence</div>
        <h2 className="section-title">What is happening in legal AI hiring,<br />and <em>what it means.</em></h2>
        <div className="intel-intro">
          <div className="intel-intro-body">The legal AI talent market is moving faster than most commentary reflects. We track it closely, firm by firm, role by role, trend by trend, because that knowledge is what makes our searches different. What we share here is a fraction of what we see. It is written for people who want insight, not content.</div>
          <div className="intel-intro-aside">A market in transition creates a talent problem. The firms that solve it first build an advantage that is hard to close.</div>
        </div>
        <article className="article-card">
          <div className="article-top">
            <div className="article-tag">Governance and risk</div>
            <h3 className="article-title">Why 2026 is the year legal AI governance hiring becomes load-bearing</h3>
          </div>
          <div className="article-body">
            <p>For the past two years, the dominant story in UK legal AI has been deployment. Which firms are using which tools. Which platforms are gaining traction. How fast adoption is spreading.</p>
            <p>That story is largely told. AI is no longer a pilot inside most serious UK law firms. It is infrastructure.</p>
            <p>The story that follows is less visible and more consequential: who is responsible when it goes wrong. The liability question is arriving faster than most firms anticipated.</p>
            <p>Sullivan and Cromwell's April 2026 apology to a federal bankruptcy judge, after submitting a motion containing over 40 AI-generated errors, was not an isolated incident. It was a data point in a pattern that now has more than 1,300 documented cases.</p>
            <p>Regulators are moving toward mandatory documentation requirements for AI usage. The conversation inside firms has shifted from how do we deploy this to how do we govern it, who owns the risk, and what happens when something fails.</p>
            <p>That shift is creating a specific hiring need. Not AI engineers. People who sit at the intersection of legal knowledge, technical literacy, and regulatory instinct.</p>
            <p>The candidates who can fill these roles are a small population. They come from regulatory practice, governance functions, and the policy side of legal AI. They are not actively looking. The window to secure them, before demand becomes obvious and competition increases, is narrowing.</p>
          </div>
          <div className="article-footer">
            <div className="article-date">April 2026</div>
            <div className="article-read">Read more →</div>
          </div>
        </article>
      </div>
    </section>
  )
}
