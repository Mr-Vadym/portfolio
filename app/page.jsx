'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Mail, Palette, Sparkles } from 'lucide-react';

const asset = (path) => `${import.meta.env.BASE_URL || '/'}${path.replace(/^\\/+/, '')}`;

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

function Instagram({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

export default function Page() {
  const [entered, setEntered] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const photoTrack = useRef(null);
  const photoItems = [
    ['about-autumn.webp','Autumn outdoor portrait','OUTSIDE'],
    ['about-candid.webp','Thoughtful candid portrait','CANDID'],
    ['about-redlight.webp','Warm red light portrait','AFTER HOURS'],
    ['about-headshot.webp','Close-up portrait','PORTRAIT'],
    ['about-playful.webp','Playful casual portrait','JUST ME'],
    ['about-event.webp','At a celebration with friends','PEOPLE'],
    ['about-cap.webp','Casual portrait in a cap','EVERYDAY'],
  ];
  const goToPhoto = (index) => {
    const next = Math.max(0, Math.min(photoItems.length - 1, index));
    const track = photoTrack.current;
    const card = track?.children[next];
    if (track && card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft - (track.clientWidth - card.clientWidth) / 2, behavior: 'smooth' });
    setPhotoIndex(next);
  };
  const syncPhotoIndex = () => {
    const track = photoTrack.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0, distance = Infinity;
    Array.from(track.children).forEach((card, i) => {
      const delta = Math.abs(card.offsetLeft - track.offsetLeft + card.clientWidth / 2 - center);
      if (delta < distance) { distance = delta; closest = i; }
    });
    setPhotoIndex(closest);
  };

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
          <div className="hero-header-links"><a href="https://www.instagram.com/vadimm.ko/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile"><Instagram size={18}/><span>Instagram</span></a><a href="mailto:vaddimmura@gmail.com"><Mail size={17} /> Contact</a></div>
        </header>

        <div className="intro intro-with-photo">
          <div className="intro-title"><p>Two disciplines. One visual mindset.</p><h1>Choose what<br />you want to see<span className="intro-dot">.</span></h1><span>Graphic / Creative Design <i>+</i> Front-end Markup</span></div>
          <figure className="intro-portrait"><img src={asset('images/hero-vadym.webp')} alt="Vadym Loiko smiling in sunglasses" fetchPriority="high" /><figcaption><span>THE PERSON BEHIND THE PIXELS</span><strong>VADYM LOIKO / 2026</strong></figcaption></figure>
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
            <div className="case-tags"><span>Art Direction</span><span className="tool-tag tool-ps"><img src={asset('images/tool-photoshop.webp')} alt="" /> Photoshop</span><span>AI-assisted Imagery</span><span>Digital Ads</span></div>
            <a className="luma-jump" href="#luma-gallery">Explore the campaign <ArrowDown size={18} /></a>
          </div>
          <div className="luma-cover">
            <img src={asset('images/luma-01-hero.jpg')} alt="LUMA Barrier Cloud Cream campaign hero advertising creative" />
            <div className="luma-cover-label">01 / CAMPAIGN KEY VISUAL</div>
          </div>
        </div>

        <div className="luma-gallery" id="luma-gallery">
          <div className="luma-gallery-heading"><span>THE CAMPAIGN / 08 CREATIVES</span><p>Designed as a coherent visual system across multiple advertising angles and placements.</p></div>

          <div className="luma-section-heading"><span>01</span><div><h3>Product & offer</h3><p>Clear product hierarchy, a distinctive visual language and direct promotional messaging.</p></div></div>
          <div className="luma-grid luma-grid-three">
            <figure><img src={asset('images/luma-02-product.jpg')} alt="LUMA product-focused skincare advertising creative" loading="lazy" /><figcaption>01 / Product story</figcaption></figure>
            <figure><img src={asset('images/luma-03-promo.jpg')} alt="LUMA limited-time 20 percent off promotional creative" loading="lazy" /><figcaption>02 / Promotional offer</figcaption></figure>
            <figure><img src={asset('images/luma-04-lifestyle.jpg')} alt="LUMA lifestyle skincare advertising creative" loading="lazy" /><figcaption>03 / Lifestyle</figcaption></figure>
          </div>

          <div className="luma-section-heading"><span>02</span><div><h3>Benefits & ingredients</h3><p>Turning product attributes into approachable, easy-to-scan visuals.</p></div></div>
          <div className="luma-grid luma-grid-two">
            <figure><img src={asset('images/luma-05-benefits.jpg')} alt="LUMA three product benefits creative" loading="lazy" /><figcaption>04 / Benefit-led creative</figcaption></figure>
            <figure><img src={asset('images/luma-06-infographic.jpg')} alt="LUMA ingredient infographic featuring ceramides and squalane" loading="lazy" /><figcaption>05 / Ingredient infographic</figcaption></figure>
          </div>

          <div className="luma-section-heading"><span>03</span><div><h3>Review concept</h3><p>A testimonial-style composition demonstrating social-proof hierarchy. The review is illustrative, not a verified customer endorsement.</p></div></div>
          <div className="luma-grid luma-grid-review">
            <figure><img src={asset('images/luma-07-review.jpg')} alt="Illustrative LUMA customer-review-style advertising concept" loading="lazy" /><figcaption>06 / Illustrative testimonial</figcaption></figure>
            <div className="luma-editorial"><span>THE APPROACH</span><h4>One visual identity.<br />Different reasons to care.</h4><p>The campaign balances expressive typography, product-led imagery and concise benefit messaging. Each creative serves a different communication goal while retaining a recognizable brand system.</p><small>Personal portfolio concept · Not a commissioned brand campaign</small></div>
          </div>

          <div className="luma-section-heading"><span>04</span><div><h3>Format adaptation</h3><p>The same visual language rebuilt for a landscape placement rather than simply cropped.</p></div></div>
          <div className="luma-grid luma-grid-wide">
            <figure><img src={asset('images/luma-08-landscape.jpg')} alt="LUMA landscape advertising format adaptation" loading="lazy" /><figcaption>07 / Landscape adaptation</figcaption></figure>
          </div>
        </div>

        <div className="luma-summary"><div><span>ROLE</span><strong>Concept · Art Direction · Graphic Design</strong></div><div><span>TOOLS</span><strong>Adobe Photoshop · AI-assisted image production</strong></div><div><span>DELIVERABLES</span><strong>8 finished advertising creatives</strong></div></div>

        <section className="fox-case fox-print-only" id="print">
          <header className="fox-head">
            <div><span className="fox-kicker">02 / SELECTED PRINT WORK</span><h3>Print<em>Brochures & business cards</em></h3></div>
            <p>Selected commercial print projects: concise layouts, purposeful typography and visual systems adapted to different businesses.</p>
          </header>
          <div className="fox-meta"><span>PRINT & EDITORIAL DESIGN</span><span>COMMERCIAL PROJECTS</span><span className="tool-tag tool-ai"><img src={asset('images/tool-illustrator.webp')} alt="" /> Illustrator</span><span className="tool-tag tool-ps"><img src={asset('images/tool-photoshop.webp')} alt="" /> Photoshop</span></div>
          <div className="fox-subhead"><span>01 / BROCHURES</span><h4>Complex information.<br/>Clear presentation.</h4><p>Product communication for FOXART, designed within an established brand identity. Brochure layouts and technical reference materials.</p></div>
          <div className="fox-media-grid">
            <figure><div className="fox-artwork"><img src={asset('images/foxart-brochure.jpg')} alt="FOXART lighting solutions brochure" loading="lazy"/></div><figcaption>FOXART / Lighting solutions brochure</figcaption></figure>
            <figure><div className="fox-artwork"><img src={asset('images/foxart-profile-cards.jpg')} alt="FOXART technical profile reference cards" loading="lazy"/></div><figcaption>FOXART / Technical profile cards</figcaption></figure>
          </div>
          <div className="fox-subhead"><span>02 / BUSINESS CARDS</span><h4>Distinct businesses.<br/>Distinct identities.</h4><p>Three double-sided business card designs, each built around a different service, audience and visual character.</p></div>
          <div className="fox-media-grid fox-card-gallery">
            <figure><div className="fox-artwork"><img src={asset('images/print-taxi.jpg')} alt="Black and yellow taxi service business card, front and back" loading="lazy"/></div><figcaption>Taxi / Transport services</figcaption></figure>
            <figure><div className="fox-artwork"><img src={asset('images/print-internet.jpg')} alt="Green and white internet provider business card, front and back" loading="lazy"/></div><figcaption>Internet / Connectivity services</figcaption></figure>
            <figure><div className="fox-artwork"><img src={asset('images/print-services.jpg')} alt="Black and red painting and pressure washing business card, front and back" loading="lazy"/></div><figcaption>Painting & cleaning / Home services</figcaption></figure>
          </div>
          <p className="fox-print-note">Selected commercial design work. FOXART's existing brand identity was refreshed and adapted, not created from scratch.</p>
        </section>
      </section>

      <section className="motion-section" id="motion">
        <div className="motion-heading">
          <div><span className="motion-eyebrow">03 / MOTION & 3D</span><h2>Made to<br/><em>move.</em></h2></div>
          <p>Product visualization, technical 3D animation and motion-led brand communication. Selected commercial work showing objects, materials and mechanisms in motion.</p>
        </div>
        <div className="motion-grid">
          {[
            {src:'motion-magnetic-track.mp4',title:'Magnetic track system',kind:'Technical 3D animation',note:'Installation process and assembly visualization'},
            {src:'motion-balloon.mp4',title:'Brand in the sky',kind:'3D brand visual',note:'Atmospheric branded balloon animation'},
            {src:'motion-new-profile.mp4',title:'Profile reveal',kind:'Product visualization',note:'Materials, lighting and product presentation'},
            {src:'motion-thermal-rings.mp4',title:'Thermal rings',kind:'Motion design',note:'Animated product-led social creative'},
            {src:'motion-profile-install.mp4',title:'Profile installation',kind:'Technical visualization',note:'Step-by-step assembly animation'},
          ].map((item,index)=>(
            <article className={'motion-card motion-card-'+item.src.replace('.mp4','')} key={item.src}>
              <div className="motion-video-wrap">
                <video src={asset(item.src)} autoPlay muted loop playsInline preload="metadata" aria-label={item.title} />
                <span className="motion-video-index">{String(index+1).padStart(2,'0')} / 05</span>
              </div>
              <div className="motion-card-info"><div><span>{item.kind}</span><h3>{item.title}</h3><p>{item.note}</p></div><span className="motion-play-tag tool-tag tool-blender"><img src={asset('images/tool-blender.webp')} alt="" /> Blender</span></div>
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
              <div className="browser-frame"><span></span><span></span><span></span><img src={asset(project.image)} alt={project.title} /></div>
              <div className="code-card-copy">
                <span>{project.type}</span><h3>{project.title}</h3>
                <div>{project.stack.map(tag => <small key={tag}>{tag}</small>)}</div>
                <p><a href={project.demo} target="_blank" rel="noreferrer">Live <ArrowUpRight size={16} /></a><a href={project.repo} target="_blank" rel="noreferrer">GitHub <Code2 size={16} /></a></p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-heading"><span>04 / THE PERSON BEHIND THE WORK</span><h2>Beyond<br/>the pixels<span>.</span></h2></div>
        <div className="about-layout">
          <figure className="about-main-photo"><img src={asset('images/about-sunglasses.webp')} alt="Vadym in a relaxed candid portrait" loading="lazy"/><figcaption>VADYM / DESIGN · 3D · CODE</figcaption></figure>
          <div className="about-story">
            <span className="about-eyebrow">A LITTLE ABOUT ME</span>
            <h3>Curious by nature.<br/>Creative by practice.</h3>
            <p>I'm Vadym — a multidisciplinary designer working across graphic design, 3D visualization and front-end development. I like making complex things feel simple, useful and visually considered.</p>
            <p>Beyond work, there's music, guitar, a fascination with how things are made, and the occasional moment of not taking myself too seriously.</p>
            <div className="about-interests"><span>DESIGN</span><span>3D</span><span>FRONT-END</span><span>GUITAR</span></div>
          </div>
        </div>
        <div className="about-gallery-head"><span>OFF THE CLOCK / A FEW FRAMES</span><div className="about-carousel-controls"><span className="about-counter">{String(photoIndex+1).padStart(2,'0')} <i>/</i> {String(photoItems.length).padStart(2,'0')}</span><button type="button" onClick={() => goToPhoto(photoIndex-1)} disabled={photoIndex===0} aria-label="Previous photo">←</button><button type="button" onClick={() => goToPhoto(photoIndex+1)} disabled={photoIndex===photoItems.length-1} aria-label="Next photo">→</button></div></div>
        <div className="about-gallery about-gallery-slider" ref={photoTrack} onScroll={syncPhotoIndex} aria-label="Personal photo carousel">
          {photoItems.map(([file, alt, label], i) => (
            <figure key={file} className={i===photoIndex?'is-active':''} onClick={() => goToPhoto(i)}>
              <img src={asset('images/'+file)} alt={alt} loading="lazy"/>
              <figcaption><span>{String(i+1).padStart(2,'0')}</span> {label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="about-carousel-progress" aria-hidden="true"><span style={{width:((photoIndex+1)/photoItems.length*100)+'%'}} /></div>
      </section>

      <footer>
        <div><span>Available for remote work</span><h2>Have a project<br />or a role in mind?</h2></div>
        <div className="footer-links"><a href="mailto:vaddimmura@gmail.com">vaddimmura@gmail.com <ArrowUpRight size={22} /></a><a href="https://www.instagram.com/vadimm.ko/" target="_blank" rel="noopener noreferrer"><Instagram size={19}/> Instagram <ArrowUpRight size={17}/></a></div>
        <p>Vadym Loiko © 2026</p>
      </footer>
    </main>
  );
}
