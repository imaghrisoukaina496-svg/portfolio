export type Education = {
  school: string
  degree: string
  field?: string
  location?: string
  start: string
  end?: string
  courses?: string[]
  highlights?: string[]
  logo?: string
}

export const education: Education[] = [
  {
    school: "École Normale Supérieure de Marrakech",
    degree: "CLE-Informatique",
    field: "Certificat de Licence en Éducation — Informatique",
    location: "Marrakech, Maroc",
    start: "2022",
    courses: [
      "Algorithmique & Structures de données",
      "Programmation orientée objet",
      "Bases de données",
      "Génie logiciel",
      "Réseaux informatiques",
      "Développement web",
    ],
    highlights: [
      "6 certifications professionnelles MLIAEdu obtenues en 2026",
      "Score moyen de 93 % sur toutes les certifications",
      "100 % des labs complétés dans chaque formation",
      "105 repositories GitHub publics",
    ],
  },
]
