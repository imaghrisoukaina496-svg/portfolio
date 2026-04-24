import { Outlet, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { profile } from '@/data/profile'

export default function RootLayout() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Accueil', end: true },
    { to: '/projects', label: 'Projets' },
    { to: '/education', label: 'Formation' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen" style={{ background: 'var(--gbg)', color: 'var(--g1)' }}>
      {/* NAV */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(248,250,242,0.95)' : 'rgba(248,250,242,0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid var(--g5)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <nav style={{
          maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem',
          height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700, fontSize: '1.15rem', color: 'var(--g2)',
              letterSpacing: '0.01em',
            }}>
              S. Imaghri
            </span>
          </NavLink>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
               className="hidden md:flex">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--g2)' : 'var(--g3)',
                  borderBottom: isActive ? '2px solid var(--g3)' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.2s',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            className="md:hidden"
            aria-label="Menu"
          >
            <div style={{ width: 22, height: 2, background: 'var(--g2)', marginBottom: 5, transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: 22, height: 2, background: 'var(--g2)', marginBottom: 5,
              opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
            <div style={{ width: 22, height: 2, background: 'var(--g2)', transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: 'var(--gbg)', borderTop: '1px solid var(--g5)',
            padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem',
          }}
          className="md:hidden">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--g2)' : 'var(--g3)',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* MAIN */}
      <main style={{ paddingTop: '62px' }}>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid var(--g5)',
        padding: '1.5rem',
        textAlign: 'center',
        fontSize: '0.78rem',
        color: 'var(--g3)',
      }}>
        <p>© {new Date().getFullYear()} {profile.name} · {profile.school}</p>
        <p style={{ marginTop: '0.3rem' }}>
          <a href={`mailto:${profile.email}`} style={{ color: 'var(--g3)', textDecoration: 'none' }}>
            {profile.email}
          </a>
          {' · '}
          <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: 'var(--g3)', textDecoration: 'none' }}>
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
}
