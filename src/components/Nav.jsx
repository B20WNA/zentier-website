import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <a href="#home" className="nav-logo" onClick={(e) => handleClick(e, 'home')}>
        Z<span className="dot">·</span>ENTIER
      </a>
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
        <li><a href="#for-clients" onClick={(e) => handleClick(e, 'for-clients')}>For Clients</a></li>
        <li><a href="#for-candidates" onClick={(e) => handleClick(e, 'for-candidates')}>For Candidates</a></li>
        <li><a href="#intel" onClick={(e) => handleClick(e, 'intel')}>Intelligence</a></li>
      </ul>
      <a href="#contact" className="nav-cta" onClick={(e) => handleClick(e, 'contact')}>
        Start a conversation
      </a>
      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
