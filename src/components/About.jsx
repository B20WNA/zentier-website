import useReveal from './useReveal'

const values = [
  { title: 'Fewer clients, more carefully', body: 'Working with depth requires working selectively. That is a deliberate choice, not a limitation.' },
  { title: 'The brief before the search', body: 'Every engagement starts with a conversation. Often more than one. Before we approach a single candidate.' },
  { title: 'Honest about what we find', body: 'We tell clients what is realistic and available, not what they want to hear.' },
  { title: 'Intelligence that compounds', body: 'The more we know about this market, the sharper every search becomes.' },
]

export default function About() {
  const [ref, visible] = useReveal()
  return (
    <section id="about" className="about">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow">About Zentier</div>
        <h2 className="section-title">Built on a different<br /><em>way of working.</em></h2>
        <div className="about-grid">
          <div className="about-body">
            <p>Zentier was built on a simple observation: the legal AI talent market is being served by people who do not understand it well enough to ask the right questions.</p>
            <p>That is not a criticism. It is a structural problem. The market is new, the roles are hybrid, and the candidate pool is small and largely passive. <strong>Generalist approaches produce generalist results.</strong> In a market moving this fast, generalist results are expensive.</p>
            <p>Recruitment at this level is not a matching exercise. It is a problem-solving exercise that happens to end in a placement. It starts with understanding what a firm is actually trying to build, not just the role in front of us, but the capability gap behind it.</p>
            <div className="about-stance">The best hires in this market are not found through process. They are found through judgement. Process matters, but it is not what makes the difference.</div>
            <p>We track this market continuously. Which firms are deploying what. Where hiring pressure is building. Which roles are being created for the first time. That intelligence informs every search we run and every conversation we have.</p>
            <p>The legal AI market is at an early and important stage. The firms that hire well now will build capability that compounds. The ones that hire reactively will spend the next few years correcting it. We exist to help firms get it right the first time.</p>
          </div>
          <div className="about-aside">
            <div className="about-quote">A recruitment firm that measures success by whether the hire worked, not by how fast it was made.</div>
            <div className="about-values">
              {values.map((v) => (
                <div className="value-row" key={v.title}>
                  <div className="value-dot" aria-hidden="true"></div>
                  <div className="value-text"><strong>{v.title}</strong>{v.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
