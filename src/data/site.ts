/** Everything personal that isn't a project or a post lives here. */

export const site = {
  name: 'Noah Roberts',
  role: 'Software Engineer',
  tagline: 'I build AI tools, data pipelines, and the occasional chess engine.',
  description:
    'Noah Roberts is a software engineer building AI tooling and data systems, most recently in healthcare.',
  /** Shown in the Contact section. Leave null to hide it. */
  email: 'noahkrob97@gmail.com' as string | null,
  /** Path to a résumé PDF placed in /public. Leave null to hide the link. */
  resume: '/Noah-Roberts-Resume.pdf' as string | null,
  links: [
    { label: 'GitHub', href: 'https://github.com/noahnkr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noah-roberts-3bb399234/' },
  ],
};

export const about = {
  lede: 'Software engineer building AI tooling and data systems, most recently in healthcare.',
  paragraphs: [
    "I graduated from Iowa State University in 2025 with a B.S. in Computer Science. Since then I've worked in healthcare IT: deploying Epic workstations and clinical hardware at Lurie Children's Hospital, and building an operations platform and AI agent for a home care agency. Getting the technology right there has a direct effect on patients and the people caring for them.",
    'On my own time I build things like a distributed sportsbook odds platform, an NCAA tournament model, a chess engine, and a small programming language. I also write a from-scratch series on machine learning fundamentals, because explaining something clearly is the best test of whether I understand it.',
    'Outside of work you will find me at the gym, watching football, or listening to Pink Floyd, Pearl Jam, and Metallica.',
  ],
};

export type Job = {
  dates: string;
  title: string;
  org: string;
  summary: string;
  tags?: string[];
};

/** Most recent first. */
export const experience: Job[] = [
  {
    dates: '2026 – Now',
    title: 'Deployment Technician',
    org: "Lurie Children's Hospital",
    summary:
      'Deploying and configuring roughly 1,400 clinical and administrative workstations in a hospital-wide refresh: imaging devices, migrating user data, and installing Epic Hyperspace. Building and validating Epic workstation (LWS) records, resolving Epic-integrated printing issues, and supporting clinical staff through the transition. Contract via PSM Partners.',
    tags: ['Epic Hyperspace', 'Epic LWS', 'Clinical hardware'],
  },
  {
    dates: '2025 – 2026',
    title: 'Freelance Software Engineer',
    org: 'Seniors Helping Seniors',
    summary:
      'Designed and built an internal platform for a home care agency’s hiring, lead follow-up, and caregiver scheduling, synced with its CRM and EHR. Automated applicant screening and lead follow-up, built a caregiver coverage tool, and an AI agent on a remote MCP server that answers questions, takes actions, and searches the agency’s documents.',
    tags: ['TypeScript', 'Supabase', 'Claude API', 'MCP', 'RAG'],
  },
  {
    dates: 'Summer 2024',
    title: 'Data Analyst Intern',
    org: 'The MX Group',
    summary:
      'Built Datorama and Tableau dashboards for B2B clients including HF Sinclair, audited and cleaned large datasets in SQL Server, and automated SEMrush data collection with Python.',
    tags: ['SQL Server', 'Tableau', 'Datorama', 'Python'],
  },
  {
    dates: 'Summer 2023',
    title: 'Front End Development Intern',
    org: 'The MX Group',
    summary:
      'Built responsive, accessible marketing sites for B2B clients with React, Sass, and WordPress, integrated APIs with the backend team, and worked in a Scrum team with designers and QA.',
    tags: ['React', 'Sass', 'WordPress'],
  },
  {
    dates: '2021 – 2025',
    title: 'B.S. Computer Science',
    org: 'Iowa State University',
    summary:
      'Coursework in algorithms, operating systems, databases, theory of computing, artificial intelligence, and machine learning.',
  },
];
