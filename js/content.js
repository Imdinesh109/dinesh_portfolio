const CONTENT = {
  name: 'Dinesh Kumar Reddy Muthakana',
  shortName: 'DM',
  headline: 'I like figuring things out.',
  tagline: "I'm Dinesh. I learn by building, experimenting, breaking things and working through problems. My work spans Python, data science, machine learning and application development.",
  about: {
    paragraphs: [
      "My journey has been driven by curiosity. I don't just want to use a tool or make something work—I want to understand what happens behind it, why it works and how it can be improved.",
      'From data and machine learning experiments to full applications, I enjoy taking an idea, figuring out the pieces and working towards something tangible.',
      "This website is a record of that journey—my projects, my experience, the problems I've explored and what I continue to learn.",
      'My resume describes a focus on data science workflows, including data collection and preparation, feature engineering, predictive modeling, and analytics. It also includes backend application work with Django and Firebase.',
    ],
    facts: [
      {
        label: 'Education',
        value: 'B.Tech, Computer Science and Engineering · Aditya College of Engineering, Madanapalli (ACEM) · 2021–2025 · 76%',
      },
    ],
  },
  projects: [
    {
      name: 'Cargo Tonnage Prediction & Analytics',
      type: 'Data science · Analytics · LLM',
      description: 'Predictive analytics, warehouse data processing, automated analytics generation and dashboard development.',
    },
    {
      name: 'QuizMaster',
      type: 'Web application · React · Next.js · Firebase',
      description: 'Built a live quiz platform with login, categories, scoring, and leaderboards; the resume reports 90% responsive design across devices.',
      link: 'https://quizmaster-rust.vercel.app/',
    },
    {
      name: 'FarmShare App',
      type: 'Python · Django · Firebase',
      description: 'Built a location-aware web app connecting farmers and machinery owners, cutting machinery search time through backend data handling.',
    },
    {
      name: 'AI Resume Builder',
      type: 'AI · Web application',
      description: 'An AI-powered backend that creates ATS-friendly resumes, improves existing resumes, and tailors them to job descriptions without inventing qualifications. It also discovers and scores relevant jobs, extracts keywords, checks ATS compatibility, and automates supported applications through a modular multi-agent workflow.',
    },
    {
      name: 'Feast Feature Store',
      type: 'Data engineering · Machine learning',
      description: 'Exploration and implementation of feature engineering and feature store workflows.',
    },
  ],
  experience: [
    {
      role: 'Data Science Intern',
      org: 'Siddhan Intelligence',
      period: 'Apr 2026 – Nov 2026',
      description: 'Worked end-to-end on aviation problems, including data collection, cleaning, preprocessing, and feature engineering on operational datasets. Built machine-learning prediction models to support predictions and recommendations.',
    },
    {
      role: 'Machine Learning Intern',
      org: 'Slash Mark Organization',
      description: 'Built a handwritten digit recognition model achieving approximately 80% accuracy, reducing manual digit-identification effort.',
    },
    {
      role: 'Web Development Intern',
      org: 'Blend Vidya',
      description: 'Built responsive, cross-device web pages and improved page-load speed by 15% through UI optimization.',
    },
  ],
  certifications: [
    { name: 'Microsoft Skills AI Challenge' },
    { name: 'Active participation in slide presentation', issuer: 'JNTUK' },
  ],
  skills: [
    { title: 'Programming', items: ['Python (OOP)', 'SQL', 'JavaScript (ES6+)'] },
    {
      title: 'Data Science & Machine Learning',
      items: [
        'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'Data Analysis', 'Machine Learning',
        'Feature Engineering', 'Predictive Modeling', 'Data Preprocessing & Cleaning',
        'Model Evaluation', 'Deep Learning Fundamentals', 'Prompt Engineering & Generative AI',
      ],
    },
    { title: 'Web Technologies', items: ['Django', 'React', 'Streamlit', 'Firebase', 'HTML5', 'CSS3', 'API Integration'] },
    { title: 'Tools & Practices', items: ['Git', 'Docker', 'Microsoft Fabric', 'Jupyter Notebook', 'SDLC Fundamentals'] },
    { title: 'Soft Skills', items: ['Communication', 'Flexibility', 'Problem Solving', 'Teamwork', 'Divergent Thinking'] },
  ],
  contact: {
    intro: 'For inquiries, email me or connect on LinkedIn. Explore my project work below.',
    email: 'zdinesh2004@gmail.com',
    links: [
      { label: 'GitHub', icon: 'github', url: 'https://github.com/Imdinesh109' },
      { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/dinesh-kumarreddy/' },
    ],
  },
}

export default CONTENT
