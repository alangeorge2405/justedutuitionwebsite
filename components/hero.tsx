'use client';
import Link from 'next/link';
import { useState } from 'react';
const slides = [
  { image: 'classroom.jpg', label: 'THE FUTURE OF LEARNING IS STILL HUMAN.', title: <>AI gives answers.<br/><em>Teachers see you.</em></>, text: 'Technology is changing how we learn. A real teacher makes it personal. One-to-one tuition, built around your child.' },
  { image: 'learning.jpg', label: 'MORE THAN AN ANSWER. A HUMAN CONNECTION.', title: <>A little guidance.<br/><em>A lasting impact.</em></>, text: 'Someone who notices the hesitation. Celebrates the small wins. And finds another way to explain, until it clicks.' },
  { image: 'study.jpg', label: 'ONE STUDENT. ONE TEACHER. ALL THE DIFFERENCE.', title: <>Modern learning.<br/><em>A human heart.</em></>, text: 'Personal tuition for Classes 1–12. Online worldwide, or at home in Kochi and Trivandrum.' },
];
export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  return <section className="hero human-hero">
    <div key={slide.image} className="hero-photo" style={{ backgroundImage: `url(/images/${slide.image})` }}/><div className="hero-shade"/>
    <div className="hero-content" key={active}><div className="eyebrow"><span className="dot"/>{slide.label}</div><h1>{slide.title}</h1><p>{slide.text}</p><div className="hero-actions"><Link className="button" href="/contact">Find your child’s teacher <span>↗</span></Link><Link className="hero-teacher-link" href="/teach">I’m a teacher ↗</Link></div></div>
    <div className="hero-bottom"><a href="#human">DISCOVER THE HUMAN DIFFERENCE <span>↓</span></a><div className="slide-controls"><button aria-label="Previous slide" onClick={() => setActive((active + 2) % 3)}>←</button><span>0{active + 1} <small>/ 03</small></span><button aria-label="Next slide" onClick={() => setActive((active + 1) % 3)}>→</button></div><span className="hero-note">POWERED BY PEOPLE.<br/>BUILT AROUND YOU.</span></div>
  </section>;
}
