import useReveal from './useReveal'
import { scrollToSection } from './scrollHelper'

export default function Hero() {
  const [ref, visible] = useReveal()
  return (
    <section id="home" className="hero">
      <div ref={ref} className={`hero-inner container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow">Legal AI Talent Specialists</div>
        <h1 className="hero-title">
          The legal AI market is moving.
          <br />
          <em>Most firms are still figuring out how to hire for it.</em>
        </h1>
        <p className="hero-sub">
          Zentier works with law firms and legal technology companies on the hires
          that shape what their AI capability becomes. We focus on one market, and
          we know it in detail.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>
            Start a conversation
          </a>
          <a href="#approach" className="btn-ghost" onClick={(e) => scrollToSection(e, 'approach')}>
            Our approach
          </a>
        </div>
      </div>
    </section>
  )
}
