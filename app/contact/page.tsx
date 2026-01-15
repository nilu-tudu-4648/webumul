import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Best Website Development Company in Ranchi',
  description: 'Get in touch with the best website development company in Ranchi, Jharkhand. Call us at +91 91551 86701 or +91 70042 12602. Located in Lalpur, Ranchi.',
  keywords: ['website development company ranchi', 'web development services ranchi', 'best website company ranchi', 'website services ranchi jharkhand'],
};

const contactInfo = [
  { title: 'Email', value: 'hello@webumul.in', icon: '✉️' },
  { title: 'Phone', value: '+91 91551 86701', icon: '📱' },
  { title: 'Phone', value: '+91 70042 12602', icon: '📱' },
  { title: 'Location', value: 'Lalpur, Ranchi, Jharkhand', icon: '📍' },
];

const faqs = [
  { q: 'How long does it take to build an MVP?', a: 'Typically 6-12 weeks depending on complexity. We follow agile sprints with weekly deliverables.' },
  { q: 'What is your pricing model?', a: 'We offer project-based, retainer, and time & materials models. We\'ll recommend the best fit.' },
  { q: 'Do you provide ongoing support?', a: 'Yes! We offer maintenance packages and many clients work with us post-launch.' },
  { q: 'Can you work with our team?', a: 'Absolutely. We integrate seamlessly with your workflows and tools.' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="aurora-bg opacity-40" />
        <div className="absolute inset-0 grid-pattern" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag tag-gradient mb-6">Contact</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Let&apos;s build your <span className="gradient-text">next big idea</span>
            </h1>
            <p className="text-lg text-[var(--foreground-muted)]">
              Ready to turn your vision into reality? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="section-lg">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="bento-card p-6 space-y-4">
                <h3 className="font-semibold mb-4">Contact Info</h3>
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-sm text-[var(--foreground-muted)]">{info.title}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response */}
              <div className="bento-card p-6 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 animated-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 bg-[var(--success)] rounded-full animate-pulse" />
                  <span className="font-semibold">Quick Response</span>
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  We typically respond within 24 hours. For urgent matters, call us directly.
                </p>
              </div>

              {/* Social */}
              <div className="bento-card p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['in', 'X', 'GH', 'IG'].map((s) => (
                    <a key={s} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-sm font-medium transition-all">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-lg relative">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="tag tag-gradient mb-6">FAQ</span>
            <h2 className="text-4xl font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bento-card p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--foreground-muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section">
        <div className="container">
          <div className="rounded-3xl h-80 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 flex items-center justify-center border border-[var(--border)]">
            <div className="text-center">
              <span className="text-4xl mb-4 block">📍</span>
              <h3 className="text-xl font-semibold">Lalpur, Ranchi, Jharkhand</h3>
              <p className="text-[var(--foreground-muted)]">Best website development services in Ranchi</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
