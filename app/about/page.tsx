import { Metadata } from 'next';
import { CTA } from '../components/sections';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Webumul - helping startups build AI-powered digital products.',
};

const values = [
  { title: 'Innovation', description: 'Cutting-edge solutions for every project.', icon: '💡' },
  { title: 'Quality', description: 'Excellence in code, design, and delivery.', icon: '✨' },
  { title: 'Transparency', description: 'Clear communication, honest timelines.', icon: '💎' },
  { title: 'Partnership', description: 'Your success is our success.', icon: '🤝' },
];

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { category: 'AI/ML', items: ['OpenAI', 'LangChain', 'TensorFlow', 'Pinecone'] },
  { category: 'Cloud', items: ['AWS', 'Vercel', 'Docker', 'Kubernetes'] },
];

const milestones = [
  { year: '2020', title: 'Founded', description: 'Started with a vision to help startups.' },
  { year: '2022', title: 'AI Focus', description: 'Pioneered AI integration in products.' },
  { year: '2024', title: '50+ Projects', description: 'Reached 50+ successful deliveries.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="aurora-bg opacity-40" />
        <div className="absolute inset-0 grid-pattern" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag tag-gradient mb-6">About Us</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Turning ideas into <span className="gradient-text">reality</span>
            </h1>
            <p className="text-lg text-[var(--foreground-muted)]">
              We&apos;re startup enthusiasts who build products that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bento-card p-10 animated-border">
              <span className="text-4xl mb-6 block">🚀</span>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-[var(--foreground-muted)]">
                To empower startups with world-class technology solutions that drive growth 
                and innovation. Every great idea deserves a chance to become reality.
              </p>
            </div>
            <div className="bento-card p-10">
              <span className="text-4xl mb-6 block">🔭</span>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-[var(--foreground-muted)]">
                To become the go-to technology partner for innovative startups worldwide, 
                making AI-powered software accessible to every business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-lg relative">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="tag tag-gradient mb-6">Values</span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              What we <span className="gradient-text">stand for</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="feature-card p-8 text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--foreground-muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="tag tag-gradient mb-6">Journey</span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Our <span className="gradient-text">story</span>
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]" />
              
              <div className="space-y-8">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="flex gap-6">
                    <div className="relative z-10 w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="bento-card p-6 flex-1">
                      <h3 className="font-semibold mb-1">{milestone.title}</h3>
                      <p className="text-sm text-[var(--foreground-muted)]">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="section-lg relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="tag tag-gradient mb-6">Stack</span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Technologies we <span className="gradient-text">master</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {techStack.map((stack) => (
              <div key={stack.category} className="bento-card p-6">
                <h3 className="font-semibold mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm bg-white/5 border border-[var(--border)] rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
