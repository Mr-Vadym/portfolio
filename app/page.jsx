'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Braces,
  Check,
  Code2,
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
    title: 'Studio Landing',
    type: 'Комерційний сайт',
    image: 'images/project-studio.svg',
    description: 'Швидкий промо-сайт для digital studio з адаптивною сіткою, мікроанімаціями та формою заявки.',
    stack: ['HTML', 'CSS Grid', 'JavaScript'],
  },
  {
    title: 'Shop UI Kit',
    type: 'Інтерфейс магазину',
    image: 'images/project-shop.svg',
    description: 'Каталог, картки товарів, фільтри та кошик з чистою логікою на JS без зайвих залежностей.',
    stack: ['Flexbox', 'DOM API', 'LocalStorage'],
  },
  {
    title: 'Dashboard Lite',
    type: 'Веб-додаток',
    image: 'images/project-dashboard.svg',
    description: 'Адмін-панель для малого бізнесу з табами, графічними віджетами та продуманими станами UI.',
    stack: ['CSS Variables', 'Modules', 'Charts'],
  },
];

const skills = [
  'Семантичний HTML',
  'Адаптивна CSS-верстка',
  'JavaScript ES6+',
  'DOM-інтеракції',
  'Анімації та transitions',
  'Оптимізація Lighthouse',
  'Доступність WCAG',
  'Pixel-perfect верстка',
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(() => ['hero', 'services', 'work', 'contact'], []);

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
    ['contact', 'Контакти'],
  ];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="На головну">
          <span className="brand-mark"><Code2 size={18} /></span>
          <span>Dev Portfolio</span>
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
                src="images/profile-placeholder.png"
                alt="Портрет HTML CSS JS розробника"
              />
              <figcaption>
                <strong>Frontend Developer</strong>
                <span>HTML / CSS / JavaScript</span>
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
  focus: 'clean interfaces',
  ships: 'fast, responsive sites'
};`}</pre>
            </div>
            <div className="floating-chip chip-one"><Zap size={16} /> 98 Lighthouse</div>
            <div className="floating-chip chip-two"><Sparkles size={16} /> Micro-interactions</div>
          </div>
          <div className="hero-content">
            <p className="eyebrow"><Braces size={16} /> HTML CSS JS розробник</p>
            <h1>Створюю швидкі, адаптивні та виразні веб-інтерфейси</h1>
            <p className="hero-copy">
              Верстаю сучасні сайти й невеликі веб-додатки з уважністю до деталей,
              продуктивності, доступності та реальних бізнес-задач.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">
                Переглянути роботи
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-button" href="#contact">Обговорити проєкт</a>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Ключові показники">
          <div><strong>24+</strong><span>готових сторінок</span></div>
          <div><strong>3 роки</strong><span>комерційного досвіду</span></div>
          <div><strong>100%</strong><span>responsive first</span></div>
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
              <p>Сторінки однаково впевнено виглядають на мобільних, планшетах і десктопах.</p>
            </article>
            <article>
              <Palette size={26} />
              <h3>UI деталізація</h3>
              <p>Працюю з відступами, типографікою, hover-станами, формами та точністю до макета.</p>
            </article>
            <article>
              <Rocket size={26} />
              <h3>Інтерактивність</h3>
              <p>Додаю меню, фільтри, модальні вікна, таби, слайдери та легкі сценарії на JavaScript.</p>
            </article>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <p className="eyebrow"><Sparkles size={16} /> Кейси</p>
            <h2>Проєкти з акцентом на швидкість і якість</h2>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
                <img className="project-image" src={project.image} alt={`Скрін проєкту ${project.title}`} />
                <div className="project-content">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.stack.map(tag => <small key={tag}>{tag}</small>)}
                  </div>
                </div>
              </article>
            ))}
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
            <h2>Є макет або ідея? Давайте зробимо її живою.</h2>
            <p>
              Напишіть коротко про задачу, дедлайн і бажаний формат співпраці.
              Я відповім із питаннями, оцінкою та наступними кроками.
            </p>
          </div>
          <div className="contact-panel">
            <a href="mailto:hello@example.com"><Mail size={20} /> hello@example.com</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Code2 size={20} /> GitHub</a>
            <a href="#hero"><ArrowUpRight size={20} /> Повернутися нагору</a>
          </div>
        </section>
      </main>
    </>
  );
}
