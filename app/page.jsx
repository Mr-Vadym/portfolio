'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Film,
  Image,
  Layers3,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  Rocket,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
const projects = [
  {
    title: 'Monblan Project',
    type: 'Profile feed interface',
    image: 'images/project-webspark.svg',
    description: 'Адаптивна сторінка профілю з feed-картками, фільтром дат, перемиканням grid/list і production-збіркою на Vite.',
    stack: ['Vite', 'SCSS', 'JavaScript', 'Flatpickr'],
    highlights: [
      'семантична HTML-структура та responsive layout',
      'динамічний рендер постів з окремого data-модуля',
      'кастомізований datepicker і перемикач вигляду стрічки',
    ],
    demoUrl: 'https://mr-vadym.github.io/webspark-test/',
    repoUrl: 'https://github.com/Mr-Vadym/webspark-test',
  },
  {
    title: 'Inweb Media Layout',
    type: 'Multi-page blog layout',
    image: 'images/project-inweb.svg',
    description: 'Багатосторінкова верстка медіа/блогу з головною, категоріями, сторінкою статті, автором, пошуком і мобільним меню.',
    stack: ['Gulp', 'SCSS', 'jQuery', 'Slick slider'],
    highlights: [
      'модульні HTML-include шаблони для повторюваних блоків',
      'адаптивний header, sidebar, search overlay і навігація',
      'збірка з оптимізацією стилів, скриптів, шрифтів і зображень',
    ],
    demoUrl: 'https://mr-vadym.github.io/inweb/',
    repoUrl: 'https://github.com/Mr-Vadym/inweb',
  },
];

const designCases = [
  {
    title: 'FOXART brochure',
    type: 'Поліграфія / презентаційний макет',
    image: 'images/case-brochure.jpg',
    description: 'Буклет для натяжних стель: структура сторінок, підбір візуалів, палітра матеріалів і підготовка макета до друку.',
    stack: ['Illustrator', 'Photoshop', 'Print', 'PDF'],
  },
  {
    title: 'Nails price design',
    type: 'Digital / прайс / візуальна айдентика',
    image: 'images/case-nails.jpg',
    description: 'Прайс для nail-майстра з виразною кольоровою подачею, великими заголовками й місцем під контакти та QR-код.',
    stack: ['Photoshop', 'Typography', 'Social', 'Brand'],
  },
  {
    title: 'Curtain rail render',
    type: '3D / product visual',
    image: 'images/case-3d-render.jpg',
    description: '3D-візуалізація конструкції для пояснення форми, розмірів і варіантів виконання продукту.',
    stack: ['Blender', '3D render', 'Product', 'Motion'],
  },
];

const toolGroups = [
  {
    title: 'Frontend',
    tools: ['HTML5', 'CSS3', 'SCSS', 'BEM', 'JavaScript', 'jQuery', 'Vite', 'Gulp', 'Git'],
  },
  {
    title: 'Design',
    tools: ['Illustrator', 'Photoshop', 'Figma', 'CorelDRAW', 'After Effects', 'Premiere Pro', 'Blender'],
  },
  {
    title: 'Workflow',
    tools: ['GitHub Pages', 'WordPress', 'ChatGPT', 'Claude', 'AI images'],
  },
];

const skills = [
  'Семантичний HTML',
  'Адаптивна CSS-верстка',
  'JavaScript ES6+',
  'Vite',
  'Gulp',
  'SCSS',
  'jQuery',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Figma',
  'Blender',
  'After Effects',
  'DOM-інтеракції',
  'GitHub Pages',
  'Підготовка до друку',
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(() => ['hero', 'services', 'work', 'design', 'tools', 'contact'], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    );

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const navItems = [
    ['hero', 'Головна'],
    ['services', 'Послуги'],
    ['work', 'Роботи'],
    ['design', 'Дизайн'],
    ['tools', 'Інструменти'],
    ['contact', 'Контакти'],
  ];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="На головну">
          <span className="brand-mark"><Code2 size={18} /></span>
          <span>Vadym Loiko</span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Основна навігація">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="mailto:hello@example.com">
          <Mail size={18} />
          <span>Написати</span>
        </a>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
          onClick={() => setMenuOpen(value => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-media">
            <figure className="portrait-card">
              <img
                src="images/profile-vadym.jpg"
                alt="Фото Вадима Лойка"
              />
              <figcaption>
                <strong>Markup Developer</strong>
                <span>HTML / CSS / JS + design</span>
              </figcaption>
            </figure>
            <div className="code-window">
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <pre>{`const developer = {
  craft: ['HTML', 'CSS', 'JS'],
  design: ['print', 'digital', '3D'],
  goal: 'make it work and look right'
};`}</pre>
            </div>
            <div className="floating-chip chip-one"><Zap size={16} /> HTML / SCSS / JS</div>
            <div className="floating-chip chip-two"><Sparkles size={16} /> Print + Digital</div>
          </div>
          <div className="hero-content">
            <p className="eyebrow"><Braces size={16} /> HTML CSS JS / Graphic Design</p>
            <h1>Верстаю адаптивні сайти на HTML, CSS і JavaScript</h1>
            <p className="hero-copy">
              Перетворюю макети на живі сторінки: чиста структура, акуратні стилі,
              responsive-поведінка і прості JS-інтеракції без зайвого шуму.
              Паралельно працюю з графікою для друку, web-банерами, 3D і motion.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">
                Web-кейси
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-button" href="#design">Дизайн-портфоліо</a>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Ключові показники">
          <div><strong>2022</strong><span>верстка в команді inWeb</span></div>
          <div><strong>2019</strong><span>дизайн і друк у FOXART</span></div>
          <div><strong>2 напрями</strong><span>frontend + graphic design</span></div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow"><Layers3 size={16} /> Що роблю</p>
            <h2>Від макета до живої сторінки</h2>
          </div>
          <div className="service-grid">
            <article>
              <MonitorSmartphone size={26} />
              <h3>Адаптивна верстка</h3>
              <p>Верстаю сторінки по Figma-макетах: desktop, tablet, mobile, hover/focus-стани й нормальна структура файлів.</p>
            </article>
            <article>
              <Palette size={26} />
              <h3>Дизайн для web і друку</h3>
              <p>Готую банери, поліграфію, брендовану продукцію, web-графіку та файли для друку або нанесення.</p>
            </article>
            <article>
              <Rocket size={26} />
              <h3>Рух і 3D</h3>
              <p>Додаю до портфоліо motion-креативи, прості відео, Blender-рендери й 3D-візуалізації.</p>
            </article>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <p className="eyebrow"><Sparkles size={16} /> Кейси</p>
            <h2>Web-проєкти, які вже можна відкрити</h2>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <img className="project-image" src={project.image} alt={`Скрін проєкту ${project.title}`} />
                <div className="project-content">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-points">
                    {project.highlights.map(item => (
                      <li key={item}><Check size={15} /> {item}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {project.stack.map(tag => <small key={tag}>{tag}</small>)}
                  </div>
                  <div className="project-actions">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Демо
                      <ArrowUpRight size={17} />
                    </a>
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      Код
                      <Code2 size={17} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section design-section" id="design">
          <div className="section-heading">
            <p className="eyebrow"><Palette size={16} /> Graphic & Digital Design</p>
            <h2>Графічний дизайн, digital-креативи та 3D</h2>
          </div>
          <div className="design-grid">
            {designCases.map(item => (
              <article className="design-card" key={item.title}>
                <img className="design-image" src={item.image} alt={`Прев'ю напряму ${item.title}`} />
                <div className="design-content">
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.stack.map(tag => <small key={tag}>{tag}</small>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section tools-section" id="tools">
          <div className="section-heading">
            <p className="eyebrow"><Image size={16} /> Інструменти</p>
            <h2>Програми й стек, з якими працюю</h2>
          </div>
          <div className="tools-grid">
            {toolGroups.map(group => (
              <article className="tool-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tool-badges">
                  {group.tools.map(tool => <span key={tool}>{tool}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="motion-note">
            <Film size={22} />
            <p>Motion reel, GIF-прев'ю або короткі відео з Blender / After Effects добре доповнять цей блок.</p>
          </div>
        </section>

        <section className="skills-band" aria-label="Технології">
          <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}><Check size={15} /> {skill}</span>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow"><Mail size={16} /> Контакти</p>
            <h2>Є макет, дизайн-задача або сайт, який треба доробити?</h2>
            <p>
              Напишіть коротко, що потрібно зробити: верстка, правки, банери,
              підготовка до друку, 3D або motion. Далі швидко розберемо задачу по суті.
            </p>
          </div>
          <div className="contact-panel">
            <a href="mailto:vaddimmura@gmail.com"><Mail size={20} /> vaddimmura@gmail.com</a>
            <a href="https://github.com/Mr-Vadym" target="_blank" rel="noreferrer"><Code2 size={20} /> GitHub</a>
            <a href="#hero"><ArrowUpRight size={20} /> Повернутися нагору</a>
          </div>
        </section>
      </main>
    </>
  );
}

