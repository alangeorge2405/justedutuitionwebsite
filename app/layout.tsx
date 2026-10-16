import type { Metadata } from 'next';
import { Header, Footer, Motion } from '../components/site';
import './globals.css';
import Intro from '../components/intro';
export const metadata: Metadata = { icons: { icon: "/images/justedu-logo.jpg", apple: "/images/justedu-logo.jpg" }, title: { default: 'JustEdu — Learning, made personal.', template: '%s | JustEdu' }, description: 'One-to-one tuition for Classes 1–12. CBSE, ICSE and State syllabus. Learn online worldwide or at home in Kochi and Trivandrum.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Intro/><Header/><main id="main">{children}</main><Footer/><Motion/></body></html>; }
