'use client';
import { useState } from 'react';

export default function TeacherEnquiry() {
  const [mode, setMode] = useState('Online');
  const [url, setUrl] = useState('');
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      'Hello JustEdu! I would like to enquire about teaching opportunities.',
      `Name: ${data.get('name')}`, `Email: ${data.get('email')}`, `Phone: ${data.get('phone')}`,
      `Qualification: ${data.get('qualification')}`, `Teaching experience: ${data.get('experience')}`,
      `Subjects: ${data.get('subjects')}`, `Classes: ${data.get('classes')}`, `Syllabi: ${data.get('syllabi')}`,
      `Teaching mode: ${mode}`, ...(mode !== 'Online' ? [`Home tuition city: ${data.get('city')}`] : []),
      `Availability and time zone: ${data.get('availability')}`, `Introduction: ${data.get('intro') || 'Happy to discuss with your team.'}`,
    ].join('\n');
    setUrl(`https://wa.me/917025967738?text=${encodeURIComponent(text)}`);
  }
  return <form onSubmit={submit} onChange={() => setUrl('')}>
    <span className="eyebrow">YOUR TEACHING JOURNEY STARTS HERE</span>
    <div className="form-grid">
      <label className="full">Full name<input name="name" autoComplete="name" maxLength={100} required placeholder="Your name"/></label>
      <label>Email address<input type="email" name="email" autoComplete="email" maxLength={150} required placeholder="you@example.com"/></label>
      <label>Phone number<input type="tel" name="phone" autoComplete="tel" required pattern="[+0-9() .\-]{7,20}" title="Use 7–20 characters: digits, spaces, +, brackets or hyphens." placeholder="Include country code"/></label>
      <label className="full">Highest qualification<input name="qualification" required maxLength={150} placeholder="e.g. MSc Mathematics, BEd"/></label>
      <label className="full">Teaching experience<select name="experience" required defaultValue=""><option value="" disabled>Select experience</option><option>Starting my teaching career</option><option>Less than 1 year</option><option>1–3 years</option><option>3–5 years</option><option>5+ years</option></select></label>
      <label className="full">Subjects you teach<input name="subjects" required maxLength={200} placeholder="e.g. Mathematics, Physics"/></label>
      <label>Classes you teach<input name="classes" required maxLength={100} placeholder="e.g. Classes 6–10"/></label>
      <label>Syllabi you teach<input name="syllabi" required maxLength={100} placeholder="e.g. CBSE, ICSE, State"/></label>
      <label className="full">Preferred teaching mode<select name="mode" value={mode} onChange={event => setMode(event.target.value)}><option>Online</option><option>Home</option><option>Online and home</option></select></label>
      {mode !== 'Online' && <label className="full">Home tuition city<select name="city" required defaultValue=""><option value="" disabled>Select city</option><option>Kochi</option><option>Trivandrum</option><option>Kochi and Trivandrum</option></select></label>}
      <label className="full">Availability & time zone<input name="availability" required maxLength={200} placeholder="e.g. Weekdays 4–8 pm, India time"/></label>
      <label className="full">What do you love about teaching? <span>(optional)</span><textarea name="intro" rows={3} maxLength={1000} placeholder="Tell us a little about your approach…"/></label>
    </div>
    <label className="consent"><input type="checkbox" required/> <span>I’m happy to share these details with JustEdu via WhatsApp and be contacted about teaching opportunities.</span></label>
    <p className="form-note">Prepare your enquiry, then review and send it in WhatsApp. This website does not store your application. Our team will discuss fit and next steps with you.</p>
    <button className="button" type="submit">Prepare teaching enquiry <span>↗</span></button>
    {url && <div className="form-result" role="status"><strong>Your teaching enquiry is ready.</strong><p>Review and send your details in WhatsApp. Your enquiry has not been sent yet.</p><a className="text-link" href={url} target="_blank" rel="noreferrer">Review in WhatsApp ↗</a></div>}
  </form>;
}
