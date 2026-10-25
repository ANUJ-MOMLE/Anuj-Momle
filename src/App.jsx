import { useEffect, useState } from 'react';
import {
  profile,
  technicalSkills,
  otherSkills,
  projects,
  timeline,
  highlights,
} from './data.js';

const nav = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Work', 'projects'],
  ['Journey', 'journey'],
  ['Contact', 'contact'],
];

// Small inline SVGs keep the dev and production request graph free of an icon bundle.
const iconPaths = {
  ArrowDown: ['M12 5v14', 'm19 12-7 7-7-7'],
  ArrowRight: ['M5 12h14', 'm12 5 7 7-7 7'],
  ArrowUpRight: ['M7 17 17 7', 'M7 7h10v10'],
  Code2: ['m16 18 6-6-6-6', 'm8 6-6 6 6 6', 'm14 4-4 16'],
  Github: ['M9 19c-5 1.5-5-2.5-7-3', 'M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22'],
  Linkedin: ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z', 'M2 9h4v12H2z', 'M4 4h.01'],
  Mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', 'm22 6-10 7L2 6'],
  Menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  X: ['M18 6 6 18', 'M6 6l12 12'],
  Sparkles: ['m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z', 'm19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z'],
  GraduationCap: ['m2 10 10-5 10 5-10 5-10-5Z', 'M6 12v5c3.5 3 8.5 3 12 0v-5', 'M22 10v6'],
  Layers3: ['m12 2 9 5-9 5-9-5 9-5Z', 'm3 12 9 5 9-5', 'm3 17 9 5 9-5'],
  Send: ['m22 2-7 20-4-9-9-4 20-7Z', 'M22 2 11 13'],
};

function createIcon(name) {
  return function InlineIcon({ size = 24, strokeWidth = 2, ...props }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
        {iconPaths[name].map((d) => <path key={d} d={d} />)}
      </svg>
    );
  };
}

const ArrowDown = createIcon('ArrowDown');
const ArrowRight = createIcon('ArrowRight');
const ArrowUpRight = createIcon('ArrowUpRight');
const Code2 = createIcon('Code2');
const Github = createIcon('Github');
const Linkedin = createIcon('Linkedin');
const Mail = createIcon('Mail');
const Menu = createIcon('Menu');
const X = createIcon('X');
const Sparkles = createIcon('Sparkles');
const GraduationCap = createIcon('GraduationCap');
const Layers3 = createIcon('Layers3');
const Send = createIcon('Send');

// Reusable section wrappers and display helpers.
function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionTitle({ eyebrow, title, children }) {
  const buddy = eyebrow.includes('ABOUT')
    ? null
    : eyebrow.includes('TOOLKIT')
    ? ['skills', 'NEURAL OCTO']
    : eyebrow.includes('SELECTED')
      ? ['work', 'PIXEL DRONE']
      : eyebrow.includes('JOURNEY')
        ? ['journey', 'ROCKET-01']
        : ['profile', 'ASTRO BOT'];
  return (
    <div className={`section-title${buddy ? ' has-mascot' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
      {buddy && <TechBuddy variant={buddy[0]} label={buddy[1]} />}
    </div>
  );
}

// Lightweight vector companion used as a small animated accent in each section.
function TechBuddy({ variant, label }) {
  return (
    <div className={`tech-buddy ${variant}`} aria-hidden="true">
      <span className="buddy-orbit" />
      <span className="buddy-data data-one">01</span>
      <span className="buddy-data data-two">✦</span>
      {variant === 'hero-buddy' ? <svg className="buddy-figure buddy-prism" viewBox="0 0 120 148" fill="none">
        <ellipse cx="60" cy="126" rx="31" ry="6" fill="rgba(0,0,0,.45)"/>
        <g className="prism-core"><path d="m60 23 30 17v43l-30 18-30-18V40l30-17Z" fill="#211820" stroke="#ff6176" strokeWidth="2"/><path d="m60 23 8 40-8 38-30-18V40l30-17Z" fill="#381c26" stroke="#a94a5b"/><path d="m60 23 30 17-22 23-8-40Z" fill="#6b2635"/><path d="m68 63 22-23v43l-30 18 8-38Z" fill="#170f15" stroke="#ff6477"/><path d="m42 47 18-11 18 11v25L60 83 42 72V47Z" fill="#090b10" stroke="#ff8996"/><path d="m54 53-5 9 5 9m12-18 5 9-5 9m-8-7v5" stroke="#ff7787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g>
        <path d="M29 51 14 43m77 31 16 8M60 20V10" stroke="#ff8290" strokeWidth="1.5" strokeDasharray="3 4"/><circle cx="13" cy="42" r="3" fill="#ff6578"/><circle cx="108" cy="83" r="4" fill="#ff6578"/><circle cx="60" cy="8" r="3" fill="#ff9ca6"/>
        <path d="M25 102c7 10 18 16 35 16s28-6 35-16" stroke="#ff687b" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="3 5"/>
      </svg> : variant === 'skills' ? <svg className="buddy-figure buddy-octopus" viewBox="0 0 120 148" fill="none">
        <ellipse cx="60" cy="133" rx="34" ry="6" fill="rgba(0,0,0,.48)" />
        <g className="octo-tentacles" fill="none" stroke="#a84658" strokeWidth="5" strokeLinecap="round"><path d="M40 73c-13 5-21 15-17 26 3 7 12 5 11-2m6-20c-18 1-30 11-28 22 1 8 11 8 12 0m18-1c-11 10-15 20-8 27 5 5 13 0 10-6m36-46c13 5 21 15 17 26-3 7-12 5-11-2m-6-20c18 1 30 11 28 22-1 8-11 8-12 0m-18-1c11 10 15 20 8 27-5 5-13 0-10-6"/></g>
        <path d="M60 24c-18 0-31 14-31 32 0 14 8 25 20 30h22c12-5 20-16 20-30 0-18-13-32-31-32Z" fill="#241820" stroke="#ff5b72" strokeWidth="2"/>
        <path d="M38 51c0-12 9-21 22-21s22 9 22 21v8c0 11-9 19-22 19S38 70 38 59v-8Z" fill="#090b10" stroke="#7e3b4a"/>
        <g className="buddy-eyes"><ellipse cx="51" cy="53" rx="4" ry="6" fill="#ff6478"/><ellipse cx="69" cy="53" rx="4" ry="6" fill="#ff6478"/></g>
        <path d="M55 65h10m-5-40v-8" stroke="#ff9aa5" strokeWidth="2" strokeLinecap="round"/><circle cx="60" cy="14" r="4" fill="#ff6578"/>
        <circle cx="60" cy="91" r="8" fill="#121016" stroke="#ff5b72" strokeWidth="2"/><path d="m56 91 3 3 6-7" stroke="#ff9aa5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg> : variant === 'work' ? <svg className="buddy-figure buddy-drone" viewBox="0 0 120 148" fill="none">
        <ellipse cx="60" cy="123" rx="35" ry="6" fill="rgba(0,0,0,.45)"/>
        <g className="drone-prop"><path d="M24 58H7m14-5-10 10m10-10 10 10m65-5h17m-14-5 10 10m-10-10-10 10" stroke="#ff6376" strokeWidth="3" strokeLinecap="round"/><circle cx="21" cy="58" r="7" fill="#211820" stroke="#ff6376"/><circle cx="99" cy="58" r="7" fill="#211820" stroke="#ff6376"/></g>
        <path d="m35 61 25-14 25 14-7 37H42l-7-37Z" fill="#1b1920" stroke="#ff5c73" strokeWidth="2"/>
        <path d="M44 67h32v17H44z" rx="7" fill="#080a0f" stroke="#70404a"/>
        <g className="buddy-eyes"><circle cx="54" cy="75" r="3" fill="#ff687a"/><circle cx="66" cy="75" r="3" fill="#ff687a"/></g>
        <path d="M52 91h16m-8 7v10" stroke="#ff7b8a" strokeWidth="2" strokeLinecap="round"/><path d="M48 109h24" stroke="#a94959" strokeWidth="4" strokeLinecap="round"/>
        <path d="M60 46V31" stroke="#b64a5a" strokeWidth="3"/><circle cx="60" cy="27" r="5" fill="#ff536a"/>
      </svg> : variant === 'journey' ? <svg className="buddy-figure buddy-rocket" viewBox="0 0 120 148" fill="none">
        <ellipse cx="60" cy="132" rx="28" ry="6" fill="rgba(0,0,0,.45)"/>
        <g className="rocket-flame"><path d="M51 112c-1 12 4 17 9 22 5-6 10-11 9-22Z" fill="#ff725d"/><path d="M56 112c0 7 2 10 4 13 3-4 5-7 4-13Z" fill="#ffc071"/></g>
        <path d="M60 18c-14 12-22 32-22 53v32l22 13 22-13V71c0-21-8-41-22-53Z" fill="#201820" stroke="#ff6075" strokeWidth="2"/>
        <path d="M60 31c-9 10-14 25-14 39h28c0-14-5-29-14-39Z" fill="#0a0b10" stroke="#713b49"/>
        <circle cx="60" cy="57" r="9" fill="#1c1017" stroke="#ff667a" strokeWidth="2"/><circle cx="60" cy="57" r="4" fill="#ff6578"/><path d="M60 48v-5m-9 27h18" stroke="#ff9aa5" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="m38 78-16 24 16-4m44-20 16 24-16-4" fill="#19171d" stroke="#ff6075" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M51 85h18v13H51z" fill="#0b0b10" stroke="#9d4656"/><text x="60" y="94" textAnchor="middle" fill="#ff8795" fontSize="7" fontFamily="monospace">AM</text>
      </svg> : variant === 'contact-buddy' ? <svg className="buddy-figure buddy-fox" viewBox="0 0 120 148" fill="none">
        <ellipse cx="60" cy="132" rx="29" ry="6" fill="rgba(0,0,0,.4)"/>
        <path d="M79 91c20 1 28 12 18 24-7 9-17 7-18 0 10 3 14-4 9-8-5-4-12-2-16 2" fill="#1c1820" stroke="#ff6477" strokeWidth="3" strokeLinejoin="round"/>
        <path d="m35 47-12-22 27 9m35 13 12-22-27 9" fill="#1c1820" stroke="#ff6477" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M31 49c0-17 13-29 29-29s29 12 29 29v19c0 13-13 24-29 24S31 81 31 68V49Z" fill="#211921" stroke="#ff6176" strokeWidth="2"/>
        <path d="M39 52c0-10 9-18 21-18s21 8 21 18v9c0 9-9 16-21 16S39 70 39 61v-9Z" fill="#090b10" stroke="#773a48"/>
        <g className="buddy-eyes"><path d="M49 52c4-4 8-4 11 0-3 6-7 7-11 0Zm11 0c4-4 8-4 11 0-3 6-7 7-11 0Z" fill="#ff6c7e"/></g>
        <path d="m56 63 4 3 4-3m-4 3v4m-8 0 8 5 8-5" stroke="#ff9ba6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M43 94h34l10 24H33l10-24Z" fill="#18171e" stroke="#ff5e72" strokeWidth="2"/>
        <path d="M50 102h20v10H50z" rx="3" fill="#090b10" stroke="#8d4351"/><path d="m54 107 3 3 6-6" stroke="#ff8290" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 119v8m44-8v8" stroke="#ff6276" strokeWidth="4" strokeLinecap="round"/>
      </svg> : <svg className="buddy-figure buddy-robot" viewBox="0 0 120 148" fill="none">
        <ellipse cx="60" cy="137" rx="31" ry="6" fill="rgba(0,0,0,.48)" />
        <g className="buddy-antenna"><path d="M60 24V12" stroke="#ff7483" strokeWidth="3" strokeLinecap="round"/><circle cx="60" cy="8" r="5" fill="#ff4057"/><circle cx="60" cy="8" r="9" stroke="#ff4057" strokeOpacity=".35"/></g>
        <path d="M28 48c0-15 12-27 27-27h10c15 0 27 12 27 27v17H28V48Z" fill="#18171d" stroke="#ff6475" strokeWidth="2"/>
        <path d="M35 48c0-11 9-20 20-20h10c11 0 20 9 20 20v10H35V48Z" fill="#090a0f" stroke="#52414a"/>
        <g className="buddy-eyes"><rect x="45" y="41" width="9" height="9" rx="4.5" fill="#ff6578"/><rect x="66" y="41" width="9" height="9" rx="4.5" fill="#ff6578"/></g>
        <path d="M54 55h12" stroke="#ff9aa5" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 44h-5a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h5m64-22h5a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-5" fill="#15141a" stroke="#ff6475" strokeWidth="2"/>
        <path d="M38 66h44l8 18-7 39H37l-7-39 8-18Z" fill="#19181e" stroke="#ff536a" strokeWidth="2"/>
        <path d="m38 72-12 9-5 17m61-26 12 9 5 17" stroke="#9c4654" strokeWidth="6" strokeLinecap="round"/>
        <rect x="49" y="82" width="22" height="22" rx="5" fill="#0a0b10" stroke="#71303d"/>
        <path d="m55 87-4 5 4 5m10-10 4 5-4 5" stroke="#ff7786" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m48 124-4 8m28-8 4 8" stroke="#ff6577" strokeWidth="5" strokeLinecap="round"/>
        <path d="M40 132h-6m52 0h-6" stroke="#b34b59" strokeWidth="5" strokeLinecap="round"/>
      </svg>}
      <span className="buddy-label"><i />{label}</span>
    </div>
  );
}

function SkillLevel({ level }) {
  const match = level.match(/^(\d+%)(.*)$/);

  return match ? (
    <small>
      <strong>{match[1]}</strong>
      {match[2]}
    </small>
  ) : (
    <small>{level}</small>
  );
}

const tiltBoundsCache = new WeakMap();

function cacheTiltBounds(event) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  tiltBoundsCache.set(event.currentTarget, event.currentTarget.getBoundingClientRect());
}

function updateTilt(event) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const bounds = tiltBoundsCache.get(event.currentTarget);
  if (!bounds) return;
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  const strength = event.currentTarget.classList.contains('skill-chip') ? 3 : 7;
  event.currentTarget.style.setProperty('--tilt-x', `${y * -strength}deg`);
  event.currentTarget.style.setProperty('--tilt-y', `${x * strength}deg`);
}

function resetTilt(event) {
  tiltBoundsCache.delete(event.currentTarget);
  event.currentTarget.style.setProperty('--tilt-x', '0deg');
  event.currentTarget.style.setProperty('--tilt-y', '0deg');
}

export default function App() {
  const [open,setOpen] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { nodes.forEach(n=>n.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(e => { e.target.classList.toggle('is-visible', e.isIntersecting); }), {threshold:0.01, rootMargin:'18% 0px 18% 0px'});
    nodes.forEach(n=>observer.observe(n)); return ()=>observer.disconnect();
  },[]);
  // Keep a slim progress indicator in sync with the reader's position.
  useEffect(() => {
    let maxScroll = 1;
    const updateProgress = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
    };
    const measureScrollRange = () => {
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      updateProgress();
    };
    measureScrollRange();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', measureScrollRange);
    const sizeObserver = new ResizeObserver(measureScrollRange);
    sizeObserver.observe(document.body);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', measureScrollRange);
      sizeObserver.disconnect();
    };
  }, []);
  // Add pointer tilt to the content surfaces without affecting keyboard use.
  useEffect(() => {
    const surfaces = document.querySelectorAll('.tilt-surface:not(.hero-art):not(.project-card)');
    surfaces.forEach((surface) => {
      surface.addEventListener('pointerenter', cacheTiltBounds);
      surface.addEventListener('pointermove', updateTilt);
      surface.addEventListener('pointerleave', resetTilt);
    });
    return () => surfaces.forEach((surface) => {
      surface.removeEventListener('pointerenter', cacheTiltBounds);
      surface.removeEventListener('pointermove', updateTilt);
      surface.removeEventListener('pointerleave', resetTilt);
    });
  }, []);
  // Move the hero layers at different rates for a gentle parallax effect.
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const offset = reducedMotion.matches ? 0 : Math.min(window.scrollY, 700);
        document.documentElement.style.setProperty('--hero-parallax', `${offset * -0.1}px`);
        document.documentElement.style.setProperty('--glow-parallax', `${offset * -0.045}px`);
      });
    };
    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    reducedMotion.addEventListener?.('change', updateParallax);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateParallax);
      reducedMotion.removeEventListener?.('change', updateParallax);
    };
  }, []);
  const close = () => setOpen(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    {/* Header and mobile navigation */}
    <header className="topbar">
      <a href="#home" className="brand" aria-label={`${profile.name}, home`}><span className="brand-mark"><img src={`${import.meta.env.BASE_URL}images/am-logo.jpg`} alt="" /></span><span>{profile.name}</span></a>
      <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
      <nav className={open?'nav open':'nav'} aria-label="Main navigation">{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={close}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={close}>Let’s talk <ArrowUpRight size={15}/></a></nav>
    </header>
    <main id="main">
      {/* Hero introduction */}
      <section className="hero" id="home"><div className="hero-glow"/><div className="hero-copy"><p className="eyebrow">HELLO, I'M</p><h1>{profile.name}<span className="accent">.</span></h1><div className="rotating-tagline" aria-label="I'm a developer, a freelancer, and a designer"><span className="tagline-prefix">I'm a </span><span className="tagline-words"><span>Developer</span><span>Freelancer</span><span>Designer</span></span></div><h2>{profile.role}</h2><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowRight size={17}/></a><a className="button secondary" href={`mailto:${profile.email}`}>Get in touch <Mail size={17}/></a></div><div className="hero-links"><a href={profile.socials[0].url} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={profile.socials[1].url} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div></div>
        <div className="hero-art" onPointerEnter={cacheTiltBounds} onPointerMove={updateTilt} onPointerLeave={resetTilt} aria-label="Futuristic interface-inspired code illustration"><div className="hud-grid"/><div className="hud-ring"><span className="ring-node node-one"/><span className="ring-node node-two"/><span className="ring-node node-three"/></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb-core"><Code2 size={66} strokeWidth={1.2}/><span className="core-scan"/></div><div className="hud-label label-top">SYS / 01 <i/></div><div className="hud-label label-side">CREATIVE<br/>ENGINEERING</div><div className="float-card card-top"><span className="mini-dot"/> building with curiosity</div><div className="float-card card-bottom"><span className="code-bracket">{'< />'}</span><span>ideas → interfaces</span></div><div className="spark spark-a">✦</div><div className="spark spark-b">✧</div></div>
      <TechBuddy variant="hero-buddy" label="CORE / AM" />
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>
      {/* About and quick facts */}
      <section className="section about" id="about"><Reveal><SectionTitle eyebrow="A LITTLE ABOUT ME" title="Student, entrepreneur, and developer."/><div className="about-grid"><article className="about-card tilt-surface"><div className="icon-box"><Sparkles/></div><h3>Learning, building, and business</h3><p>I'm a third-year BCS and BCom student with interests across technology, jewellery retail, and real estate.</p><p className="muted">I’m the owner of AM ESTATES AND DEVELOPERS, and I manage my family jewellery business. In technology, I’m exploring frontend, backend, and full-stack development, app development, UI/UX, and software engineering.</p><div className="about-pills"><span>BCS · Third year</span><span>BCom · Third year</span><span>Udgir, India</span></div></article><aside className="quick-facts tilt-surface"><div><span>Currently</span><strong>BCS · Third year</strong></div><div><span>Also studying</span><strong>BCom · Third year</strong></div><div><span>Business</span><strong>Owner, AM ESTATES AND DEVELOPERS</strong></div><div><span>Based in</span><strong>{profile.location}</strong></div><div><span>Exploring</span><strong>Web &amp; App Development · UI/UX · Software Engineering</strong></div></aside></div></Reveal></section>
      {/* Technical and creative skills */}
      <section className="section skills-section" id="skills"><Reveal><SectionTitle eyebrow="MY TOOLKIT" title="Languages &amp; Skills" >From lines of code to bold visual ideas, these are the tools I’m exploring to bring concepts to life.</SectionTitle><div className="skill-group"><h3>Technical Skills <span className="group-count">{technicalSkills.length} tools</span></h3><div className="skills-grid compact-skills">{technicalSkills.map(s=><article className="skill-chip tilt-surface" key={s.name} tabIndex="0" aria-label={`${s.name}: ${s.level}`}><span className="chip-name">{s.name}</span><span className="skill-detail"><strong>{s.name}</strong><SkillLevel level={s.level}/><i aria-hidden="true"/></span></article>)}</div></div><div className="skill-group other-skill-group"><h3>Other Skills <span className="group-count">{otherSkills.length} tools</span></h3><div className="skills-grid compact-skills">{otherSkills.map(s=><article className="skill-chip tilt-surface" key={s.name} tabIndex="0" aria-label={`${s.name}: ${s.level}`}><span className="chip-name">{s.name}</span><span className="skill-detail"><strong>{s.name}</strong><SkillLevel level={s.level}/><i aria-hidden="true"/></span></article>)}</div></div></Reveal></section>
      {/* Selected projects */}
      <section className="section projects-section" id="projects"><Reveal><SectionTitle eyebrow="SELECTED WORK" title="Things I’ve made" >Projects and experiments from my learning and business journey.</SectionTitle><div className="projects-grid">{projects.map((p,i)=><article onPointerEnter={cacheTiltBounds} onPointerMove={updateTilt} onPointerLeave={resetTilt} className={`project-card project-${i+1}`} key={i}><div className="project-visual">{p.title==='Campus Connect using AI'?<div className="campus-preview" aria-label="Illustrative preview of the Campus Connect webpage"><div className="campus-top"><span className="campus-logo">CC<span>•</span></span><span>Campus Connect</span><span className="campus-avatar">AM</span></div><div className="campus-welcome"><small>YOUR CAMPUS, CONNECTED</small><strong>What’s happening<br/>around campus?</strong><div className="campus-search"><span>Ask Campus AI anything...</span><i>↗</i></div></div><div className="campus-cards"><div><i>✦</i><b>AI assistant</b><small>Get campus answers</small></div><div><i>◷</i><b>Campus events</b><small>See what’s coming</small></div></div></div>:<div className="visual-window"><div className="window-dots"><i/><i/><i/></div><div className="visual-lines"><b/><b/><b/><b/></div><span className="visual-symbol">{i===0?'✳':i===1?'◈':'⌘'}</span></div>}<span className="project-number">{p.number}</span></div><div className="project-info"><div className="project-heading"><h3>{p.title}</h3>{p.url && <a href={p.url} aria-label={`Open ${p.title}`} target="_blank" rel="noreferrer"><ArrowUpRight size={18}/></a>}</div><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></Reveal></section>
      {/* Education and experience timeline */}
      <section className="section journey-section" id="journey"><Reveal><SectionTitle eyebrow="THE JOURNEY" title="Learning, one step at a time"/><div className="timeline">{timeline.map((item,i)=><article className="timeline-item" key={i}><div className="timeline-marker"><GraduationCap size={18}/></div><div className="timeline-content tilt-surface"><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><p className="timeline-place">{item.place}</p><p>{item.detail}</p><span className="journey-index">0{i+1}</span></div></article>)}</div><div className="highlights">{highlights.map((h,i)=><div className="highlight tilt-surface" key={i}><Layers3 size={18}/><div><strong>{h.title}</strong><span>{h.detail}</span></div></div>)}</div></Reveal></section>
      {/* Contact call to action */}
      <section className="contact-section" id="contact"><Reveal><div className="contact-panel tilt-surface"><div className="contact-glow"/><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let’s make something<br/><span className="accent">meaningful.</span></h2><p>Have an opportunity, question, or idea to share? My inbox is open.</p><a className="button primary" href={`mailto:${profile.email}?subject=Hello%20Anuj`}>Say hello <Send size={16}/></a><div className="contact-bottom"><span><Mail size={15}/>{profile.email}</span><span>{profile.location}</span></div><div className="contact-socials" aria-label="Social profiles">{profile.socials.map(s=><a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}<ArrowUpRight size={13}/></a>)}</div></div></Reveal></section>
    </main>
    {/* Footer and social links */}
    <footer>
      <a href="#home" className="brand"><span className="brand-mark"><img src={`${import.meta.env.BASE_URL}images/am-logo.jpg`} alt="" /></span><span>{profile.name}</span></a><p>Copyright © {profile.name} | 2026 All rights reserved</p><div className="footer-socials">{profile.socials.map(s=><a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}<ArrowUpRight size={13}/></a>)}</div></footer>
  </>;
}


