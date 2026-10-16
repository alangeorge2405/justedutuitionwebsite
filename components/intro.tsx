'use client';

import { useEffect, useState } from 'react';

export default function Intro() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  function dismiss() {
    setVisible(false);
    try { sessionStorage.setItem('justedu-intro', 'seen'); } catch { /* Storage is optional. */ }
  }
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try { if (sessionStorage.getItem('justedu-intro')) return; } catch { /* Continue without storage. */ }
    setVisible(true);
    const next = setTimeout(() => setStep(1), 1300);
    const end = setTimeout(dismiss, 3200);
    return () => { clearTimeout(next); clearTimeout(end); };
  }, []);
  if (!visible) return null;
  return <div className="brand-intro" aria-label="JustEdu welcome animation">
    <div className="intro-orbit" aria-hidden="true">✳</div>
    <div className="intro-brand"><img src="/images/justedu-logo.jpg" alt="JustEdu" width={120} height={120}/><span>JustEdu</span></div>
    <span className="eyebrow">A HUMAN CONNECTION. A WORLD OF POSSIBILITY.</span>
    <p key={step}>{step === 0 ? <>AI is changing the world.</> : <>A teacher can change <em>your world.</em></>}</p>
    <div className="intro-progress" aria-hidden="true"><span /></div>
    <button className="intro-skip" onClick={dismiss}>Enter JustEdu ↗</button>
  </div>;
}
