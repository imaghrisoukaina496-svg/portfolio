import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { certifications } from '@/data/certifications';
export default function Home() {
    const avgScore = Math.round(certifications.reduce((s, c) => s + c.score, 0) / certifications.length);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsxs("title", { children: [profile.name, " \u2014 Portfolio"] }), _jsx("meta", { name: "description", content: `Portfolio de ${profile.name}, étudiante en CLE-Informatique à l'ENS Marrakech.` })] }), _jsx("section", { style: {
                    minHeight: 'calc(100vh - 62px)',
                    maxWidth: '1000px', margin: '0 auto',
                    padding: '4rem 1.5rem 3rem',
                    display: 'flex', alignItems: 'center',
                }, children: _jsxs("div", { style: {
                        display: 'grid',
                        gridTemplateColumns: '1fr auto',
                        gap: '3rem', alignItems: 'center', width: '100%',
                    }, className: "grid-cols-1 sm:grid-cols-[1fr_auto]", children: [_jsxs("div", { className: "fade-up", children: [_jsx("div", { style: {
                                        display: 'inline-block',
                                        background: 'var(--g5)', color: 'var(--g1)',
                                        fontSize: '0.72rem', fontWeight: 600,
                                        letterSpacing: '0.12em', textTransform: 'uppercase',
                                        padding: '5px 14px', borderRadius: '20px', marginBottom: '1.2rem',
                                    }, children: "ENS Marrakech \u00B7 CLE-Informatique" }), _jsxs("h1", { style: {
                                        fontFamily: '"Playfair Display", serif',
                                        fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                                        lineHeight: 1.1, fontWeight: 700,
                                        color: 'var(--g1)',
                                    }, children: ["Soukaina", _jsx("br", {}), _jsx("em", { style: { color: 'var(--g3)', fontStyle: 'italic' }, children: "Imaghri" })] }), _jsx("p", { style: {
                                        marginTop: '1rem', fontSize: '1rem',
                                        color: 'var(--g2)', lineHeight: 1.7, maxWidth: '460px',
                                    }, children: profile.about }), _jsx("div", { style: {
                                        marginTop: '1.5rem', display: 'flex',
                                        flexWrap: 'wrap', gap: '8px',
                                    }, children: profile.skills.map(s => (_jsx("span", { style: {
                                            background: 'var(--g5)', color: 'var(--g1)',
                                            fontSize: '0.75rem', fontWeight: 500,
                                            padding: '4px 12px', borderRadius: '20px',
                                        }, children: s }, s))) }), _jsxs("div", { style: { marginTop: '2rem', display: 'flex', gap: '12px', flexWrap: 'wrap' }, children: [_jsx(Link, { to: "/certifications", style: {
                                                background: 'var(--g2)', color: '#fff',
                                                padding: '10px 24px', borderRadius: '8px',
                                                fontSize: '0.85rem', fontWeight: 500,
                                                textDecoration: 'none', transition: 'background 0.2s',
                                            }, onMouseEnter: e => (e.currentTarget.style.background = 'var(--g1)'), onMouseLeave: e => (e.currentTarget.style.background = 'var(--g2)'), children: "Mes certifications" }), _jsx(Link, { to: "/projects", style: {
                                                background: 'transparent', color: 'var(--g2)',
                                                border: '1.5px solid var(--g3)',
                                                padding: '10px 24px', borderRadius: '8px',
                                                fontSize: '0.85rem', fontWeight: 500,
                                                textDecoration: 'none', transition: 'all 0.2s',
                                            }, onMouseEnter: e => (e.currentTarget.style.background = 'var(--g5)'), onMouseLeave: e => (e.currentTarget.style.background = 'transparent'), children: "Voir mes projets" }), _jsx("a", { href: profile.github, target: "_blank", rel: "noreferrer", style: {
                                                background: 'transparent', color: 'var(--g3)',
                                                border: '1.5px solid var(--g5)',
                                                padding: '10px 24px', borderRadius: '8px',
                                                fontSize: '0.85rem', fontWeight: 500,
                                                textDecoration: 'none', transition: 'all 0.2s',
                                            }, onMouseEnter: e => (e.currentTarget.style.borderColor = 'var(--g4)'), onMouseLeave: e => (e.currentTarget.style.borderColor = 'var(--g5)'), children: "GitHub \u2197" })] })] }), _jsx("div", { className: "fade-up delay-2", style: { flexShrink: 0 }, children: _jsx("div", { style: {
                                    width: '200px', height: '200px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--g4), var(--g5))',
                                    border: '4px solid var(--g4)',
                                    boxShadow: '0 0 0 8px var(--g5)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '3.5rem', color: 'var(--g1)',
                                    overflow: 'hidden',
                                }, children: _jsx("img", { src: "/photo.jpg", alt: "Soukaina Imaghri", style: { width: '100%', height: '100%', objectFit: 'cover' } }) }) })] }) }), _jsx("section", { style: {
                    background: 'var(--g1)', color: '#fff',
                    padding: '2.5rem 1.5rem',
                }, children: _jsx("div", { style: {
                        maxWidth: '1000px', margin: '0 auto',
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '2rem', textAlign: 'center',
                    }, children: [
                        { value: '6', label: 'Certifications' },
                        { value: `${avgScore}%`, label: 'Score moyen' },
                        { value: '100%', label: 'Labs complétés' },
                        { value: '105', label: 'Repos GitHub' },
                        { value: '328', label: 'Contributions' },
                    ].map(stat => (_jsxs("div", { children: [_jsx("div", { style: {
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '2.2rem', fontWeight: 700,
                                    color: 'var(--g5)',
                                }, children: stat.value }), _jsx("div", { style: { fontSize: '0.8rem', color: 'var(--g4)', marginTop: '0.3rem' }, children: stat.label })] }, stat.label))) }) }), _jsxs("section", { style: { maxWidth: '1000px', margin: '0 auto', padding: '4rem 1.5rem' }, children: [_jsxs("div", { style: { textAlign: 'center', marginBottom: '2.5rem' }, children: [_jsx("div", { style: {
                                    fontSize: '0.72rem', letterSpacing: '0.14em',
                                    textTransform: 'uppercase', color: 'var(--g3)',
                                    fontWeight: 600, marginBottom: '0.5rem',
                                }, children: "MLIAEdu \u00B7 Avril 2026" }), _jsx("h2", { style: {
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '2rem', color: 'var(--g1)', fontWeight: 700,
                                }, children: "Derni\u00E8res certifications" }), _jsx("div", { style: {
                                    width: '48px', height: '3px',
                                    background: 'var(--g3)', margin: '0.8rem auto 0',
                                    borderRadius: '2px',
                                } })] }), _jsx("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '1.2rem',
                        }, children: certifications.slice(0, 3).map(c => (_jsxs("div", { style: {
                                background: '#fff',
                                border: '1px solid var(--g5)',
                                borderRadius: '12px', padding: '1.2rem',
                                borderTop: '3px solid var(--g3)',
                                transition: 'box-shadow 0.2s',
                            }, onMouseEnter: e => (e.currentTarget.style.boxShadow = '0 6px 24px rgba(42,90,39,0.12)'), onMouseLeave: e => (e.currentTarget.style.boxShadow = 'none'), children: [_jsxs("div", { style: {
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                                    }, children: [_jsx("span", { style: {
                                                fontSize: '0.68rem', textTransform: 'uppercase',
                                                letterSpacing: '0.08em', color: 'var(--g3)', fontWeight: 600,
                                            }, children: c.category }), _jsxs("span", { style: {
                                                background: 'var(--g2)', color: '#fff',
                                                fontSize: '0.72rem', fontWeight: 700,
                                                padding: '2px 9px', borderRadius: '20px',
                                            }, children: [c.score, "%"] })] }), _jsx("p", { style: {
                                        fontWeight: 500, fontSize: '0.9rem', color: 'var(--g1)',
                                        marginTop: '0.5rem', lineHeight: 1.4,
                                    }, children: c.title })] }, c.credentialId))) }), _jsx("div", { style: { textAlign: 'center', marginTop: '2rem' }, children: _jsx(Link, { to: "/certifications", style: {
                                color: 'var(--g2)', fontSize: '0.85rem', fontWeight: 500,
                                textDecoration: 'none', borderBottom: '1px solid var(--g4)',
                                paddingBottom: '2px',
                            }, children: "Voir toutes les certifications \u2192" }) })] })] }));
}
