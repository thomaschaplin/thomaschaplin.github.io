module.exports = {
  pathPrefix: '',
  siteUrl: 'https://www.thomaschaplin.me',
  siteTitle: 'Thomas Chaplin',
  siteDescription: 'Thomas Chaplin - Software Development Engineer in Test',
  author: 'Thomas Chaplin',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  // disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    cv: 'cv',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/thomaschaplin',
    facebook: 'https://www.facebook.com/rolwin.monteiro',
    twitter: 'https://twitter.com/thomaschaplin_',
    instagram: 'https://www.instagram.com/reevan100/',
    linkedin: 'https://www.linkedin.com/in/thomas-chaplin/',
    youtube: 'https://www.youtube.com/channel/UCgrsESnTqiMw37T-Xh5FW-g',
    email: 'thomaschaplin@outlook.com',
    rss: '/rss.xml',
  },
  work: {
    title: 'Software Development Engineer in Test',
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT
    || 'https://575d51fd-4998-4796-8e56-f649f77bd518.trayapp.io',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    // javascript: {
    //   name: 'JavaScript',
    //   description:
    //     'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
    //   color: '#f0da50',
    // },
    // nodejs: {
    //   name: 'Node.js',
    //   description:
    //     'Node.js is a tool for executing JavaScript in a variety of environments.',
    //   color: '#90c53f',
    // },
    android: {
      name: 'Android',
      description:
        'Android is a mobile operating system based on a modified version of the Linux kernel.',
      color: '#3ddb84',
    },
    automation: {
      name: 'Automation',
      description:
        'Automation is the technology by which a process or procedure is performed with minimal human assistance.',
      color: '#00719e',
    },
    // deno: {
    //   name: 'Deno',
    //   description: 'Deno is a secure runtime for JavaScript and TypeScript.',
    //   color: '#eb428e',
    // },
    tasker: {
      name: 'Tasker',
      description:
        'Tasker is an application for Android which performs tasks based user-defined automation.',
      color: '#ffb345',
    },
    mentalhealth: {
      name: 'Mental Health',
      description:
        'Mental health is the level of psychological well-being or an absence of mental illness.',
      color: '#7d44a1',
    },
    // typescript: {
    //   name: 'TypeScript',
    //   description:
    //     'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    //   color: '#257acc',
    // },
    // reactjs: {
    //   name: 'React.js',
    //   description:
    //     'React is an open source JavaScript library used for designing user interfaces.',
    //   color: '#61dbfa',
    // },
    // gatsby: {
    //   name: 'Gatsby.js',
    //   description:
    //     'A framework built over ReactJS to generate static page web application.  ',
    //   color: '#6f309f',
    // },
    // html: {
    //   name: 'HTML',
    //   description:
    //     'A markup language that powers the web. All websites use HTML for structuring the content.',
    //   color: '#dd3431',
    // },
    // css: {
    //   name: 'CSS',
    //   description:
    //     'CSS is used to style the HTML element and to give a very fancy look for the web application.',
    //   color: '#43ace0',
    // },
    // python: {
    //   name: 'Python',
    //   description:
    //     'A general purpose programming language that is widely used for developing various applications.',
    //   color: '#f9c646',
    // },
  },
};
