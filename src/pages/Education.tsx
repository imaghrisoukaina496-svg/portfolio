import { Helmet } from 'react-helmet-async'
import { education } from '@/data/education'
import { profile } from '@/data/profile'

export default function Education() {
  return (
    <>
      <Helmet>
        <title>Formation — {profile.name}</title>
        <meta name="description" content="Parcours académique de Soukaina Imaghri, ENS Marrakech." />
      </Helmet>

      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '3.5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            fontSize: '0.72rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--g3)',
            fontWeight: 600, marginBottom: '0.5rem',
          }}>
            Parcours académique
          </div>
          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '2.2rem', color: 'var(--g1)', fontWeight: 700,
          }}>
            Formation
          </h1>
          <div style={{
            width: '48px', height: '3px',
            background: 'var(--g3)', margin: '0.8rem auto',
            borderRadius: '2px',
          }} />
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{
            position: 'absolute', left: '6px', top: '12px', bottom: 0,
            width: '2px', background: 'var(--g5)',
          }} />

          {education.map((e, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '3rem' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-2rem', top: '4px',
                width: '14px', height: '14px', borderRadius: '50%',
                background: 'var(--g3)',
                border: '3px solid var(--gbg)',
                boxShadow: '0 0 0 3px var(--g5)',
              }} />

              <div style={{
                background: '#fff', border: '1px solid var(--g5)',
                borderRadius: '14px', padding: '1.5rem 1.8rem',
                borderLeft: '4px solid var(--g3)',
              }}>
                {/* Period */}
                <div style={{
                  fontSize: '0.72rem', textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--g3)',
                  fontWeight: 600, marginBottom: '0.5rem',
                }}>
                  {e.start} — {e.end ?? 'Présent'} {e.location ? `· ${e.location}` : ''}
                </div>

                {/* School */}
                <h2 style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.3rem', color: 'var(--g1)', fontWeight: 700,
                }}>
                  {e.school}
                </h2>

                {/* Degree */}
                <p style={{
                  fontSize: '0.95rem', color: 'var(--g2)',
                  marginTop: '0.3rem', fontWeight: 500,
                }}>
                  {e.degree}{e.field ? ` — ${e.field}` : ''}
                </p>

                {/* Courses */}
                {e.courses && e.courses.length > 0 && (
                  <div style={{ marginTop: '1rem' }}>
                    <p style={{
                      fontSize: '0.78rem', textTransform: 'uppercase',
                      letterSpacing: '0.08em', color: 'var(--g3)',
                      fontWeight: 600, marginBottom: '0.5rem',
                    }}>
                      Matières clés
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {e.courses.map(c => (
                        <span key={c} style={{
                          background: 'var(--g5)', color: 'var(--g1)',
                          fontSize: '0.75rem', padding: '4px 12px',
                          borderRadius: '20px', fontWeight: 500,
                        }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {e.highlights && e.highlights.length > 0 && (
                  <div style={{ marginTop: '1rem' }}>
                    <p style={{
                      fontSize: '0.78rem', textTransform: 'uppercase',
                      letterSpacing: '0.08em', color: 'var(--g3)',
                      fontWeight: 600, marginBottom: '0.5rem',
                    }}>
                      Points forts
                    </p>
                    <ul style={{ paddingLeft: '1.2rem' }}>
                      {e.highlights.map(h => (
                        <li key={h} style={{
                          fontSize: '0.85rem', color: 'var(--g1)',
                          lineHeight: 1.7, marginBottom: '0.2rem',
                        }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div style={{
          marginTop: '1rem',
          background: '#fff', border: '1px solid var(--g5)',
          borderRadius: '14px', padding: '1.5rem 1.8rem',
        }}>
          <h3 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.1rem', color: 'var(--g1)',
            marginBottom: '1rem',
          }}>
            Langues
          </h3>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {profile.languages.map(l => (
              <div key={l.lang} style={{ textAlign: 'center' }}>
                <div style={{
                  fontWeight: 600, fontSize: '0.9rem', color: 'var(--g1)',
                }}>
                  {l.lang}
                </div>
                <div style={{
                  background: 'var(--g5)', color: 'var(--g2)',
                  fontSize: '0.72rem', padding: '2px 10px',
                  borderRadius: '20px', marginTop: '4px', fontWeight: 500,
                }}>
                  {l.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
