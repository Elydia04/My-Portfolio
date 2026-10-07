export const profile = {
  name: 'Adrian Ortega',
  email: 'panggmeet2004@gmail.com',
  github: 'https://github.com/Elydia04',
  facebook: 'https://www.facebook.com/adrian.ortega.964326',
  leetcode: 'https://leetcode.com/u/Vnxmi8iu7W/',
  // Drop the finished PDF in /public with this exact name and the Download CV
  // button starts serving it. Until it exists the button prints this page's
  // resume section as a PDF instead. No other change needed.
  resumePath: '/Adrian-Ortega-CV.pdf',
  githubCard: 'https://opengraph.githubassets.com/1/Elydia04',
}

export const projects = [
  {
    id: 'shooting-game',
    title: 'ShootingGame',
    category: 'Games',
    language: 'JavaScript',
    image: '/projects/shooting-game.webp',
    fallback: 'https://opengraph.githubassets.com/1/Elydia04/ShootingGame',
    repo: 'https://github.com/Elydia04/ShootingGame',
    site: 'https://barilan.up.railway.app/',
    summary: 'Browser 3D first-person shooter with solo and multiplayer modes.',
    details:
      'Built with Three.js and Node.js. Fight 10 AI bots on procedural maps on your own, or join rooms over WebSockets with 6-character codes for up to 8 players. Movement, health, and hits are validated on the server with client-side prediction on top.',
    tech: ['Three.js', 'Node.js', 'WebSockets', 'JavaScript'],
  },
  {
    id: 'colmenar-website',
    title: 'Colmenar-Website',
    category: 'Web',
    language: 'TypeScript',
    image: '/projects/colmenar-website.webp',
    fallback: 'https://opengraph.githubassets.com/1/Elydia04/Colmenar-Website',
    repo: 'https://github.com/Elydia04/Colmenar-Website',
    site: 'https://villacolmenar.vercel.app',
    summary: 'Resort website for Villa Colmenar, a natural spring water pool.',
    details:
      'A marketing site built with Next.js 16, React 19, and Tailwind CSS v4. Sections include a fullscreen hero, pool stats with count-up animation, an amenities card grid, and a photo gallery strip. Deployed on Vercel.',
    tech: ['Next.js', 'React 19', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'kicks-bootstrap',
    title: 'KICKS-Bootstrap',
    category: 'Web',
    language: 'HTML',
    image: '/projects/kicks-bootstrap.webp',
    fallback: 'https://opengraph.githubassets.com/1/Elydia04/KICKS-Bootstrap',
    repo: 'https://github.com/Elydia04/KICKS-Bootstrap',
    site: 'https://kicks-bootstrap.vercel.app',
    summary: 'Sneaker store front-end built on the Bootstrap grid.',
    details:
      'A responsive storefront layout written with HTML, CSS, and Bootstrap. Practice work on Bootstrap components, the grid system, and responsive breakpoints. Deployed on Vercel.',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    id: 'calculator-lab',
    title: 'CalculatorLab-',
    category: 'Apps',
    language: 'TypeScript',
    image: '/projects/calculator-lab.webp',
    fallback: 'https://opengraph.githubassets.com/1/Elydia04/CalculatorLab-',
    repo: 'https://github.com/Elydia04/CalculatorLab-',
    site: 'https://ortegalalculatorlab.vercel.app/',
    summary: 'Calculator app built with React and TypeScript.',
    details:
      'A calculator that runs on component state and click handlers, written in React with TypeScript on a Vite build. Practice work on event handling and keeping UI state predictable.',
    tech: ['React', 'TypeScript', 'Vite'],
  },
  {
    id: 'todo-list',
    title: 'ToDoList',
    category: 'Apps',
    language: 'TypeScript',
    image: '/projects/to-do-list.webp',
    fallback: 'https://opengraph.githubassets.com/1/Elydia04/ToDoList',
    repo: 'https://github.com/Elydia04/ToDoList',
    site: 'https://ortega-to-do-list.vercel.app/',
    summary: 'To-do list app for practicing React state and forms.',
    details:
      'A task list built with React and TypeScript where adding, completing, and clearing items all run through component state. Deployed on Vercel.',
    tech: ['React', 'TypeScript', 'Vite'],
  },
]

export const filters = ['All', 'Web', 'Apps', 'Games']

export const skillGroups = [
  { label: 'Frontend', items: ['Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'] },
  { label: 'Languages', items: ['Python', 'Java', 'C++'] },
  { label: 'Database & Data', items: ['MySQL', 'XML'] },
  { label: 'Environment & Tools', items: ['Linux'] },
]
