/**
 * ---------------------------------------------------------------------------
 * EDIT THIS FILE FIRST
 * ---------------------------------------------------------------------------
 * All portfolio content lives here so you can customise the site in one place.
 *
 * Anything marked `placeholder: true` is intentionally generic. Replace it
 * with real skills, projects, and profile URLs. Do not leave placeholder
 * projects or skills in a published portfolio.
 *
 * Link fields are optional. Leave `githubUrl` or `liveUrl` as an empty string
 * ('') and the link will not be rendered.
 * ---------------------------------------------------------------------------
 */

export const site = {
  name: 'Suhaib',
  role: 'Third-Year CSE Student | Aspiring Full-Stack Developer',
  email: 'suhaib574a4@gmail.com',
  intro:
    'I focus on building useful, user-friendly web experiences while continuing to grow as a developer. I am curious about how things work, and I enjoy turning ideas into interfaces that feel simple and intuitive to use.',
  about: [
    "I'm a third-year Computer Science Engineering student interested in full-stack development. I like learning new technologies and using them to solve practical problems.",
    'My goal is to keep improving through hands-on projects, thoughtful feedback, and a steady focus on the details that make a web experience feel good to use.',
  ],
  focusAreas: [
    {
      id: 'user-first',
      icon: 'layout',
      title: 'User-first thinking',
      text: 'Building interfaces that are clear, accessible, and easy to use.',
    },
    {
      id: 'problem-solving',
      icon: 'wrench',
      title: 'Practical problems',
      text: 'Breaking down real problems into manageable, testable pieces.',
    },
    {
      id: 'learning',
      icon: 'spark',
      title: 'Continuous learning',
      text: 'Staying curious and improving with every project and new idea.',
    },
  ],
}

/**
 * PLACEHOLDER SKILLS
 * Replace each `name` with a technology you actually use, then remove
 * `placeholder: true` to switch the badge to the standard style.
 */
export const skills = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    placeholder: true,
    items: [
      { name: 'Frontend skill 1', placeholder: true },
      { name: 'Frontend skill 2', placeholder: true },
      { name: 'Frontend skill 3', placeholder: true },
      { name: 'Frontend skill 4', placeholder: true },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    placeholder: true,
    items: [
      { name: 'Backend skill 1', placeholder: true },
      { name: 'Backend skill 2', placeholder: true },
      { name: 'Backend skill 3', placeholder: true },
      { name: 'Backend skill 4', placeholder: true },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: 'braces',
    placeholder: true,
    items: [
      { name: 'Language 1', placeholder: true },
      { name: 'Language 2', placeholder: true },
      { name: 'Language 3', placeholder: true },
      { name: 'Language 4', placeholder: true },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'wrench',
    placeholder: true,
    items: [
      { name: 'Tool 1', placeholder: true },
      { name: 'Tool 2', placeholder: true },
      { name: 'Tool 3', placeholder: true },
      { name: 'Tool 4', placeholder: true },
    ],
  },
]

/**
 * PLACEHOLDER PROJECTS
 * Replace the example text below with real work. Add a GitHub or live-demo URL
 * when available; empty links are hidden automatically.
 */
export const projects = [
  {
    id: 'project-one',
    name: 'Project name goes here',
    description:
      'Replace this with a short description of what you built, the problem it solved, and what you learned.',
    tags: ['Technology', 'Another tag'],
    githubUrl: '',
    liveUrl: '',
    placeholder: true,
  },
  {
    id: 'project-two',
    name: 'Second project title',
    description:
      'Replace this with another concise project summary. Keep it specific and focus on your contribution.',
    tags: ['Technology', 'Another tag'],
    githubUrl: '',
    liveUrl: '',
    placeholder: true,
  },
  {
    id: 'project-three',
    name: 'Third project title',
    description:
      'Replace this with a final project summary. Add real links above when the project is ready to share.',
    tags: ['Technology', 'Another tag'],
    githubUrl: '',
    liveUrl: '',
    placeholder: true,
  },
]

/**
 * OPTIONAL SOCIAL PROFILES
 * Add a real URL and remove `placeholder: true` to display a working link.
 * Accounts are intentionally not invented.
 */
export const socials = [
  { id: 'github', label: 'GitHub', url: '', placeholder: true },
  { id: 'linkedin', label: 'LinkedIn', url: '', placeholder: true },
]
