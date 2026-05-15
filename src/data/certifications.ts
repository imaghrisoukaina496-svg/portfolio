export type Certification = {
  title: string
  issuer: string
  issueDate: string
  category: string
  score: number
  progression: number
  credentialId: string
  credentialUrl?: string
  skills?: string[]
  status: 'active' | 'expired'
}

export const certifications: Certification[] = [
  {
    title: 'Programmation orientée objet : C++',
    issuer: 'MLIAEdu',
    issueDate: '2026-04-24',
    category: 'PROGRAMMATION CPP',
    score: 96,
    progression: 100,
    credentialId: '#12-cef301dc-6a0a-45c2-bbed-f5032727141b-193081',
    skills: ['C++', 'POO', 'Classes', 'Héritage', 'Polymorphisme'],
    status: 'active',
  },
  {
    title: 'Bases de données',
    issuer: 'MLIAEdu',
    issueDate: '2026-04-24',
    category: 'BASES DE DONNEES',
    score: 94,
    progression: 100,
    credentialId: '#15-cef301dc-6a0a-45c2-bbed-f5032727141b-959187',
    skills: ['SQL', 'Modélisation', 'SGBD', 'Requêtes', 'Normalisation'],
    status: 'active',
  },
  {
    title: 'Fondamentaux et Concepts Avancés de la Programmation Java',
    issuer: 'MLIAEdu',
    issueDate: '2026-04-24',
    category: 'PROGRAMMATION JAVA',
    score: 94,
    progression: 100,
    credentialId: '#6-cef301dc-6a0a-45c2-bbed-f5032727141b-099737',
    skills: ['Java', 'POO', 'Collections', 'Exceptions', 'Generics'],
    status: 'active',
  },
  {
    title: 'Programmation orientée objet : Python',
    issuer: 'MLIAEdu',
    issueDate: '2026-04-24',
    category: 'PROGRAMMATION PYTHON',
    score: 92,
    progression: 100,
    credentialId: '#11-cef301dc-6a0a-45c2-bbed-f5032727141b-240883',
    skills: ['Python', 'POO', 'Modules', 'Décorateurs', 'Héritage'],
    status: 'active',
  },
  {
    title: 'Fondamentaux de la programmation en Kotlin',
    issuer: 'MLIAEdu',
    issueDate: '2026-04-24',
    category: 'PROGRAMMATION MOBILE',
    score: 92,
    progression: 100,
    credentialId: '#40-cef301dc-6a0a-45c2-bbed-f5032727141b-047377',
    skills: ['Kotlin', 'Android', 'Coroutines', 'Data Classes'],
    status: 'active',
  },
  {
    title: 'Ingénierie Logicielle Web avec PHP 7 : Architecture Multicouche et Accès aux Données Sécurisé',
    issuer: 'MLIAEdu',
    issueDate: '2026-04-24',
    category: 'PROGRAMMATION WEB',
    score: 91,
    progression: 100,
    credentialId: '#44-cef301dc-6a0a-45c2-bbed-f5032727141b-151277',
    skills: ['PHP 7', 'MVC', 'PDO', 'Architecture Multicouche', 'Sécurité'],
    status: 'active',
  },
  {
    title: 'Développement Front-End moderne avec React',
    issuer: 'MLIAEdu',
    issueDate: '2026-05-15',
    category: 'PROGRAMMATION WEB',
    score: 93,
    progression: 100,
    credentialId: '#26-cef301dc-6a0a-45c2-bbed-f5032727141b-801248',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Hooks'],
    status: 'active',
  },
]
