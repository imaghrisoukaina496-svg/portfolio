import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { certifications } from '@/data/certifications';
import { profile } from '@/data/profile';
function ProgressBar({ value }) {
    return (_jsx("div", { style: {
            height: '6px', background: 'var(--g5)',
            borderRadius: '3px', overflow: 'hidden',
        }, children: _jsx("div", { style: {
                height: '100%',
                width: `${value}%`,
                background: 'var(--g3)',
                borderRadius: '3px',
                transition: 'width 0.6s ease',
            } }) }));
}
export default function Certifications() {
    const [query, setQuery] = useState('');
    const list = useMemo(() => certifications
        .filter(c => [c.title, c.issuer, c.category, ...(c.skills ?? [])]
        .join(' ').toLowerCase()
        .includes(query.toLowerCase()))
        .sort((a, b) => b.score - a.score), [query]);
    const avgScore = Math.round(certifications.reduce((s, c) => s + c.score, 0) / certifications.length);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsxs("title", { children: ["Certifications \u2014 ", profile.name] }), _jsx("meta", { name: "description", content: "Certifications professionnelles MLIAEdu de Soukaina Imaghri." })] }), _jsxs("section", { style: { maxWidth: '1000px', margin: '0 auto', padding: '3.5rem 1.5rem' }, children: [_jsxs("div", { style: { textAlign: 'center', marginBottom: '2.5rem' }, children: [_jsx("div", { style: {
                                    fontSize: '0.72rem', letterSpacing: '0.14em',
                                    textTransform: 'uppercase', color: 'var(--g3)',
                                    fontWeight: 600, marginBottom: '0.5rem',
                                }, children: "MLIAEdu \u00B7 24 avril 2026" }), _jsx("h1", { style: {
                                    fontFamily: '"Playfair Display", serif',
                                    fontSize: '2.2rem', color: 'var(--g1)', fontWeight: 700,
                                }, children: "Certifications Professionnelles" }), _jsx("div", { style: {
                                    width: '48px', height: '3px',
                                    background: 'var(--g3)', margin: '0.8rem auto 1.5rem',
                                    borderRadius: '2px',
                                } }), _jsx("div", { style: {
                                    display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap',
                                }, children: [
                                    { v: certifications.length, l: 'certifications' },
                                    { v: `${avgScore}%`, l: 'score moyen' },
                                    { v: '100%', l: 'labs complétés' },
                                ].map(s => (_jsxs("div", { style: {
                                        background: 'var(--g5)', borderRadius: '10px',
                                        padding: '0.8rem 1.4rem', textAlign: 'center',
                                        minWidth: '100px',
                                    }, children: [_jsx("div", { style: {
                                                fontFamily: '"Playfair Display", serif',
                                                fontSize: '1.5rem', fontWeight: 700, color: 'var(--g1)',
                                            }, children: s.v }), _jsx("div", { style: { fontSize: '0.72rem', color: 'var(--g3)' }, children: s.l })] }, s.l))) })] }), _jsx("div", { style: { marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-end' }, children: _jsx("input", { type: "text", placeholder: "Filtrer (ex: Java, Python, SQL...)", value: query, onChange: e => setQuery(e.target.value), "aria-label": "Filtrer les certifications", style: {
                                border: '1.5px solid var(--g5)',
                                borderRadius: '8px', padding: '8px 14px',
                                fontSize: '0.85rem', color: 'var(--g1)',
                                background: '#fff', outline: 'none',
                                width: '280px',
                            }, onFocus: e => (e.currentTarget.style.borderColor = 'var(--g3)'), onBlur: e => (e.currentTarget.style.borderColor = 'var(--g5)') }) }), _jsx("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.2rem',
                        }, children: list.map(c => (_jsxs("article", { style: {
                                background: '#fff',
                                border: '1px solid var(--g5)',
                                borderRadius: '14px',
                                padding: '1.4rem',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'box-shadow 0.2s, transform 0.2s',
                            }, onMouseEnter: e => {
                                e.currentTarget.style.boxShadow = '0 8px 28px rgba(42,90,39,0.13)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }, onMouseLeave: e => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'none';
                            }, children: [_jsx("div", { style: {
                                        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                                        background: 'linear-gradient(90deg, var(--g2), var(--g4))',
                                    } }), _jsxs("div", { style: {
                                        position: 'absolute', top: '1rem', right: '1rem',
                                        background: 'var(--g2)', color: '#fff',
                                        fontSize: '0.72rem', fontWeight: 700,
                                        padding: '3px 10px', borderRadius: '20px',
                                    }, children: [c.score, "%"] }), _jsx("div", { style: {
                                        fontSize: '0.68rem', textTransform: 'uppercase',
                                        letterSpacing: '0.1em', color: 'var(--g3)',
                                        fontWeight: 600, marginBottom: '0.5rem',
                                        paddingRight: '3.5rem',
                                    }, children: c.category }), _jsx("h3", { style: {
                                        fontSize: '0.92rem', fontWeight: 600,
                                        color: 'var(--g1)', lineHeight: 1.45,
                                        paddingRight: '3.5rem', marginBottom: '0.5rem',
                                    }, children: c.title }), _jsxs("p", { style: { fontSize: '0.73rem', color: 'var(--g3)', marginBottom: '0.8rem' }, children: [new Date(c.issueDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }), ' · ', _jsxs("span", { style: { fontFamily: 'monospace', fontSize: '0.68rem' }, children: [c.credentialId.slice(0, 22), "\u2026"] })] }), _jsxs("div", { style: { marginBottom: '0.8rem' }, children: [_jsxs("div", { style: {
                                                display: 'flex', justifyContent: 'space-between',
                                                fontSize: '0.72rem', color: 'var(--g3)', marginBottom: '4px',
                                            }, children: [_jsx("span", { children: "Progression labs" }), _jsxs("span", { style: { fontWeight: 600, color: 'var(--g2)' }, children: [c.progression, "%"] })] }), _jsx(ProgressBar, { value: c.progression })] }), c.skills && (_jsx("div", { style: { display: 'flex', flexWrap: 'wrap', gap: '6px' }, children: c.skills.map(sk => (_jsx("span", { style: {
                                            background: 'var(--g5)', color: 'var(--g1)',
                                            fontSize: '0.68rem', padding: '2px 9px',
                                            borderRadius: '20px', fontWeight: 500,
                                        }, children: sk }, sk))) })), c.credentialUrl && (_jsx("a", { href: c.credentialUrl, target: "_blank", rel: "noreferrer", style: {
                                        display: 'inline-block', marginTop: '0.8rem',
                                        fontSize: '0.78rem', color: 'var(--g2)',
                                        textDecoration: 'none', borderBottom: '1px solid var(--g4)',
                                    }, children: "V\u00E9rifier le certificat \u2197" }))] }, c.credentialId))) }), list.length === 0 && (_jsxs("p", { style: { textAlign: 'center', color: 'var(--g3)', padding: '2rem' }, children: ["Aucune certification ne correspond \u00E0 \"", query, "\"."] }))] })] }));
}
