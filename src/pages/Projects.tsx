import { Helmet } from 'react-helmet-async'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projets — {profile.name}</title>
        <meta name="description" content="Projets GitHub de Soukaina Imaghri." />
      </Helmet>

      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            fontSize: '0.72rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--g3)',
            fontWeight: 600, marginBottom: '0.5rem',
          }}>
            GitHub · 105 repositories
          </div>
          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '2.2rem', color: 'var(--g1)', fontWeight: 700,
          }}>
            Projets & TP
          </h1>
          <div style={{
            width: '48px', height: '3px',
            background: 'var(--g3)', margin: '0.8rem auto',
            borderRadius: '2px',
          }} />
          <p style={{ color: 'var(--g3)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
            Projets académiques issus de mes formations — 328 contributions sur GitHub en 2026.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.2rem',
        }}>
          {projects.map(p => (
            <article key={p.title} style={{
              background: '#fff', border: '1px solid var(--g5)',
              borderRadius: '14px', padding: '1.4rem',
              borderTop: p.featured ? '3px solid var(--g3)' : '1px solid var(--g5)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              display: 'flex', flexDirection: 'column', gap: '0.8rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(42,90,39,0.12)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'none'
            }}>
              {p.featured && (
                <span style={{
                  fontSize: '0.68rem', textTransform: 'uppercase',
                  letterSpacing: '0.08em', color: 'var(--g3)', fontWeight: 600,
                }}>
                  ★ Mis en avant
                </span>
              )}
              <h3 style={{
                fontSize: '1rem', fontWeight: 600, color: 'var(--g1)',
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--g3)', lineHeight: 1.6, flex: 1 }}>
                {p.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    background: 'var(--g5)', color: 'var(--g1)',
                    fontSize: '0.68rem', padding: '2px 9px',
                    borderRadius: '20px', fontWeight: 500,
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" style={{
                    fontSize: '0.8rem', color: 'var(--g2)',
                    textDecoration: 'none', borderBottom: '1px solid var(--g4)',
                  }}>
                    Code source ↗
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" style={{
                    fontSize: '0.8rem', color: 'var(--g2)',
                    textDecoration: 'none', borderBottom: '1px solid var(--g4)',
                  }}>
                    Démo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href={profile.github} target="_blank" rel="noreferrer" style={{
            display: 'inline-block',
            background: 'var(--g1)', color: '#fff',
            padding: '10px 28px', borderRadius: '8px',
            fontSize: '0.85rem', fontWeight: 500,
            textDecoration: 'none',
          }}>
            Voir tous mes repos GitHub ↗
          </a>
        </div>
      </section>
    </>
  )
}
