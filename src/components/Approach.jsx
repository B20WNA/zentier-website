import useReveal from './useReveal'

const pillars = [
  { num: '01', title: 'Depth before search', body: 'The brief comes first. We understand the role before we recruit for it, including what the firm is actually trying to build.' },
  { num: '02', title: 'A narrow channel', body: 'We work in one market. Specialists exist because depth matters more than breadth when the problem is genuinely hard.' },
  { num: '03', title: 'The people not looking', body: 'The candidates who make the biggest difference are rarely on the market. Finding them requires a network built on trust, not volume.' },
  { num: '04', title: 'Intelligence led', body: 'We track this market continuously. That intelligence sits inside every search we run and every conversation we have.' },
]

export default function Approach() {
  const [ref, visible] = useReveal()
  return (
    <section id="approach" className="approach">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow">How we work</div>
        <h2 className="section-title">Precision before speed.</h2>
        <div className="approach-intro">
          <div className="approach-body">
            <p>We start with the brief, not the database. Before we search, we work to understand what the role actually requires. Not what the job description says, but what success looks like in twelve months, what has been tried before, and what kind of person will work in this particular firm at this particular moment.</p>
            <p>We work in one market. That is deliberate. The knowledge compounds. The network is built on relationships, not registrations. When we approach a candidate, it is because there is a specific reason for the conversation.</p>
          </div>
          <div className="approach-pull">"Most firms measure success by volume and speed. We do not."</div>
        </div>
        <div className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.num}>
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
