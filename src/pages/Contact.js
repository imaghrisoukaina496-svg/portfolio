import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';
export default function Contact() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsxs("title", { children: ["Contact \u2014 ", profile.name] }), _jsx("meta", { name: "description", content: `Contacter ${profile.name} — ${profile.email}` })] }), _jsxs("section", { style: { maxWidth: '700px', margin: '0 auto', padding: '3.5rem 1.5rem' }, children: [_jsxs("div", { style: { textAlign: 'center', marginBottom: '3rem' }, children: [_jsx("div", { style: {
                                    fontSize: '0.72rem', letterSpacing: '0.14em',
                                    textTransform: 'uppercase', color: 'var(--g3)',
                                    fontWeight: 600, marginBottom: '0.5rem',
                                }, children: "Disponible pour des opportunit\u00E9s" }), _jsx("h1", { style: {
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '2.2rem', color: 'var(--g1)', fontWeight: 700,
                                }, children: "Me contacter" }), _jsx("div", { style: {
                                    width: '48px', height: '3px',
                                    background: 'var(--g3)', margin: '0.8rem auto',
                                    borderRadius: '2px',
                                } })] }), _jsxs("div", { style: { display: 'grid', gap: '1rem', marginBottom: '2.5rem' }, children: [_jsxs("a", { href: `mailto:${profile.email}`, style: {
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    background: '#fff', border: '1px solid var(--g5)',
                                    borderRadius: '12px', padding: '1.2rem 1.5rem',
                                    textDecoration: 'none', transition: 'all 0.2s',
                                }, onMouseEnter: e => {
                                    e.currentTarget.style.borderColor = 'var(--g3)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(42,90,39,0.1)';
                                }, onMouseLeave: e => {
                                    e.currentTarget.style.borderColor = 'var(--g5)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }, children: [_jsx("div", { style: {
                                            width: '44px', height: '44px', borderRadius: '10px',
                                            background: 'var(--g5)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.2rem', flexShrink: 0,
                                        }, children: "\u2709" }), _jsxs("div", { children: [_jsx("div", { style: { fontSize: '0.72rem', color: 'var(--g3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }, children: "Email" }), _jsx("div", { style: { fontSize: '0.95rem', color: 'var(--g1)', fontWeight: 500 }, children: profile.email })] })] }), _jsxs("a", { href: profile.github, target: "_blank", rel: "noreferrer", style: {
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    background: '#fff', border: '1px solid var(--g5)',
                                    borderRadius: '12px', padding: '1.2rem 1.5rem',
                                    textDecoration: 'none', transition: 'all 0.2s',
                                }, onMouseEnter: e => {
                                    e.currentTarget.style.borderColor = 'var(--g3)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(42,90,39,0.1)';
                                }, onMouseLeave: e => {
                                    e.currentTarget.style.borderColor = 'var(--g5)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }, children: [_jsx("div", { style: {
                                            width: '44px', height: '44px', borderRadius: '10px',
                                            background: 'var(--g5)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.2rem', flexShrink: 0,
                                        }, children: "\u2328" }), _jsxs("div", { children: [_jsx("div", { style: { fontSize: '0.72rem', color: 'var(--g3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }, children: "GitHub" }), _jsx("div", { style: { fontSize: '0.95rem', color: 'var(--g1)', fontWeight: 500 }, children: "imaghrisoukaina496-svg" })] })] }), _jsxs("div", { style: {
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    background: '#fff', border: '1px solid var(--g5)',
                                    borderRadius: '12px', padding: '1.2rem 1.5rem',
                                }, children: [_jsx("div", { style: {
                                            width: '44px', height: '44px', borderRadius: '10px',
                                            background: 'var(--g5)', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.2rem', flexShrink: 0,
                                        }, children: "\u25CE" }), _jsxs("div", { children: [_jsx("div", { style: { fontSize: '0.72rem', color: 'var(--g3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }, children: "Localisation" }), _jsx("div", { style: { fontSize: '0.95rem', color: 'var(--g1)', fontWeight: 500 }, children: profile.location })] })] })] }), _jsxs("div", { style: {
                            background: 'var(--g1)', borderRadius: '16px',
                            padding: '2.5rem 2rem', textAlign: 'center', color: '#fff',
                        }, children: [_jsx("h2", { style: {
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '1.5rem', marginBottom: '0.8rem',
                                }, children: "Travaillons ensemble" }), _jsxs("p", { style: {
                                    color: 'var(--g5)', fontSize: '0.9rem',
                                    lineHeight: 1.7, marginBottom: '1.5rem',
                                }, children: ["Disponible pour des stages, des projets acad\u00E9miques", _jsx("br", {}), "ou toute collaboration en informatique."] }), _jsx("a", { href: `mailto:${profile.email}`, style: {
                                    display: 'inline-block',
                                    background: 'var(--g4)', color: 'var(--g1)',
                                    padding: '10px 28px', borderRadius: '8px',
                                    fontSize: '0.85rem', fontWeight: 600,
                                    textDecoration: 'none', transition: 'background 0.2s',
                                }, onMouseEnter: e => (e.currentTarget.style.background = 'var(--g5)'), onMouseLeave: e => (e.currentTarget.style.background = 'var(--g4)'), children: "Envoyer un email" })] })] })] }));
}
