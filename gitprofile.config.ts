// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'giahienhoang99', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project Name',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },
  },
  seo: {
    title: 'Portfolio of Hien Hoang',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'eric-hoang-g',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'erichoang0326@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1AmXxA_N20qPOVIwg00unbr-FYHyEBm_S52mq8mHMKMs/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'TypeScript',
    'JavaScript',
    'Python',
    'C',
    'C++',
    'SQL',
    'Jmix Studio',
    'React.js',
    'Antd',
    'Tailwind',
    'Node.js',
    'Express.js',
    'MySQL',
    'PostgreSQL',
    'PgAdmin',
    'Git',
    'GitHub',
    'Docker',
    'AWS',
    'Keycloak SSO',
    'Redux | RTK',
  ],
  experiences: [
    {
      company: 'FPT Information System',
      position: 'Software Engineer Intern (Fullstack)',
      from: 'May 2024',
      to: 'August 2024',
      companyLink: 'https://www.linkedin.com/company/fptis/',
    },
    {
      company: 'Techcombank',
      position: 'Intern Java Developer',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://www.linkedin.com/company/techcombank/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Worcester Polytechnic Institute',
      degree: 'BSc. of Computer Science',
      from: 'August 2022',
      to: 'May 2026',
    },
  ],
  // publications: [
  //   //   {
  //   //     title: 'Publication Title',
  //   //     conferenceName: '',
  //   //     journalName: 'Journal Name',
  //   //     authors: 'John Doe, Jane Smith',
  //   //     link: 'https://example.com',
  //   //     description:
  //   //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   //   },
  //   //   {
  //   //     title: 'Publication Title',
  //   //     conferenceName: 'Conference Name',
  //   //     journalName: '',
  //   //     authors: 'John Doe, Jane Smith',
  //   //     link: 'https://example.com',
  //   //     description:
  //   //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   //   },
  //   // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      // primary: '#1877F2',
      // secondary: '#FFD700',
      // accent: '#42B72A',
      // neutral: '#E5E5E5',
      // 'base-100': '#3C3C3C',
      // '--rounded-box': '1rem',
      // '--rounded-btn': '1rem',
      primary: '#3572EF',
      secondary: '#3572EF',
      accent: '#3ABEF9',
      neutral: '#A7E6FF',
      'base-100': '#1E1E1E', // #1E1E1E (grey)
      '--rounded-box': '2rem',
      '--rounded-btn': '2rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
