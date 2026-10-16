import Link from 'next/link';

export function HumanStory() {
  return <section className="human-story section" id="human">
    <div className="human-heading" data-reveal><span className="eyebrow">IN A WORLD OF ARTIFICIAL INTELLIGENCE</span><h2>Some connections<br/>can’t be <em>automated.</em></h2><p>We believe technology belongs in education. But the relationship with a real teacher belongs at its heart.</p></div>
    <div className="human-comparison" data-reveal>
      <div className="technology-panel"><span className="eyebrow">THE POWER OF TECHNOLOGY</span><div className="signal-art" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/></div><h3>AI can change<br/>how we work.</h3><p>Writing code. Creating campaigns. Finding information. New tools open new possibilities.</p><span className="panel-footnote">FASTER ANSWERS. MORE POSSIBILITIES.</span></div>
      <div className="teacher-panel"><span className="eyebrow">THE POWER OF A TEACHER</span><div className="human-art" aria-hidden="true">✳</div><h3>A real teacher can change<br/><em>how you see yourself.</em></h3><p>“Let’s try another way.”<br/>“Take your time.”<br/>“I knew you could do it.”</p><span className="panel-footnote">PERSONAL ATTENTION. LASTING CONFIDENCE.</span></div>
    </div>
    <div className="human-values">{[
      ['01', 'The pause that says more.', 'A teacher can notice when a student says “yes” but still feels unsure, and make space for another question.'],
      ['02', 'The explanation that clicks.', 'Different examples. A slower pace. A lesson that responds to the person, not just the question.'],
      ['03', 'The person in your corner.', 'Encouragement, accountability and someone to share those small, meaningful breakthroughs with.'],
    ].map(([n,title,text]) => <article key={n} data-reveal><span className="eyebrow">{n} / THE HUMAN DIFFERENCE</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    <p className="human-statement" data-reveal>AI can support the lesson.<br/><em>It doesn’t replace the relationship.</em></p>
  </section>;
}

export function TeacherInvite() {
  return <section className="teacher-invite section" data-reveal><div><span className="hiring-tag"><span className="dot"/> WE’RE LOOKING FOR TEACHERS</span><h2>Be the teacher<br/>they <em>remember.</em></h2><p>Know your subject. Care about the student. Bring your human touch to one-to-one learning at JustEdu.</p><Link className="button" href="/teach">Teach with JustEdu <span>↗</span></Link></div><div className="teacher-invite-note"><span aria-hidden="true">“</span><p>The best part of teaching?<br/>That moment they say,<br/><em>“Now I understand.”</em></p><div className="eyebrow">ONLINE WORLDWIDE · AT HOME IN KOCHI & TRIVANDRUM</div></div></section>;
}
