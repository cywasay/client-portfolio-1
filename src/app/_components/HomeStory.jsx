"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, BookOpen, Users, Compass, Plus, Minus } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import ResearchFeature from "@/components/ResearchFeature";
import { portfolioPhotos } from "@/lib/portfolio-photos";
import styles from "./HomeStory.module.css";

const principles = [
  { title: "See the person. Unlock the potential.", label: "Student first", text: "Learning begins with belonging. Every student brings a different story, a different strength, and a different way of seeing the world. My role is to make room for all of them.", detail: "Inclusive classrooms. Individual encouragement. Meaningful challenge.", image: "/edu-leader3.jpg", alt: "Neelam Nisar with a group of students" },
  { title: "Make curiosity part of the curriculum.", label: "Learning by doing", text: "The most memorable lessons invite students to question, experiment, and connect ideas to life beyond the classroom. Knowledge becomes powerful when students can put it to work.", detail: "Hands-on projects. Thoughtful questions. Real-world connections.", image: "/edu-leader2.jpg", alt: "Neelam Nisar discussing a student display at an outdoor event" },
  { title: "Build a culture that keeps learning.", label: "Lead together", text: "A strong school is a community of learners, including its teachers and leaders. Listening, sharing practice, and supporting one another make progress a shared responsibility.", detail: "Teacher mentorship. Open dialogue. A shared sense of purpose.", image: "/edu-leader6.jpg", alt: "Neelam Nisar facilitating a group workshop" },
];
const moments = [
  { ...portfolioPhotos.gratitudePresentation, image: portfolioPhotos.gratitudePresentation.src, title: "A moment of shared gratitude", tag: "Recognition & community" },
  { ...portfolioPhotos.roundtable, image: portfolioPhotos.roundtable.src, title: "A place for meaningful dialogue", tag: "Leadership in conversation" },
  { ...portfolioPhotos.studentRecognition, image: portfolioPhotos.studentRecognition.src, title: "Celebrating the next generation", tag: "Student recognition" },
];

function TextLink({ href, children }) {
  return <Link className={styles.textLink} href={href}>{children}<ArrowUpRight size={18} aria-hidden="true" /></Link>;
}

export default function HomeStory() {
  const storyRef = useRef(null);
  const momentTimerRef = useRef(null);
  const accordionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [moment, setMoment] = useState(0);
  const [isMomentChanging, setIsMomentChanging] = useState(false);
  const selected = principles[active];
  const photo = moments[moment];

  const changeMoment = (nextMoment) => {
    if (nextMoment === moment || isMomentChanging) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMoment(nextMoment);
      return;
    }

    setIsMomentChanging(true);
    window.clearTimeout(momentTimerRef.current);
    momentTimerRef.current = window.setTimeout(() => {
      setMoment(nextMoment);
      requestAnimationFrame(() => setIsMomentChanging(false));
    }, 190);
  };

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set();
    const targets = storyRef.current.querySelectorAll(
      `.${styles.aboutVisual}, .${styles.aboutCopy}, .${styles.leadershipTop}, .${styles.role}, .${styles.sectionHeading}, .${styles.accordion}, .${styles.principlePhoto}, .${styles.journal}, .${styles.connect} > h2, .${styles.contactButton}, .${styles.contactTopics}`,
    );
    const roleTargets = [...storyRef.current.querySelectorAll(`.${styles.role}`)];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (preference.matches || target.contains(document.activeElement)) return;
        const roleIndex = roleTargets.indexOf(target);
        const animation = target.animate(
          [{ opacity: 0, transform: "translateY(26px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 760, delay: roleIndex >= 0 ? roleIndex * 115 : 0, fill: "both", easing: "cubic-bezier(.2,.7,.2,1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
    targets.forEach((target) => observer.observe(target));
    const cancelMotion = () => { if (preference.matches) animations.forEach((animation) => animation.cancel()); };
    preference.addEventListener("change", cancelMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", cancelMotion);
    };
  }, []);

  useEffect(() => () => window.clearTimeout(momentTimerRef.current), []);

  useEffect(() => {
    // Reserve space for the longest panel at the current width, including enlarged text.
    const accordion = accordionRef.current;
    const reservePanelSpace = () => {
      const cards = [...accordion.querySelectorAll(`.${styles.principle}`)];
      const headers = cards.reduce((height, card) => height + card.querySelector("h3").offsetHeight, 0);
      const tallestPanel = Math.max(...cards.map(card => card.querySelector(`.${styles.principlePanel} > div`).scrollHeight));
      const link = accordion.querySelector(`.${styles.textLink}`);
      accordion.style.height = `${Math.ceil(headers + tallestPanel + cards.length * 12 + link.offsetHeight + 18)}px`;
    };
    reservePanelSpace();
    const observer = new ResizeObserver(reservePanelSpace);
    observer.observe(accordion);
    document.fonts.ready.then(reservePanelSpace);
    return () => observer.disconnect();
  }, []);

  return <div ref={storyRef} className={styles.story}>
    <nav className={styles.chapterNav} aria-label="Explore this page">
      <span>A LIFE IN EDUCATION</span>
      <a href="#about">01 <span>The educator</span></a>
      <a href="#approach">02 <span>The approach</span></a>
      <a href="#research">03 <span>The research</span></a>
      <a href="#moments">04 <span>The moments</span></a>
      <a href="#connect">05 <span>The conversation</span></a>
    </nav>

    <section id="about" className={`${styles.section} ${styles.about}`} aria-labelledby="about-heading">
      <div className={styles.aboutVisual}>
        <div className={styles.portrait}><Image src="/edu-leader1.jpg" alt="Neelam Nisar at her desk" fill loading="lazy" sizes="(max-width: 700px) 90vw, 42vw" /></div>
        <div className={styles.photoNote}><span>AT HEART, ALWAYS</span><strong>An educator.</strong><BookOpen size={28} strokeWidth={1} aria-hidden="true" /></div>
        <span className={styles.verticalNote}>NEELAM NISAR / A PERSONAL PORTRAIT</span>
      </div>
      <div className={styles.aboutCopy}>
        <p className={styles.eyebrow}>01 / THE EDUCATOR</p>
        <h2 id="about-heading">A school is more<br />than a place.<br /><em>It is a possibility.</em></h2>
        <p className={styles.lead}>And the people inside it make all the difference.</p>
        <p>My work sits at the meeting point of teaching, leadership, and community. Whether I am supporting a student, mentoring a teacher, or speaking about education, the purpose stays the same: helping people see what they can become.</p>
        <p>I believe in high expectations held with compassion. In classrooms that welcome questions. And in schools where every person feels seen.</p>
        <TextLink href="/about">Meet Neelam Nisar</TextLink>
        <div className={styles.signature}>Neelam Nisar<span>Principal. Educator. Lifelong learner.</span></div>
      </div>
    </section>

    <section className={styles.leadership} aria-labelledby="leadership-heading">
      <div className={styles.leadershipTop}>
        <p className={styles.eyebrow}>ONE PURPOSE. MANY WAYS TO SERVE.</p>
        <h2 id="leadership-heading">Leadership that reaches<br /><em>beyond the office.</em></h2>
        <p>From the everyday classroom to the wider conversation, education is a responsibility we share.</p>
      </div>
      <div className={styles.roles}>
        {[
          { icon: BookOpen, title: "The teacher", number: "01", text: "Making learning meaningful, personal, and full of possibility.", href: "/about", cta: "Explore my approach" },
          { icon: Compass, title: "The principal", number: "02", text: "Setting a clear direction and helping people grow into it together.", href: "/leadership-and-values", cta: "Discover my values" },
          { icon: Users, title: "The public voice", number: "03", text: "Bringing the needs of students and educators into the wider conversation.", href: "/gallery", cta: "See the moments" },
        ].map(({ icon: Icon, ...role }) => <Link href={role.href} className={styles.role} data-number={role.number} aria-label={`${role.title}: ${role.cta}`} key={role.number}>
          <div className={styles.roleTop}><Icon size={32} strokeWidth={1.2} aria-hidden="true" /><span>{role.number}</span></div>
          <h3>{role.title}</h3><p>{role.text}</p><span className={styles.roleLink}>{role.cta}<ArrowUpRight size={20} aria-hidden="true" /></span>
        </Link>)}
      </div>
    </section>

    <section id="approach" className={`${styles.section} ${styles.approach}`} aria-labelledby="approach-heading">
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / THE APPROACH</p><h2 id="approach-heading">Principles, put<br /><em>into practice.</em></h2></div><p>Good education starts with a belief.<br />Great education lives it, every day.</p></div>
      <div className={styles.principleGrid}>
        <div ref={accordionRef} className={styles.accordion}>
          {principles.map((item, index) => <div key={item.label} className={`${styles.principle} ${active === index ? styles.selected : ""}`}>
            <h3><button id={`principle-trigger-${index}`} onClick={() => setActive(index)} aria-expanded={active === index} aria-controls={`principle-panel-${index}`}><span>0{index + 1}</span>{item.label}{active === index ? <Minus size={20} /> : <Plus size={20} />}</button></h3>
            <div id={`principle-panel-${index}`} role="region" aria-labelledby={`principle-trigger-${index}`} aria-hidden={active !== index} className={`${styles.principlePanel} ${active === index ? styles.panelOpen : ""}`}><div><h4>{item.title}</h4><p>{item.text}</p><small>{item.detail}</small></div></div>
          </div>)}
          <TextLink href="/leadership-and-values">Explore all leadership values</TextLink>
        </div>
        <figure className={styles.principlePhoto}><Image key={selected.image} src={selected.image} alt={selected.alt} fill loading="lazy" sizes="(max-width: 700px) 90vw, 45vw" /><figcaption><span>IN PRACTICE</span>{selected.label}<span>0{active + 1} / 03</span></figcaption></figure>
      </div>
    </section>

    <ResearchFeature />

    <section id="moments" className={styles.moments} aria-labelledby="moments-heading">
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>04 / THE MOMENTS</p><h2 id="moments-heading">The work.<br /><em>The people. The purpose.</em></h2></div><TextLink href="/gallery">Visit the gallery</TextLink></div>
      <div className={`${styles.journal} ${isMomentChanging ? styles.journalChanging : ""}`}>
        <div className={styles.journalImage}>{/* Keep slides mounted so nearby photos load before a fade switches to them. */}{moments.map((item, index) => <Image key={item.image} src={item.image} alt={item.alt} aria-hidden={index !== moment} fill loading="lazy" style={{ objectPosition: item.position, opacity: index === moment ? 1 : 0 }} sizes="(max-width: 700px) 90vw, 58vw" />)}</div>
        <div className={styles.journalCaption} aria-live="polite"><span className={styles.eyebrow}>A PHOTO JOURNAL</span><span className={styles.bigNumber}>0{moment + 1}<small>/ 03</small></span><p className={styles.eyebrow}>{photo.tag}</p><div className={styles.journalTitles}><h3>{photo.title}</h3>{moments.map(item => <span key={item.title} className={styles.journalTitleGhost} aria-hidden="true">{item.title}</span>)}</div><p>A glimpse into the relationships and shared experiences at the heart of a life in education.</p>
          <div className={styles.controls}><button aria-label="Previous photo" onClick={() => changeMoment((moment + 2) % 3)}><ArrowLeft size={20} /></button><div className={styles.dots}>{moments.map((item, index) => <button key={item.title} aria-label={`Show photo: ${item.title}`} aria-pressed={moment === index} onClick={() => changeMoment(index)} />)}</div><button aria-label="Next photo" onClick={() => changeMoment((moment + 1) % 3)}><ArrowRight size={20} /></button></div>
        </div>
      </div>
    </section>

    <div className={styles.envelopeStage}>
      <section id="connect" className={styles.connect} aria-labelledby="connect-heading"><div className={styles.orbit} aria-hidden="true" /><p className={styles.eyebrow}>05 / THE CONVERSATION</p><h2 id="connect-heading">The next great idea<br />starts with <em>a conversation.</em></h2><p>For educational collaborations, speaking invitations,<br className={styles.desktopBreak} /> or a thoughtful exchange of ideas, let&apos;s connect.</p><Link className={styles.contactButton} href="/contact">Start a conversation<ArrowUpRight size={22} aria-hidden="true" /></Link><div className={styles.contactTopics}><span>Education</span><span>Leadership</span><span>Community</span></div><span className={styles.envelopeHint} aria-hidden="true">Keep scrolling <span>↓</span></span></section>
      <SiteFooter envelope />
    </div>
  </div>;
}
