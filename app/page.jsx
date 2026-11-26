'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Mail, Palette, Sparkles } from 'lucide-react';

const asset = (path) => `${import.meta.env.BASE_URL || '/'}${path.startsWith('/') ? path.slice(1) : path}`;

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

        <section className="armor-case" id="armorstandart">
          <header className="armor-heading">
            <div><span>E-COMMERCE / PRODUCT CONTENT</span><h3>ArmorStandart.<br />One product. Six views.</h3></div>
            <p>A coordinated set of product listing visuals for a charger and cable kit: a clean product image, feature-led composition, technical infographic, material details, everyday use and package contents.</p>
          </header>
          <div className="armor-grid">
            {[
              ['01-product', 'Product hero', 'White ArmorStandart charger and USB-C to Lightning cable on a clean white background'],
              ['02-features', 'Key features', 'ArmorStandart 25W PD charger product card with pink feature icons and cable close-up'],
              ['03-specifications', 'Technical infographic', 'ArmorStandart charger specification infographic with power, port and plug information'],
              ['04-details', 'Materials & details', 'Charger and cable detail compositions with material and finish callouts'],
              ['05-lifestyle', 'Everyday use', 'ArmorStandart charger connected to a smartphone in a soft home setting'],
              ['06-contents', 'Package contents', 'ArmorStandart charger kit with packaging, cable and instruction booklet'],
            ].map(([file, title, alt]) => (
              <figure key={file}>
                <a href={asset(`images/armorstandart-${file}.webp`)} target="_blank" rel="noopener noreferrer" aria-label={`View ArmorStandart ${title.toLowerCase()} at full size`}>
                  <img src={asset(`images/armorstandart-${file}.webp`)} alt={alt} width="2000" height="2000" loading="lazy" decoding="async" />
                </a>
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="miliphone-case" id="miliphone">
          <div className="miliphone-heading">
            <span>PRODUCT ADVERTISING</span>
            <h3>Miliphone<br />Black Friday creative.</h3>
            <p>A landscape smartphone promotion built around a bold sale message, a prominent product image and a clear price hierarchy. Black and gold establish the visual mood, while the red headline and yellow call to action guide attention.</p>
          </div>
          <figure>
            <a href={asset('images/miliphone-black-friday.jpg')} target="_blank" rel="noopener noreferrer" aria-label="View the full Miliphone Black Friday advertising creative">
              <img src={asset('images/miliphone-black-friday.jpg')} alt="Miliphone Black Friday smartphone advertising banner with a black and gold composition, red sale headline and yellow Shop Now button" width="1138" height="640" loading="lazy" />
            </a>
            <figcaption>Miliphone / Black Friday / Landscape advertising creative</figcaption>
          </figure>
        </section>

        <section className="fox-case fox-print-only" id="print">
          <header className="fox-head">
            <div><span className="fox-kicker">02 / SELECTED PRINT WORK</span><h3>Print<em>Brochures & business cards</em></h3></div>
            <p>Selected commercial print projects: concise layouts, purposeful typography and visual systems adapted to different businesses.</p>
          </header>
          <div className="fox-meta"><span>PRINT & EDITORIAL DESIGN</span><span>COMMERCIAL PROJECTS</span><span className="tool-tag tool-ai"><img src={asset('images/tool-illustrator.webp')} alt="" /> Illustrator</span><span className="tool-tag tool-ps"><img src={asset('images/tool-photoshop.webp')} alt="" /> Photoshop</span></div>
          <div className="fox-subhead"><span>01 / BROCHURES</span><h4>Complex information.<br/>Clear presentation.</h4><p>Product communication for FOXART, designed within an established brand identity. Brochure layouts and technical reference materials.</p></div>
          <div className="fox-media-grid">
            <figure><div className="fox-artwork"><img src={asset('images/foxart-brochure.jpg')} alt="FOXART lighting solutions brochure" loading="lazy"/></div><figcaption>FOXART / Lighting solutions brochure</figcaption></figure>
          </div>
          <div className="fox-subhead" id="foxart-profile-brochure"><span>02 / FEATURED PRINT CASE</span><h4>FOXART profile systems.<br/>A technical brochure.</h4><p>A dedicated print case for construction profiles: a structured product overview with technical illustrations, consistent labeling and a recognizable black-and-yellow FOXART identity.</p></div>
          <div className="fox-media-grid fox-brochure-case">
            <figure><div className="fox-artwork"><img src={asset('images/foxart-profile-cards.jpg')} alt="FOXART technical profile brochure, first view" loading="lazy"/></div><figcaption>FOXART / Technical brochure · first view</figcaption></figure>
            <figure><div className="fox-artwork"><img src={asset('images/foxart-profile-brochure.png')} alt="FOXART construction profile brochure with technical diagrams and black-and-yellow cover" loading="lazy"/></div><figcaption>FOXART / Technical brochure · second view</figcaption></figure>
          </div>
          <div className="fox-subhead" id="alexplast"><span>03 / PRODUCT BROCHURE</span><h4>ALEXPLAST.<br/>Products & production.</h4><p>A three-panel brochure for a Ukrainian manufacturer of stretch-ceiling components. A blue-and-white layout brings together the product range, company story, production and export information.</p></div>
          <div className="fox-media-grid alexplast-gallery">
            <figure><a className="fox-artwork" href={asset('images/alexplast-brochure-products.webp')} target="_blank" rel="noopener noreferrer" aria-label="Open ALEXPLAST product brochure mockup at full size"><img src={asset('images/alexplast-brochure-products.webp')} alt="ALEXPLAST three-panel brochure mockup showing the cover and illustrated product range in blue and white" width="2400" height="1800" loading="lazy" decoding="async"/></a><figcaption>ALEXPLAST / Cover & product range · View full size</figcaption></figure>
            <figure><a className="fox-artwork" href={asset('images/alexplast-brochure-company.webp')} target="_blank" rel="noopener noreferrer" aria-label="Open ALEXPLAST company brochure mockup at full size"><img src={asset('images/alexplast-brochure-company.webp')} alt="ALEXPLAST brochure reverse showing company information, manufacturing, team photographs and export cooperation" width="2400" height="1800" loading="lazy" decoding="async"/></a><figcaption>ALEXPLAST / Company, production & export · View full size</figcaption></figure>
          </div>
          <div className="fox-subhead" id="business-cards"><span>04 / BUSINESS CARDS</span><h4>Distinct businesses.<br/>Distinct identities.</h4><p>Business card designs for transport, internet, home services, FOXART and Love in Action, collected in one gallery.</p></div>
          <div className="fox-media-grid fox-card-gallery">
            <figure><div className="fox-artwork"><img src={asset('images/print-taxi.jpg')} alt="Black and yellow taxi service business card, front and back" loading="lazy"/></div><figcaption>Taxi / Transport services</figcaption></figure>
            <figure><div className="fox-artwork"><img src={asset('images/print-internet.jpg')} alt="Green and white internet provider business card, front and back" loading="lazy"/></div><figcaption>Internet / Connectivity services</figcaption></figure>
            <figure><div className="fox-artwork"><img src={asset('images/print-services.jpg')} alt="Black and red painting and pressure washing business card, front and back" loading="lazy"/></div><figcaption>Painting & cleaning / Home services</figcaption></figure>
            <figure><a className="fox-artwork" href={asset('images/foxart-business-cards.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: FOXART / Business card mockup"><img src={asset('images/foxart-business-cards.webp')} alt="FOXART / Business card mockup" width="1280" height="960" loading="lazy" decoding="async" /></a><figcaption>FOXART / Business card mockup</figcaption></figure>
            <figure><a className="fox-artwork" href={asset('images/love-in-action-cards.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: Love in Action / Business card mockup"><img src={asset('images/love-in-action-cards.webp')} alt="Love in Action / Business card mockup" width="1210" height="633" loading="lazy" decoding="async" /></a><figcaption>Love in Action / Business card mockup</figcaption></figure>
          </div>
          <p className="fox-print-note">Selected commercial design work. FOXART's existing brand identity was refreshed and adapted, not created from scratch.</p>
        </section>
      </section>

<section className="production-work" id="production-work"><header className="fox-head"><div><span className="fox-kicker">SELECTED COMMERCIAL WORK</span><h3>From brief<em>to visual execution.</em></h3></div><p>Retail advertising, brand materials, signage and large-format design. Client references, design mockups and installation photographs are labeled separately.</p></header><article className="production-case comparison-case" id="electrosvit"><div className="fox-subhead"><span>RETAIL ADVERTISING</span><h4>Electrosvit. From reference to redesign.</h4><p>A banner redesign based on the client’s supplied reference and requested changes. The original reference is client material; the final banner is my implementation.</p></div><div className="production-gallery"><figure><a href={asset('images/electrosvit-reference.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: Client reference / Original supplied banner"><img src={asset('images/electrosvit-reference.webp')} alt="Client reference / Original supplied banner" width="1280" height="639" loading="lazy" decoding="async" /></a><figcaption>Client reference / Original supplied banner</figcaption></figure><figure><a href={asset('images/electrosvit-final.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: My implementation / Electrosvit final banner"><img src={asset('images/electrosvit-final.webp')} alt="My implementation / Electrosvit final banner" width="1123" height="560" loading="lazy" decoding="async" /></a><figcaption>My implementation / Electrosvit final banner</figcaption></figure></div></article><article className="production-case " id="retail-banners"><div className="fox-subhead"><span>PRODUCT COMMUNICATION</span><h4>Retail banners. Different product ranges.</h4><p>Product-focused compositions for irrigation supplies and fasteners.</p></div><div className="production-gallery"><figure><a href={asset('images/electrosvit-irrigation.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: Electrosvit / Irrigation supplies banner"><img src={asset('images/electrosvit-irrigation.webp')} alt="Electrosvit / Irrigation supplies banner" width="1123" height="560" loading="lazy" decoding="async" /></a><figcaption>Electrosvit / Irrigation supplies banner</figcaption></figure><figure><a href={asset('images/fasteners-banner.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: Fasteners / Product advertising banner"><img src={asset('images/fasteners-banner.webp')} alt="Fasteners / Product advertising banner" width="912" height="912" loading="lazy" decoding="async" /></a><figcaption>Fasteners / Product advertising banner</figcaption></figure></div></article><article className="production-case " id="foxart-brand-materials"><div className="fox-subhead"><span>FOXART / BRAND APPLICATION</span><h4>One brand. Multiple formats.</h4><p>Address signs, office signs and information stands adapted to FOXART’s existing identity.</p></div><div className="production-gallery"><figure><a href={asset('images/foxart-address-signs.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: FOXART / PVC address sign designs"><img src={asset('images/foxart-address-signs.webp')} alt="FOXART / PVC address sign designs" width="312" height="234" loading="lazy" decoding="async" /></a><figcaption>FOXART / PVC address sign designs</figcaption></figure><figure><a href={asset('images/foxart-office-signs.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: FOXART / Office sign designs"><img src={asset('images/foxart-office-signs.webp')} alt="FOXART / Office sign designs" width="714" height="535" loading="lazy" decoding="async" /></a><figcaption>FOXART / Office sign designs</figcaption></figure><figure><a href={asset('images/foxart-information-stands.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: FOXART / Consumer information stand designs"><img src={asset('images/foxart-information-stands.webp')} alt="FOXART / Consumer information stand designs" width="714" height="535" loading="lazy" decoding="async" /></a><figcaption>FOXART / Consumer information stand designs</figcaption></figure></div></article><div className="compact-case-pair"><article className="production-case social-gallery" id="foxart-social"><div className="fox-subhead"><span>FOXART / DIGITAL DESIGN</span><h4>Product stories for social media.</h4><p>A selection of product announcements, technical explanations and promotional layouts, shown in a supplied gallery screenshot.</p></div><div className="production-gallery"><figure><a href={asset('images/foxart-social-design.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: FOXART / Social media design selection · Gallery screenshot"><img src={asset('images/foxart-social-design.webp')} alt="FOXART / Social media design selection · Gallery screenshot" width="591" height="1280" loading="lazy" decoding="async" /></a><figcaption>FOXART / Social media design selection · Gallery screenshot</figcaption></figure></div></article><article className="production-case rollup-gallery" id="love-in-action"><div className="fox-subhead"><span>PRINT COMMUNICATION</span><h4>Love in Action. Roll-up banner.</h4><p>A roll-up banner for the community organization «Любов в дії».</p></div><div className="production-gallery"><figure><a href={asset('images/love-in-action-rollup.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: Love in Action / Roll-up banner design"><img src={asset('images/love-in-action-rollup.webp')} alt="Love in Action / Roll-up banner design" width="414" height="932" loading="lazy" decoding="async" /></a><figcaption>Love in Action / Roll-up banner design</figcaption></figure></div></article></div><article className="production-case " id="large-format"><div className="fox-subhead"><span>LARGE-FORMAT DESIGN</span><h4>Design beyond the page.</h4><p>Print layouts for stretch ceilings shown in installation photographs, alongside a separate vehicle-wrap mockup.</p></div><div className="production-gallery"><figure><a href={asset('images/ceiling-print-installation-1.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: Stretch-ceiling print / Installation photograph · View 1"><img src={asset('images/ceiling-print-installation-1.webp')} alt="Stretch-ceiling print / Installation photograph · View 1" width="960" height="1280" loading="lazy" decoding="async" /></a><figcaption>Stretch-ceiling print / Installation photograph · View 1</figcaption></figure><figure><a href={asset('images/ceiling-print-installation-2.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: Stretch-ceiling print / Installation photograph · View 2"><img src={asset('images/ceiling-print-installation-2.webp')} alt="Stretch-ceiling print / Installation photograph · View 2" width="1280" height="960" loading="lazy" decoding="async" /></a><figcaption>Stretch-ceiling print / Installation photograph · View 2</figcaption></figure><figure><a href={asset('images/bus-wrap-mockup.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: Vehicle graphics / Bus-wrap mockup"><img src={asset('images/bus-wrap-mockup.webp')} alt="Vehicle graphics / Bus-wrap mockup" width="1280" height="635" loading="lazy" decoding="async" /></a><figcaption>Vehicle graphics / Bus-wrap mockup</figcaption></figure></div></article><article className="production-case " id="exhibition-stand"><div className="fox-subhead"><span>FOXART & ALEXPLAST / 3D</span><h4>An exhibition space in 3D.</h4><p>A 3D visualization of a branded exhibition booth, presenting signage, lighting, furniture and product display areas.</p></div><div className="production-gallery"><figure><a href={asset('images/foxart-exhibition-3d.webp')} target="_blank" rel="noopener noreferrer" aria-label="View full size: FOXART & ALEXPLAST / Exhibition booth · 3D visualization"><img src={asset('images/foxart-exhibition-3d.webp')} alt="FOXART & ALEXPLAST / Exhibition booth · 3D visualization" width="1920" height="1080" loading="lazy" decoding="async" /></a><figcaption>FOXART & ALEXPLAST / Exhibition booth · 3D visualization</figcaption></figure></div></article></section>

      <section className="motion-section" id="motion">
        <div className="motion-heading">
          <div><span className="motion-eyebrow">03 / MOTION & 3D</span><h2>Made to<br/><em>move.</em></h2></div>
          <p>Product visualization, technical 3D animation and motion-led brand communication. Selected commercial work showing objects, materials and mechanisms in motion.</p>
        </div>
        <div className="motion-grid">
          {[
            {src:'motion-magnetic-track.mp4',title:'Solo curtain track',kind:'Technical 3D animation',note:'Solo curtain track installation and assembly visualization'},
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

      <section className="about-section about-editorial" id="about">
        <div className="about-editorial-layout">
          <figure className="about-editorial-hero">
            <img src={asset('images/about-sunglasses.webp')} alt="Vadym outdoors in sunglasses" loading="lazy" />
            <div className="about-editorial-signature"><strong>Vadym</strong><span>UI · GRAPHIC · 3D · WEB</span></div>
            <figcaption><span>☕ <small>GOOD COFFEE</small></span><span>♫ <small>GUITAR & MUSIC</small></span><span>✧ <small>GAMES SOMETIMES</small></span></figcaption>
          </figure>
          <div className="about-editorial-content">
            <div className="about-editorial-intro">
              <div><span className="about-editorial-kicker">ABOUT ME</span><h2>Beyond<br/>the pixels<span>.</span></h2></div>
              <div className="about-editorial-bio"><p>I'm Vadym — a multidisciplinary designer working across graphic design, 3D and front-end development. I enjoy turning complex ideas into clear, functional visuals and building things that work as well as they look.</p><p>In my free time I play guitar, explore films and games, experiment with 3D and always try to learn something new.</p></div>
            </div>
            <div className="about-editorial-tools">
              <span><img src={asset('images/tool-illustrator.webp')} alt=""/>Illustrator</span>
              <span><img src={asset('images/tool-photoshop.webp')} alt=""/>Photoshop</span>
              <span><img src={asset('images/tool-blender.webp')} alt=""/>Blender</span>
              <span><Code2 size={24}/>Front-end</span>
            </div>
            <div className="about-editorial-mosaic">
              <figure className="about-tile about-tile-tall"><img src={asset('images/about-guitar.webp')} alt="Vadym playing guitar" loading="lazy"/><figcaption><b>MUSIC</b><span>Always with me</span></figcaption></figure>
              <figure className="about-tile"><img src={asset('images/about-candid.webp')} alt="Candid moment" loading="lazy"/><figcaption><b>IDEAS</b><span>Everywhere</span></figcaption></figure>
              <figure className="about-tile"><img src={asset('images/about-redlight.webp')} alt="Vadym in warm cinematic lighting" loading="lazy"/><figcaption><b>OUTSIDE</b><span>Taking a break</span></figcaption></figure>
              <figure className="about-tile"><img src={asset('images/about-life-new.webp')} alt="Vadym at an event" loading="lazy"/><figcaption><b>LIFE</b><span>Good moments</span></figcaption></figure>
              <figure className="about-tile"><img src={asset('images/about-sometimes-new.webp')} alt="Playful personal portrait" loading="lazy"/><figcaption><b>SOMETIMES</b><span>Just me</span></figcaption></figure>
            </div>
            <div className="about-editorial-quote"><span>“</span><p>A mix of design, 3D, code and a lot of curiosity about the world around me.</p><small>SIMPLE THINGS<br/>MAKE A BIG DIFFERENCE.</small></div>
          </div>
        </div>
      </section>

      <footer>
        <div><span>Available for remote work</span><h2>Have a project<br />or a role in mind?</h2></div>
        <div className="footer-links"><a href="mailto:vaddimmura@gmail.com">vaddimmura@gmail.com <ArrowUpRight size={22} /></a><a href="https://www.instagram.com/vadimm.ko/" target="_blank" rel="noopener noreferrer"><Instagram size={19}/> Instagram <ArrowUpRight size={17}/></a></div>
        <p>Vadym Loiko © 2026</p>
      </footer>
    </main>
  );
}
