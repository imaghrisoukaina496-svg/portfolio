import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
export default function Projects() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsxs("title", { children: ["Projets \u2014 ", profile.name] }), _jsx("meta", { name: "description", content: "Projets GitHub de Soukaina Imaghri." })] }), _jsxs("section", { style: { maxWidth: '1000px', margin: '0 auto', padding: '3.5rem 1.5rem' }, children: [_jsxs("div", { style: { textAlign: 'center', marginBottom: '2.5rem' }, children: [_jsx("div", { style: {
                                    fontSize: '0.72rem', letterSpacing: '0.14em',
                                    textTransform: 'uppercase', color: 'var(--g3)',
                                    fontWeight: 600, marginBottom: '0.5rem',
                                }, children: "GitHub \u00B7 105 repositories" }), _jsx("h1", { style: {
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '2.2rem', color: 'var(--g1)', fontWeight: 700,
                                }, children: "Projets & TP" }), _jsx("div", { style: {
                                    width: '48px', height: '3px',
                                    background: 'var(--g3)', margin: '0.8rem auto',
                                    borderRadius: '2px',
                                } }), _jsx("p", { style: { color: 'var(--g3)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }, children: "Projets acad\u00E9miques issus de mes formations \u2014 328 contributions sur GitHub en 2026." })] }), _jsx("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.2rem',
                        }, children: projects.map(p => (_jsxs("article", { style: {
                                background: '#fff', border: '1px solid var(--g5)',
                                borderRadius: '14px', padding: '1.4rem',
                                borderTop: p.featured ? '3px solid var(--g3)' : '1px solid var(--g5)',
                                transition: 'box-shadow 0.2s, transform 0.2s',
                                display: 'flex', flexDirection: 'column', gap: '0.8rem',
                            }, onMouseEnter: e => {
                                e.currentTarget.style.boxShadow = '0 6px 24px rgba(42,90,39,0.12)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }, onMouseLeave: e => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'none';
                            }, children: [p.featured && (_jsx("span", { style: {
                                        fontSize: '0.68rem', textTransform: 'uppercase',
                                        letterSpacing: '0.08em', color: 'var(--g3)', fontWeight: 600,
                                    }, children: "\u2605 Mis en avant" })), _jsx("h3", { style: {
                                        fontSize: '1rem', fontWeight: 600, color: 'var(--g1)',
                                    }, children: p.title }), _jsx("p", { style: { fontSize: '0.85rem', color: 'var(--g3)', lineHeight: 1.6, flex: 1 }, children: p.description }), _jsx("div", { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' }, children: p.tags.map(t => (_jsx("span", { style: {
                                            background: 'var(--g5)', color: 'var(--g1)',
                                            fontSize: '0.68rem', padding: '2px 9px',
                                            borderRadius: '20px', fontWeight: 500,
                                        }, children: t }, t))) }), _jsxs("div", { style: { display: 'flex', gap: '1rem' }, children: [p.repo && (_jsx("a", { href: p.repo, target: "_blank", rel: "noreferrer", style: {
                                                fontSize: '0.8rem', color: 'var(--g2)',
                                                textDecoration: 'none', borderBottom: '1px solid var(--g4)',
                                            }, children: "Code source \u2197" })), p.demo && (_jsx("a", { href: p.demo, target: "_blank", rel: "noreferrer", style: {
                                                fontSize: '0.8rem', color: 'var(--g2)',
                                                textDecoration: 'none', borderBottom: '1px solid var(--g4)',
                                            }, children: "D\u00E9mo \u2197" }))] })] }, p.title))) }), _jsx("div", { style: { textAlign: 'center', marginTop: '2.5rem' }, children: _jsx("a", { href: profile.github, target: "_blank", rel: "noreferrer", style: {
                                display: 'inline-block',
                                background: 'var(--g1)', color: '#fff',
                                padding: '10px 28px', borderRadius: '8px',
                                fontSize: '0.85rem', fontWeight: 500,
                                textDecoration: 'none',
                            }, children: "Voir tous mes repos GitHub \u2197" }) })] })] }));
}
