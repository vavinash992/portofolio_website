import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  aibot,
  bag,
  internship,
  university,
  css,
  reactjs,
  pandas,
  bitcoin,
  video,
  tensorflow,
  python,
  SQL,
  nodejs,
  flask,
  cancer,
  hand,
  neuralnetwork,
  git,
  scikitlearn,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'resume',
    title: 'Resume',
    url: 'https://drive.google.com/file/d/1nQ6wXLsJgzb8yXDQp-4cpF4Z8v_gJLL_/view?usp=sharing'
  }
];

const services = [
  {
    title: 'Frontend development',
    icon: frontend,
  },
  {
    title: 'Backend development',
    icon: backend,
  },
  {
    title: 'AI/ML prototyping',
    icon: ux,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'scikit-learn',
    icon: scikitlearn,
  },
  {
    name: 'SQL',
    icon: SQL,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'pandas',
    icon: pandas,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Neural Networks',
    icon: neuralnetwork,
  }
];

const experiences = [
  {
    title: 'Narayana Junior college',
    company_name: 'Maths Physics Chemistry',
    icon: bag,
    iconBg: '#333333',
    date: 'June 2017 - May 2019',
  },
  {
    title: 'GITAM University',
    company_name: 'Computer Science Engineering',
    icon: university,
    iconBg: '#333333',
    date: 'June 2019 - april 2023',
  },
  {
    title: 'Gilbert Research Centre',
    company_name: 'Machine Learning Intern',
    icon: internship,
    iconBg: '#333333',
    date: 'May 2022 - July 2022',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'AI chat bot',
    description: 'A chat bot that can answer questions related to the courses offered by the university.',
    tags: [
      {
        name: 'tensorflow',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: aibot,
    demo: 'https://github.com/vavinash992/AI-chat-bot',
  },

  {
    id: 'project-2',
    name: 'Crypto price predictor',
    description: 'A web app that can predict the price of crypto currencies.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'tensorflow',
        color: 'green-text-gradient',
      },
      {
        name: 'flask',
        color: 'pink-text-gradient',
      },
    ],
    image: bitcoin,
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },

  {
    id: 'project-3',
    name: 'Sign language detector',
    description:
      'A GUI based application that can detect the sign language gestures and convert them into text.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'tensorflow',
        color: 'green-text-gradient',
      },
      {
        name: 'neuralnetwork',
        color: 'pink-text-gradient',
      },
    ],
    image: hand,
    demo: 'https://github.com/vavinash992/Sign-Language-Detector',
  },

  {
    id: 'project-4',
    name: 'Skin cancer recognition',
    description: `A web app that can predict to which class the given image of skin cancer belongs to.`,
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'tensorflow',
        color: 'pink-text-gradient',
      },
    ],
    image: cancer,
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Video to png GUI',
    description:
      'A GUI based application that can convert a video into a series of png images.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: video,
    demo: 'https://github.com/vavinash992/Video-to-png-GUI',
  },
];

export { services, technologies, experiences, projects };
