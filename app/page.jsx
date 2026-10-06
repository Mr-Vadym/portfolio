'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Mail, Palette, Sparkles } from 'lucide-react';

const paths = {
  design: {
    kicker: '01 / DESIGN',
    title: 'Creative\nDesigner',
    copy: 'Performance ads, e-commerce, AI-assisted visuals, digital and print.',
    meta: ['Photoshop', 'Illustrator', 'AI', 'Performance'],
    icon: Palette,
    target: '#design',
  },
  code: {
    kicker: '02 / CODE',
    title: 'Front-end\nMarkup',
    copy: 'Responsive interfaces built from design to production-ready HTML, SCSS and JavaScript.',
    meta: ['HTML', 'SCSS', 'JavaScript', 'Vite'],
    icon: Code2,
    target: '#code',
  },
};

const designPreview = [
  ['Performance Ads', 'E-commerce · advertising production', 'New case / 2026'],
  ['Interactive Creatives', 'Quiz · scratch · spin mechanics', 'Coming next'],
  ['Premium & Lifestyle', 'Editorial · product · brand visuals', 'Selected work'],
];

const caseSections = [
  ['01', 'Campaign hero', 'Primary key visual / strongest first impression', '900 × 1350'],
  ['02', 'Creative variations', 'Three connected ad directions from one campaign', '3 × 900 × 1350'],
  ['03', 'Benefits & infographic', 'Product value translated into clear visual information', '2 × 900 × 1350'],
  ['04', 'Social proof', 'Review-led creative with trust and product hierarchy', '900 × 1350'],
  ['05', 'Interactive concept', 'Quiz, scratch, carousel or another interaction-first mechanic', '900 × 1350'],
  ['06', 'Format adaptation', 'One selected concept rebuilt for landscape', '1350 × 900'],
];

const codeProjects = [
  {
    title: 'Monblan Project',
    type: 'Responsive profile interface',
    image: 'images/project-monblan-screenshot.png',
    stack: ['Vite', 'SCSS', 'JavaScript', 'Flatpickr'],
    demo: 'https://mr-vadym.github.io/webspark-test/',
    repo: 'https://github.com/Mr-Vadym/webspark-test',
  },
  {
    title: 'Inweb Media Layout',
    type: 'Multi-page blog layout',
    image: 'images/project-inweb-screenshot.png',
    stack: ['Gulp', 'SCSS', 'jQuery', 'Responsive'],
    demo: 'https://mr-vadym.github.io/inweb/',
    repo: 'https://github.com/Mr-Vadym/inweb',
  },
];

export default function Page() {
  const [entered, setEntered] = useState(false);

  useEffect(() => setEntered(true), []);

  const scrollTo = target => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={entered ? 'portfolio is-ready' : 'portfolio'}>
      <section className="split-hero" id="home">
        <header className="split-header">
          <a href="#home" className="wordmark">VL<span>.</span></a>
          <p>Vadym Loiko / Portfolio 2026</p>
          <a href="mailto:vaddimmura@gmail.com"><Mail size={17} /> Contact</a>
        </header>

        <div className="intro">
          <p>Two disciplines. One visual mindset.</p>
          <h1>Choose what<br />you want to see.</h1>
          <span>Graphic / Creative Design <i>+</i> Front-end Markup</span>
        </div>

        <div className="path-grid">
          {Object.entries(paths).map(([key, item]) => {
            const Icon = item.icon;
            return (
              <button className={"path path-" + key} key={key} onClick={() => scrollTo(item.target)}>
                <div className="path-top">
                  <span>{item.kicker}</span>
                  <Icon size={24} />
                </div>
                <div className="path-body">
                  <h2>{item.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h2>
                  <p>{item.copy}</p>
                  <div className="path-tags">{item.meta.map(tag => <small key={tag}>{tag}</small>)}</div>
                </div>
                <div className="path-enter">Explore <ArrowDown size={19} /></div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="discipline design-side" id="design">
        <div className="section-number">01</div>
        <div className="discipline-head">
          <div>
            <p className="overline"><Sparkles size={15} /> Design portfolio</p>
            <h2>Creative work built<br />for attention.</h2>
          </div>
          <p className="section-copy">Commercial visuals, performance advertising and AI-assisted production. The newest work leads; older print and identity projects stay as supporting range.</p>
        </div>

        <div className="featured-case">
          <div className="featured-copy">
            <span>FEATURED CASE / 2026</span>
            <h3>Performance Ads<br />& E-commerce</h3>
            <p>A self-initiated portfolio case demonstrating product layouts, offer mechanics, reviews, infographics, interactive concepts and format adaptation.</p>
            <div className="case-tags"><span>Photoshop</span><span>AI-assisted</span><span>Ad Creative</span><span>Production</span></div>
            <button type="button">Case 01 — template ready <ArrowUpRight size={18} /></button>
          </div>
          <div className="featured-visual">
            <div className="visual-card visual-a">AD<br />01</div>
            <div className="visual-card visual-b">AD<br />02</div>
            <div className="visual-card visual-c">AD<br />03</div>
            <span>Replace with original fictional-brand portfolio visuals</span>
          </div>
        </div>

        <div className="case-structure">
          <div className="structure-intro">
            <span>CASE 01 / STRUCTURE</span>
            <h3>A complete campaign,<br />not a gallery.</h3>
            <p>These slots define the final case. All visuals will belong to one fictional brand and one consistent campaign system.</p>
          </div>
          <div className="structure-grid">
            {caseSections.map(([number, title, description, format]) => (
              <article className="structure-card" key={number}>
                <span>{number}</span>
                <div><h4>{title}</h4><p>{description}</p></div>
                <small>{format}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="process-strip">
          <span>ROLE</span><strong>Creative / Graphic Designer</strong>
          <span>FOCUS</span><strong>Performance · E-commerce · AI-assisted production</strong>
          <span>OUTPUT</span><strong>Original fictional campaign</strong>
        </div>

        <div className="case-list">
          {designPreview.map(([title, type, status], index) => (
            <article key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{type}</p><small>{status}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="discipline code-side" id="code">
        <div className="section-number">02</div>
        <div className="discipline-head">
          <div>
            <p className="overline"><Code2 size={15} /> Code portfolio</p>
            <h2>From layout<br />to working UI.</h2>
          </div>
          <p className="section-copy">Responsive markup with clean structure, SCSS and practical JavaScript. Design awareness is an advantage here, not a competing job title.</p>
        </div>

        <div className="code-grid">
          {codeProjects.map(project => (
            <article className="code-card" key={project.title}>
              <div className="browser-frame"><span></span><span></span><span></span><img src={project.image} alt={project.title} /></div>
              <div className="code-card-copy">
                <span>{project.type}</span><h3>{project.title}</h3>
                <div>{project.stack.map(tag => <small key={tag}>{tag}</small>)}</div>
                <p><a href={project.demo} target="_blank" rel="noreferrer">Live <ArrowUpRight size={16} /></a><a href={project.repo} target="_blank" rel="noreferrer">GitHub <Code2 size={16} /></a></p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div><span>Available for remote work</span><h2>Have a project<br />or a role in mind?</h2></div>
        <a href="mailto:vaddimmura@gmail.com">vaddimmura@gmail.com <ArrowUpRight size={22} /></a>
        <p>Vadym Loiko © 2026</p>
      </footer>
    </main>
  );
}
