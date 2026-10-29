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
          <p>Vadym Loiko / Portfolio 2026 · Design + Code</p>
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


        <div className="luma-intro" id="luma">
          <div className="luma-intro-copy">
            <span className="luma-eyebrow">FEATURED CASE / 2026 / CONCEPT CAMPAIGN</span>
            <h3>LUMA<span>®</span><br />Barrier Cloud Cream</h3>
            <p>One skincare product. Eight coordinated advertising creatives. A self-initiated campaign exploring offer-led design, product storytelling, ingredients, lifestyle imagery and format adaptation.</p>
            <div className="case-tags"><span>Art Direction</span><span>Photoshop</span><span>AI-assisted Imagery</span><span>Digital Ads</span></div>
            <a className="luma-jump" href="#luma-gallery">Explore the campaign <ArrowDown size={18} /></a>
          </div>
          <div className="luma-cover">
            <img src="/images/luma-01-hero.jpg" alt="LUMA Barrier Cloud Cream campaign hero advertising creative" />
            <div className="luma-cover-label">01 / CAMPAIGN KEY VISUAL</div>
          </div>
        </div>

        <div className="luma-gallery" id="luma-gallery">
          <div className="luma-gallery-heading"><span>THE CAMPAIGN / 08 CREATIVES</span><p>Designed as a coherent visual system across multiple advertising angles and placements.</p></div>

          <div className="luma-section-heading"><span>01</span><div><h3>Product & offer</h3><p>Clear product hierarchy, a distinctive visual language and direct promotional messaging.</p></div></div>
          <div className="luma-grid luma-grid-three">
            <figure><img src="/images/luma-02-product.jpg" alt="LUMA product-focused skincare advertising creative" loading="lazy" /><figcaption>01 / Product story</figcaption></figure>
            <figure><img src="/images/luma-03-promo.jpg" alt="LUMA limited-time 20 percent off promotional creative" loading="lazy" /><figcaption>02 / Promotional offer</figcaption></figure>
            <figure><img src="/images/luma-04-lifestyle.jpg" alt="LUMA lifestyle skincare advertising creative" loading="lazy" /><figcaption>03 / Lifestyle</figcaption></figure>
          </div>

          <div className="luma-section-heading"><span>02</span><div><h3>Benefits & ingredients</h3><p>Turning product attributes into approachable, easy-to-scan visuals.</p></div></div>
          <div className="luma-grid luma-grid-two">
            <figure><img src="/images/luma-05-benefits.jpg" alt="LUMA three product benefits creative" loading="lazy" /><figcaption>04 / Benefit-led creative</figcaption></figure>
            <figure><img src="/images/luma-06-infographic.jpg" alt="LUMA ingredient infographic featuring ceramides and squalane" loading="lazy" /><figcaption>05 / Ingredient infographic</figcaption></figure>
          </div>

          <div className="luma-section-heading"><span>03</span><div><h3>Review concept</h3><p>A testimonial-style composition demonstrating social-proof hierarchy. The review is illustrative, not a verified customer endorsement.</p></div></div>
          <div className="luma-grid luma-grid-review">
            <figure><img src="/images/luma-07-review.jpg" alt="Illustrative LUMA customer-review-style advertising concept" loading="lazy" /><figcaption>06 / Illustrative testimonial</figcaption></figure>
            <div className="luma-editorial"><span>THE APPROACH</span><h4>One visual identity.<br />Different reasons to care.</h4><p>The campaign balances expressive typography, product-led imagery and concise benefit messaging. Each creative serves a different communication goal while retaining a recognizable brand system.</p><small>Personal portfolio concept · Not a commissioned brand campaign</small></div>
          </div>

          <div className="luma-section-heading"><span>04</span><div><h3>Format adaptation</h3><p>The same visual language rebuilt for a landscape placement rather than simply cropped.</p></div></div>
          <div className="luma-grid luma-grid-wide">
            <figure><img src="/images/luma-08-landscape.jpg" alt="LUMA landscape advertising format adaptation" loading="lazy" /><figcaption>07 / Landscape adaptation</figcaption></figure>
          </div>
        </div>

        <div className="luma-summary"><div><span>ROLE</span><strong>Concept · Art Direction · Graphic Design</strong></div><div><span>TOOLS</span><strong>Adobe Photoshop · AI-assisted image production</strong></div><div><span>DELIVERABLES</span><strong>8 finished advertising creatives</strong></div></div>

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
