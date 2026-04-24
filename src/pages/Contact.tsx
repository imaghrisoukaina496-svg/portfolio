import { Helmet } from 'react-helmet-async'
import { profile } from '@/data/profile'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — {profile.name}</title>
        <meta name="description" content={`Contacter ${profile.name} — ${profile.email}`} />
      </Helmet>

      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            fontSize: '0.72rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--g3)',
            fontWeight: 600, marginBottom: '0.5rem',
          }}>
            Disponible pour des opportunités
          </div>
          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '2.2rem', color: 'var(--g1)', fontWeight: 700,
          }}>
            Me contacter
          </h1>
          <div style={{
            width: '48px', height: '3px',
            background: 'var(--g3)', margin: '0.8rem auto',
            borderRadius: '2px',
          }} />
        </div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
          {/* Email */}
          <a href={`mailto:${profile.email}`} style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            background: '#fff', border: '1px solid var(--g5)',
            borderRadius: '12px', padding: '1.2rem 1.5rem',
            textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--g3)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(42,90,39,0.1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--g5)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '10px',
              background: 'var(--g5)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', flexShrink: 0,
            }}>
              ✉
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--g3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Email
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--g1)', fontWeight: 500 }}>
                {profile.email}
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a href={profile.github} target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            background: '#fff', border: '1px solid var(--g5)',
            borderRadius: '12px', padding: '1.2rem 1.5rem',
            textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--g3)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(42,90,39,0.1)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--g5)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '10px',
              background: 'var(--g5)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', flexShrink: 0,
            }}>
              ⌨
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--g3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                GitHub
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--g1)', fontWeight: 500 }}>
                imaghrisoukaina496-svg
              </div>
            </div>
          </a>

          {/* Location */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            background: '#fff', border: '1px solid var(--g5)',
            borderRadius: '12px', padding: '1.2rem 1.5rem',
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '10px',
              background: 'var(--g5)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', flexShrink: 0,
            }}>
              ◎
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--g3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Localisation
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--g1)', fontWeight: 500 }}>
                {profile.location}
              </div>
            </div>
          </div>
        </div>

        {/* CTA box */}
        <div style={{
          background: 'var(--g1)', borderRadius: '16px',
          padding: '2.5rem 2rem', textAlign: 'center', color: '#fff',
        }}>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.5rem', marginBottom: '0.8rem',
          }}>
            Travaillons ensemble
          </h2>
          <p style={{
            color: 'var(--g5)', fontSize: '0.9rem',
            lineHeight: 1.7, marginBottom: '1.5rem',
          }}>
            Disponible pour des stages, des projets académiques<br />
            ou toute collaboration en informatique.
          </p>
          <a href={`mailto:${profile.email}`} style={{
            display: 'inline-block',
            background: 'var(--g4)', color: 'var(--g1)',
            padding: '10px 28px', borderRadius: '8px',
            fontSize: '0.85rem', fontWeight: 600,
            textDecoration: 'none', transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--g5)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--g4)')}>
            Envoyer un email
          </a>
        </div>
      </section>
    </>
  )
}
