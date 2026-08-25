import React from 'react'

function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section">
      <div className="container">
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        <div className="section-content">{children}</div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="app">
      <header className="header" role="banner">
        <div className="container nav-container">
          <a href="#home" className="brand" aria-label="Home">
            <span className="brand-initials" aria-hidden>RP</span>
            <span className="brand-text">Research Portfolio</span>
          </a>
          <nav aria-label="Primary" className="nav">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex="-1">
        <section id="home" className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1 className="hero-title">Dr. Alex Morgan</h1>
              <p className="hero-subtitle">Associate Professor of Computer Science</p>
              <p className="hero-bio">
                I am an academic researcher focusing on machine learning, human-computer interaction,
                and responsible AI. My work bridges theory and practice to design deployable, fair,
                and interpretable systems that benefit people at scale.
              </p>
              <div className="hero-cta">
                <a className="button" href="#research">Explore Research</a>
                <a className="button ghost" href="#publications">View Publications</a>
              </div>
            </div>
            <div className="hero-media">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                alt="Profile portrait placeholder"
                width="320"
                height="320"
                loading="lazy"
                className="avatar"
              />
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <p>
            I lead the Human-Centered AI Lab, where we study how people interact with intelligent
            systems and how to design models that are robust, transparent, and aligned with
            user goals. I collaborate with interdisciplinary teams across healthcare, education,
            and civic tech to translate research into impact.
          </p>
        </Section>

        <Section id="research" title="Research">
          <div className="grid-2">
            <div>
              <h3>Key Interests</h3>
              <ul>
                <li>Interpretable machine learning and model debugging</li>
                <li>Human-AI collaboration and decision support</li>
                <li>Evaluation methods for safety, fairness, and robustness</li>
                <li>Interactive visualization for ML</li>
              </ul>
            </div>
            <div>
              <h3>Current Projects</h3>
              <ul>
                <li>Counterfactual explanations for clinical decision support</li>
                <li>Benchmarks for collaborative human-AI writing</li>
                <li>Tools for auditing LLM safety in education settings</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="publications" title="Publications">
          <ol className="pub-list">
            <li>
              Morgan, A., Chen, R., & Patel, S. (2025). "Practical Interpretability for
              High-Stakes ML." In Proceedings of the 38th Conference on Neural Information
              Processing Systems (NeurIPS). <a href="https://doi.org/10.48550/arXiv.2103.00020" target="_blank" rel="noopener noreferrer">DOI</a>
            </li>
            <li>
              Morgan, A., Rivera, L., (2024). "Measuring Human-AI Co-creation." ACM CHI Conference on
              Human Factors in Computing Systems. <a href="https://dl.acm.org/doi/10.1145/3313831.3376277" target="_blank" rel="noopener noreferrer">Link</a>
            </li>
            <li>
              Morgan, A. (2023). "Auditing Fairness in Educational AI Systems." Journal of Educational
              Data Science. <a href="https://doi.org/10.1038/s41586-019-1724-5" target="_blank" rel="noopener noreferrer">DOI</a>
            </li>
          </ol>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Email: <a href="mailto:alex.morgan@example.edu">alex.morgan@example.edu</a>
          </p>
          <ul className="socials" aria-label="External profiles">
            <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">Google Scholar</a></li>
            <li><a href="https://orcid.org/0000-0000-0000-0000" target="_blank" rel="noopener noreferrer" aria-label="ORCID">ORCID</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a></li>
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; <span>{new Date().getFullYear()}</span> Alex Morgan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
