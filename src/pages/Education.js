import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { education } from '@/data/education';
import { profile } from '@/data/profile';
export default function Education() {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsxs("title", { children: ["Formation \u2014 ", profile.name] }), _jsx("meta", { name: "description", content: "Parcours acad\u00E9mique de Soukaina Imaghri, ENS Marrakech." })] }), _jsxs("section", { style: { maxWidth: '1000px', margin: '0 auto', padding: '3.5rem 1.5rem' }, children: [_jsxs("div", { style: { textAlign: 'center', marginBottom: '3rem' }, children: [_jsx("div", { style: {
                                    fontSize: '0.72rem', letterSpacing: '0.14em',
                                    textTransform: 'uppercase', color: 'var(--g3)',
                                    fontWeight: 600, marginBottom: '0.5rem',
                                }, children: "Parcours acad\u00E9mique" }), _jsx("h1", { style: {
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '2.2rem', color: 'var(--g1)', fontWeight: 700,
                                }, children: "Formation" }), _jsx("div", { style: {
                                    width: '48px', height: '3px',
                                    background: 'var(--g3)', margin: '0.8rem auto',
                                    borderRadius: '2px',
                                } })] }), _jsxs("div", { style: { position: 'relative', paddingLeft: '2rem' }, children: [_jsx("div", { style: {
                                    position: 'absolute', left: '6px', top: '12px', bottom: 0,
                                    width: '2px', background: 'var(--g5)',
                                } }), education.map((e, i) => (_jsxs("div", { style: { position: 'relative', marginBottom: '3rem' }, children: [_jsx("div", { style: {
                                            position: 'absolute', left: '-2rem', top: '4px',
                                            width: '14px', height: '14px', borderRadius: '50%',
                                            background: 'var(--g3)',
                                            border: '3px solid var(--gbg)',
                                            boxShadow: '0 0 0 3px var(--g5)',
                                        } }), _jsxs("div", { style: {
                                            background: '#fff', border: '1px solid var(--g5)',
                                            borderRadius: '14px', padding: '1.5rem 1.8rem',
                                            borderLeft: '4px solid var(--g3)',
                                        }, children: [_jsxs("div", { style: {
                                                    fontSize: '0.72rem', textTransform: 'uppercase',
                                                    letterSpacing: '0.1em', color: 'var(--g3)',
                                                    fontWeight: 600, marginBottom: '0.5rem',
                                                }, children: [e.start, " \u2014 ", e.end ?? 'Présent', " ", e.location ? `· ${e.location}` : ''] }), _jsx("h2", { style: {
                                                    fontFamily: '"Playfair Display", serif',
                                                    fontSize: '1.3rem', color: 'var(--g1)', fontWeight: 700,
                                                }, children: e.school }), _jsxs("p", { style: {
                                                    fontSize: '0.95rem', color: 'var(--g2)',
                                                    marginTop: '0.3rem', fontWeight: 500,
                                                }, children: [e.degree, e.field ? ` — ${e.field}` : ''] }), e.courses && e.courses.length > 0 && (_jsxs("div", { style: { marginTop: '1rem' }, children: [_jsx("p", { style: {
                                                            fontSize: '0.78rem', textTransform: 'uppercase',
                                                            letterSpacing: '0.08em', color: 'var(--g3)',
                                                            fontWeight: 600, marginBottom: '0.5rem',
                                                        }, children: "Mati\u00E8res cl\u00E9s" }), _jsx("div", { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' }, children: e.courses.map(c => (_jsx("span", { style: {
                                                                background: 'var(--g5)', color: 'var(--g1)',
                                                                fontSize: '0.75rem', padding: '4px 12px',
                                                                borderRadius: '20px', fontWeight: 500,
                                                            }, children: c }, c))) })] })), e.highlights && e.highlights.length > 0 && (_jsxs("div", { style: { marginTop: '1rem' }, children: [_jsx("p", { style: {
                                                            fontSize: '0.78rem', textTransform: 'uppercase',
                                                            letterSpacing: '0.08em', color: 'var(--g3)',
                                                            fontWeight: 600, marginBottom: '0.5rem',
                                                        }, children: "Points forts" }), _jsx("ul", { style: { paddingLeft: '1.2rem' }, children: e.highlights.map(h => (_jsx("li", { style: {
                                                                fontSize: '0.85rem', color: 'var(--g1)',
                                                                lineHeight: 1.7, marginBottom: '0.2rem',
                                                            }, children: h }, h))) })] }))] })] }, i)))] }), _jsxs("div", { style: {
                            marginTop: '1rem',
                            background: '#fff', border: '1px solid var(--g5)',
                            borderRadius: '14px', padding: '1.5rem 1.8rem',
                        }, children: [_jsx("h3", { style: {
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '1.1rem', color: 'var(--g1)',
                                    marginBottom: '1rem',
                                }, children: "Langues" }), _jsx("div", { style: { display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }, children: profile.languages.map(l => (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("div", { style: {
                                                fontWeight: 600, fontSize: '0.9rem', color: 'var(--g1)',
                                            }, children: l.lang }), _jsx("div", { style: {
                                                background: 'var(--g5)', color: 'var(--g2)',
                                                fontSize: '0.72rem', padding: '2px 10px',
                                                borderRadius: '20px', marginTop: '4px', fontWeight: 500,
                                            }, children: l.level })] }, l.lang))) })] })] })] }));
}
