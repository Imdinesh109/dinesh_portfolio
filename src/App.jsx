import { useEffect, useState } from 'react'
import CONTENT from '../js/content.js'
import '../css/style.css'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications & Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch (error) {
    console.error('Unable to read the saved color theme.', error)
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem('theme', theme)
    } catch (error) {
      console.error('Unable to save the selected color theme.', error)
    }
  }, [theme])

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#home" aria-label={`${CONTENT.name} home`}>
            {CONTENT.shortName}<span>.</span>
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} onClick={() => setMenuOpen(false)}>
                  {section.label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="theme-btn"
                type="button"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
              >
                <span aria-hidden="true">{theme === 'dark' ? '☼' : '◐'}</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home" aria-labelledby="home-title">
          <p className="eyebrow">{CONTENT.name}</p>
          <h1 id="home-title">{CONTENT.headline}</h1>
          <p className="hero-copy">{CONTENT.tagline}</p>
          <div className="hero-actions">
            <a className="text-link" href="#projects">Explore my projects <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="section container" id="about" aria-labelledby="about-title">
          <SectionHeading id="about-title" label="A little about me" title="About" />
          <div className="prose">
            {CONTENT.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {CONTENT.about.facts?.length > 0 && (
            <dl className="facts">
              {CONTENT.about.facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>

        <section className="section container" id="projects" aria-labelledby="projects-title">
          <SectionHeading id="projects-title" label="Selected work" title="Projects" />
          <div className="project-list">
            {CONTENT.projects.map((project) => (
              <article className="project" key={project.name}>
                <div className="project-heading">
                  <h3>{project.name}</h3>
                  <span className="meta">{project.type}</span>
                </div>
                {project.description && <p className="project-description">{project.description}</p>}
                {project.link && (
                  <a className="inline-link" href={project.link} target="_blank" rel="noreferrer">
                    Visit project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="experience" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" label="Background" title="Experience" />
          <div className="experience-list">
            {CONTENT.experience.map((item) => (
              <article className="record" key={`${item.role}-${item.org}`}>
                <div className="record-heading">
                  <h4>{item.role}</h4>
                  {item.period && <span className="meta">{item.period}</span>}
                </div>
                <p className="meta">{item.org}</p>
                {item.description && <p>{item.description}</p>}
                {item.link && <a className="inline-link" href={item.link}>More information <span aria-hidden="true">↗</span></a>}
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="certifications" aria-labelledby="certifications-title">
          <SectionHeading id="certifications-title" label="Challenges and activities" title="Certifications & Achievements" />
          <div className="certification-list">
            {CONTENT.certifications.map((certification) => (
              <article className="record" key={certification.name}>
                <h3>{certification.name}</h3>
                {certification.issuer && <p className="meta">{certification.issuer}</p>}
                {certification.link && (
                  <a className="inline-link" href={certification.link} target="_blank" rel="noreferrer">
                    View certificate <span aria-hidden="true">↗</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="skills" aria-labelledby="skills-title">
          <SectionHeading id="skills-title" label="Tools and topics" title="Skills" />
          <div className="skill-list">
            {CONTENT.skills.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container contact" id="contact" aria-labelledby="contact-title">
          <SectionHeading id="contact-title" label="Say hello" title="Contact" />
          <p>{CONTENT.contact.intro}</p>
          <div className="contact-links">
            {CONTENT.contact.email && (
              <a
                className="text-link contact-link"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTENT.contact.email)}`}
                aria-label={`Compose an email to ${CONTENT.contact.email} in Gmail`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactIcon name="email" />
              </a>
            )}
            {CONTENT.contact.links.filter((link) => link.icon === 'linkedin').map((link) => (
              <a
                className="text-link contact-link"
                href={link.url}
                key={link.label}
                aria-label={`Open ${link.label} profile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactIcon name={link.icon} />
              </a>
            ))}
          </div>
          <div className="showcase-links">
            <span>View my projects</span>
            {CONTENT.contact.links.filter((link) => link.icon === 'github').map((link) => (
              <a
                className="text-link contact-link"
                href={link.url}
                key={link.label}
                aria-label="View my projects on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactIcon name={link.icon} />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>{CONTENT.name}</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

function SectionHeading({ id, label, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
    </div>
  )
}

function ContactIcon({ name }) {
  if (name === 'github') {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-1.9c-3.1.68-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.78 2.54 3.36 1.94.1-.73.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.06 1.15a10.7 10.7 0 0 1 5.57 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.61 5.24-5.1 5.51.4.35.75 1.02.75 2.06V22c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" />
      </svg>
    )
  }

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m3.5 6 8.5 6.5L20.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default App
