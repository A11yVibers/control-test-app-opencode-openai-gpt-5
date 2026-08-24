import React, { useEffect, useMemo, useRef, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

function useCurrentSection(ids) {
  const [current, setCurrent] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the section most in view
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setCurrent(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace('#', '')
      if (id) setCurrent(id)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return current
}

const profileImg =
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&auto=format&fit=crop&w=400&h=400'

const samplePublications = [
  {
    id: 'pub1',
    authors: 'Lovelace, A.; Babbage, C.',
    year: '1843',
    title: 'Notes on the Analytical Engine',
    venue: 'Scientific Memoirs',
    doi: '10.0000/example.doi.1843',
    links: {
      doi: 'https://doi.org/10.0000/example.doi.1843',
      arxiv: 'https://arxiv.org/abs/2101.00001',
    },
  },
  {
    id: 'pub2',
    authors: 'Lovelace, A.',
    year: '1842',
    title: 'Sketch of the Analytical Engine',
    venue: 'Taylor’s Scientific Memoirs',
    doi: '10.0000/example.doi.1842',
    links: {
      doi: 'https://doi.org/10.0000/example.doi.1842',
    },
  },
]

export default function App() {
  const current = useCurrentSection(sections.map((s) => s.id))
  const mainRef = useRef(null)
  const [textColor, setTextColor] = useState('')
  const [bgColor, setBgColor] = useState('')
  const [readerMode, setReaderMode] = useState(false)

  // Publications search (client-side filter, no navigation on input)
  const [query, setQuery] = useState('')
  const publications = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return samplePublications
    return samplePublications.filter((p) =>
      [p.authors, p.year, p.title, p.venue, p.doi]
        .join(' ')
        .toLowerCase()
        .includes(q)
    )
  }, [query])

  useEffect(() => {
    // Focus main when arriving with #main from skip link
    const hash = window.location.hash
    if (hash === '#main' && mainRef.current) {
      mainRef.current.focus()
    }
  }, [])

  useEffect(() => {
    const r = document.documentElement
    if (textColor) r.style.setProperty('--text', textColor)
    else r.style.removeProperty('--text')
  }, [textColor])

  useEffect(() => {
    const r = document.documentElement
    if (bgColor) r.style.setProperty('--bg', bgColor)
    else r.style.removeProperty('--bg')
  }, [bgColor])

  useEffect(() => {
    document.body.classList.toggle('reader-mode', readerMode)
  }, [readerMode])

  return (
    <div className="site">
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <a className="site-title" href="#home">Dr. Ada Lovelace</a>
          <nav className="primary-nav" aria-label="Primary">
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={current === s.id ? 'page' : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <details className="prefs">
            <summary>Display preferences</summary>
            <form onSubmit={(e)=>e.preventDefault()} className="prefs-form" aria-label="Display preferences">
              <div className="field">
                <label htmlFor="textColor">Text color</label>
                <input id="textColor" type="color" value={textColor} onChange={(e)=>setTextColor(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="bgColor">Background color</label>
                <input id="bgColor" type="color" value={bgColor} onChange={(e)=>setBgColor(e.target.value)} />
              </div>
              <div className="field checkbox">
                <input id="readerMode" type="checkbox" checked={readerMode} onChange={(e)=>setReaderMode(e.target.checked)} />
                <label htmlFor="readerMode">Reader mode (extra spacing)</label>
              </div>
              <div className="field">
                <button className="button secondary" type="button" onClick={()=>{ setTextColor(''); setBgColor(''); setReaderMode(false); }}>Reset</button>
              </div>
            </form>
          </details>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="site-main" ref={mainRef}>
        <section id="home" aria-labelledby="home-heading">
          <div className="container grid hero">
            <div>
              <h1 id="home-heading">Dr. Ada Lovelace</h1>
              <p className="subtitle">Researcher in Computational Mathematics and Human-Centered AI</p>
              <p>
                I study interpretable machine learning, program synthesis, and the
                history of computing. My work focuses on building reliable systems
                that respect human values and understanding.
              </p>
              <p>
                Explore my current projects, publications, and ways to get in touch
                using the navigation.
              </p>
              <p>
                <a className="button" href="#publications">Browse Publications</a>
                <a className="button secondary" href="#contact">Contact</a>
              </p>
            </div>
            <figure className="profile">
              <img
                src={profileImg}
                alt="Portrait of Dr. Ada Lovelace"
                width="400"
                height="400"
                loading="lazy"
              />
              <figcaption className="visually-hidden">
                Headshot used under free license from Unsplash.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading">
          <div className="container">
            <h2 id="about-heading">About</h2>
            <p>
              I am a Principal Investigator (<abbr title="Principal Investigator">PI</abbr>) working on
              trustworthy <abbr title="Artificial Intelligence">AI</abbr>. I collaborate with teams
              across disciplines to design methods that are rigorous, transparent, and
              people-centric. My background spans mathematics, computing, and
              science communication.
            </p>
          </div>
        </section>

        <section id="research" aria-labelledby="research-heading">
          <div className="container">
            <h2 id="research-heading">Research</h2>
            <div className="grid two">
              <article>
                <h3>Key Interests</h3>
                <ul>
                  <li>Interpretable machine learning and model explanations</li>
                  <li>Program synthesis and symbolic–neural methods</li>
                  <li>Human-in-the-loop evaluation and UX for ML</li>
                  <li>Responsible data practices and fairness</li>
                </ul>
              </article>
              <article>
                <h3>Current Projects</h3>
                <ul>
                  <li>
                    <strong>Explain-First ML:</strong> Prototyping workflows that surface model
                    behavior before deployment.
                  </li>
                  <li>
                    <strong>Code-as-Policy:</strong> Combining LLMs with formal guards for safe
                    automation in data pipelines.
                  </li>
                  <li>
                    <strong>Open Evaluation:</strong> Building reusable, transparent benchmarks.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="publications" aria-labelledby="pubs-heading">
          <div className="container">
            <h2 id="pubs-heading">Publications</h2>
            <form role="search" className="pub-search" aria-label="Filter publications" onSubmit={(e)=>e.preventDefault()}>
              <label htmlFor="search">Search publications</label>
              <input
                id="search"
                type="search"
                name="search"
                autoComplete="off"
                placeholder="e.g., interpretability, 1843, DOI"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div aria-live="polite" className="search-status">
                {publications.length} result{publications.length === 1 ? '' : 's'}
              </div>
            </form>
            <ol className="pub-list">
              {publications.map((p) => (
                <li key={p.id} className="pub-item">
                  <p>
                    <span className="authors">{p.authors}</span> ({p.year}).{' '}
                    <cite>{p.title}</cite>. <span className="venue">{p.venue}</span>.
                  </p>
                  <p className="pub-links">
                    {p.links.doi && (
                      <a href={p.links.doi}>DOI: {p.doi}</a>
                    )}
                    {p.links.arxiv && (
                      <a href={p.links.arxiv}>View on arXiv</a>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <h2 id="contact-heading">Contact</h2>
            <p>
              Email: <a href="mailto:ada.lovelace@example.edu">ada.lovelace@example.edu</a>
            </p>
            <ul className="social" aria-label="Profiles on external services">
              <li>
                <a href="https://scholar.google.com/" aria-label="Google Scholar profile for Dr. Ada Lovelace">Google Scholar</a>
              </li>
              <li>
                <a href="https://orcid.org/0000-0001-2345-6789" aria-label="ORCID profile 0000-0001-2345-6789 for Dr. Ada Lovelace">ORCID: 0000-0001-2345-6789</a>
              </li>
              <li>
                <a href="https://github.com/" aria-label="GitHub profile for Dr. Ada Lovelace">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn profile for Dr. Ada Lovelace">LinkedIn</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container footer-inner">
          <nav aria-label="Footer">
            <ul className="footer-nav">
              {sections.map((s) => (
                <li key={`f-${s.id}`}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
              <li>
                <a href="#home">Back to top</a>
              </li>
            </ul>
          </nav>
          <p className="small">© {new Date().getFullYear()} Ada Lovelace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
