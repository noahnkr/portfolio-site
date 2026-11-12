/** Everything personal that isn't a project or a post lives here. */

export const site = {
  name: 'Noah Roberts',
  role: 'Software Engineer',
  /** Shown under the name in the sidebar. */
  tagline: {
    quote: 'What I cannot create, I do not understand.',
    author: 'Richard Feynman',
  },
  description:
    'Noah Roberts is a software engineer. Projects, experience, and a from-scratch series on machine learning.',
  /** Path to a résumé PDF placed in /public. Leave null to hide the link. */
  resume: '/Noah-Roberts-Resume.pdf' as string | null,
  /** Text links in the sidebar. */
  links: [
    { label: 'GitHub', href: 'https://github.com/noahnkr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noah-roberts-3bb399234/' },
  ],
};

export type Contact = {
  label: string;
  icon: 'mail' | 'github' | 'linkedin' | 'discord';
  /** Where the icon links to, if anywhere. */
  href?: string;
  /** Text copied to the clipboard on click (shown in the tooltip too). */
  copy?: string;
};

/** Icon row in the Contact section, in display order. */
export const contacts: Contact[] = [
  { label: 'Email', icon: 'mail', href: 'mailto:noahkrob97@gmail.com', copy: 'noahkrob97@gmail.com' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/noahnkr' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/noah-roberts-3bb399234/' },
  { label: 'Discord', icon: 'discord', href: 'https://discord.com/users/234490399693996035', copy: 'noahnkr' },
];

/**
 * About: a few lines from PEP 20, "The Zen of Python" (public domain), and what each one
 * means off the keyboard. Keep the lines in PEP 20's order.
 */
export const about = {
  intro: 'A few lines from The Zen of Python I try to live by.',
  zenUrl: 'https://peps.python.org/pep-0020/',
  zen: [
    {
      line: 'Simple is better than complex.',
      meaning:
        "When I start overcomplicating things, and I will, I come back to the basics. They're what actually count.",
    },
    {
      line: 'Complex is better than complicated.',
      meaning:
        'But some problems really are hard, and those take time. The trick is not burying what matters under everything else.',
    },
    {
      line: 'Now is better than never.',
      meaning: 'Either way, I try not to wait for tomorrow to start.',
    },
    {
      line: 'Although never is often better than *right* now.',
      meaning: "Then again, I don't have to build Rome in a day.",
    },
  ],
  outro: "The rest of the time: lifting, Chicago sports, and whatever I've had on repeat lately.",
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
