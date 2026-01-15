import { Metadata } from 'next';
import { Hero, Services, Process, WhyChooseUs, AIFocus, CTA } from './components/sections';

export const metadata: Metadata = {
  title: 'Best Website Development Company in Ranchi, Jharkhand | Webumul',
  description: 'Best website development company in Ranchi, Jharkhand. Professional web, mobile, and AI solutions. Website companies with best services in Ranchi. Located in Lalpur, Ranchi. Call +91 91551 86701.',
  keywords: [
    'website companies with best services in ranchi',
    'best website development company ranchi',
    'website company ranchi',
    'web development services ranchi',
    'website services ranchi jharkhand',
    'best website company ranchi',
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <WhyChooseUs />
      <AIFocus />
      <CTA />
    </>
  );
}
