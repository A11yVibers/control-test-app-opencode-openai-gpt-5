import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo">Research Portfolio</a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="name">Dr. Alex Researcher</h1>
          <p className="title">Assistant Professor, Computer Science</p>
          <p className="bio">
            I design data-driven systems for reliable machine learning and responsible AI.
            My group studies model robustness, interpretability, and human-centered evaluation,
            with applications in healthcare and scientific discovery.
          </p>
          <div className="cta-row">
            <a className="button primary" href="#research">Explore Research</a>
            <a className="button" href="#publications">View Publications</a>
          </div>
        </div>
        <div className="hero-photo">
          <img
            alt="Profile portrait"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            width="280"
            height="280"
          />
          <p className="photo-credit">
            Image: Wikimedia Commons (placeholder)
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <div>
          <h2>About</h2>
          <p>
            I lead the Reliable ML Lab at Example University. Before joining Example,
            I received my Ph.D. from Somewhere University and completed a postdoc at
            Research Institute. My work bridges machine learning and human-computer
            interaction to create trustworthy AI systems that are robust in practice.
          </p>
          <p>
            Recent projects include methods for shift-robust evaluation, uncertainty-aware
            decision support, and dataset documentation practices that improve transparency.
          </p>
        </div>
        <aside className="key-facts">
          <h3>Key Facts</h3>
          <ul>
            <li>Ph.D., Machine Learning</li>
            <li>Lead, Reliable ML Lab</li>
            <li>Areas: Robustness, Interpretability, HCI</li>
            <li>Teaching: ML Systems, Responsible AI</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Research() {
  const items = [
    {
      title: 'Robustness Under Distribution Shift',
      desc:
        'Benchmarks and methods for evaluating and improving performance when data changes over time or across domains.',
    },
    {
      title: 'Model Interpretability',
      desc:
        'Techniques that make complex models understandable to domain experts, emphasizing faithfulness and usability.',
    },
    {
      title: 'Human-AI Decision Support',
      desc:
        'Interfaces and workflows that integrate model uncertainty and explanations into real decisions in healthcare.',
    },
    {
      title: 'Data Documentation & Governance',
      desc:
        'Lightweight practices for dataset transparency, provenance tracking, and bias auditing in ML pipelines.',
    },
  ];

  return (
    <section id="research" className="section alt">
      <div className="container">
        <h2>Research</h2>
        <p className="section-lead">
          We study reliable machine learning: methods and tools that help models generalize,
          communicate uncertainty, and support expert oversight.
        </p>
        <div className="card-grid">
          {items.map((it) => (
            <article className="card" key={it.title}>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
        <div className="current-projects">
          <h3>Current Projects</h3>
          <ul>
            <li>OOD-Health: Shift-robust clinical prediction under temporal drift</li>
            <li>ExplainLab: Evaluating explanation faithfulness with clinician-in-the-loop tasks</li>
            <li>DataCards: Semi-automated documentation for ML datasets</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Publications() {
  const pubs = [
    {
      title: 'Testing Model Robustness to Temporal Dataset Shift in Clinical Prediction',
      authors: 'A. Researcher, B. Collaborator, C. Advisor',
      venue: 'Journal of Reliable Machine Learning, 2024',
      link: 'https://doi.org/10.0000/example-doi-1',
    },
    {
      title: 'Faithful and Actionable Explanations for High-Stakes Decision Support',
      authors: 'A. Researcher, D. Expert',
      venue: 'ACM CHI, 2023',
      link: 'https://doi.org/10.0000/example-doi-2',
    },
    {
      title: 'DataCards: Lightweight Documentation for ML Datasets',
      authors: 'A. Researcher, E. Teammate, F. Collaborator',
      venue: 'NeurIPS Datasets and Benchmarks, 2022',
      link: 'https://doi.org/10.0000/example-doi-3',
    },
  ];

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2>Publications</h2>
        <ol className="pub-list">
          {pubs.map((p) => (
            <li key={p.title} className="pub-item">
              <span className="pub-title">{p.title}</span>
              <span className="pub-meta">{p.authors} • {p.venue}</span>
              <a className="pub-link" href={p.link} target="_blank" rel="noreferrer">DOI</a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:researcher@example.edu">researcher@example.edu</a></p>
        <ul className="socials">
          <li>
            <a href="https://scholar.google.com/citations?user=XXXXXXXXXXX" target="_blank" rel="noreferrer">
              Google Scholar
            </a>
          </li>
          <li>
            <a href="https://orcid.org/0000-0001-2345-6789" target="_blank" rel="noreferrer">ORCID</a>
          </li>
          <li>
            <a href="https://github.com/username" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/username/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Alex Researcher</small>
        <a href="#home" className="to-top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  React.useEffect(() => {
    // Smooth scroll for internal anchors
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', `#${id}`);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Research />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
