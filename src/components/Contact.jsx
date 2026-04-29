import useReveal from './useReveal'

export default function Contact() {
  const [ref, visible] = useReveal()
  return (
    <section id="contact" className="contact">
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="eyebrow eyebrow-light eyebrow-center">Get in touch</div>
        <h2 className="section-title title-light">Let's talk.</h2>
        <p className="contact-sub">Whether you are working on a hire, thinking about a move, or simply want to understand what is happening in the market, we are worth talking to.</p>
        <div className="contact-links">
          <a href="mailto:hello@zentiertalent.com" className="contact-link">hello@zentiertalent.com</a>
          <span className="contact-divider">/</span>
          <a href="https://www.linkedin.com/company/zentiertalent/" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="contact-closing">Tell us what you are working on. We will tell you honestly whether we can help.</p>
      </div>
    </section>
  )
}
