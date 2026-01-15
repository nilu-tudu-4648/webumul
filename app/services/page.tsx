import { Metadata } from 'next';
import Link from 'next/link';
import { CTA } from '../components/sections';

export const metadata: Metadata = {
  title: 'Services - Best Website Development Company in Ranchi',
  description: 'Comprehensive web, mobile, and AI development services in Ranchi, Jharkhand. Best website development company offering professional services in Lalpur, Ranchi.',
  keywords: ['website development services ranchi', 'web development company ranchi', 'best services ranchi', 'website company ranchi jharkhand'],
};

const services = [
  {
    id: 'web',
    title: 'Web Applications',
    description: 'Modern, scalable web applications built with cutting-edge technologies.',
    features: ['Custom Web Apps', 'Progressive Web Apps', 'E-commerce', 'Admin Dashboards', 'API Development'],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description: 'Intelligent solutions powered by the latest AI technologies.',
    features: ['AI Chatbots', 'GPT Integration', 'Workflow Automation', 'Predictive Analytics'],
    technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'saas',
    title: 'SaaS Products',
    description: 'End-to-end SaaS development from ideation to scale.',
    features: ['Multi-tenant Architecture', 'Subscription Billing', 'Analytics Dashboard', 'White-label'],
    technologies: ['Next.js', 'Stripe', 'AWS', 'Prisma'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Beautiful interfaces designed for exceptional user experience.',
    features: ['User Research', 'Wireframing', 'Visual Design', 'Design Systems', 'Prototyping'],
    technologies: ['Figma', 'Framer', 'Storybook', 'Tailwind'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 'devops',
    title: 'DevOps & Scaling',
    description: 'Robust infrastructure for high-performance applications.',
    features: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Monitoring', 'Performance Optimization'],
    technologies: ['AWS', 'Vercel', 'Docker', 'Kubernetes'],
    gradient: 'from-amber-500 to-orange-500',
  },
];

const monthlyPlans = [
  {
    name: 'Starter',
    price: '999',
    duration: '/month',
    description: 'Perfect for early-stage startups with basic needs',
    features: [
      '40 Development Hours',
      'Bug Fixes & Maintenance',
      'Email Support',
      'Weekly Progress Reports',
      '1 Active Project',
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '2,499',
    duration: '/month',
    description: 'Ideal for growing startups with ongoing development',
    features: [
      '100 Development Hours',
      'Priority Bug Fixes',
      'Dedicated Slack Channel',
      'Daily Standups',
      '2 Active Projects',
      'UI/UX Design Included',
      'Code Reviews',
    ],
    highlight: true,
    cta: 'Most Popular',
  },
  {
    name: 'Scale',
    price: '4,999',
    duration: '/month',
    description: 'For established startups ready to scale rapidly',
    features: [
      'Unlimited Development Hours',
      '24/7 Priority Support',
      'Dedicated Team',
      'Daily Standups + Weekly Strategy',
      'Unlimited Projects',
      'Full UI/UX + Design System',
      'Architecture Consulting',
      'Performance Optimization',
    ],
    highlight: false,
    cta: 'Contact Us',
  },
];

const milestoneSteps = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Planning',
    percentage: '20%',
    duration: '1-2 Weeks',
    deliverables: [
      'Requirements Documentation',
      'Technical Architecture',
      'Project Timeline',
      'UI/UX Wireframes',
    ],
    payment: 'Due on project kickoff',
  },
  {
    phase: 'Phase 2',
    title: 'Design & Prototype',
    percentage: '20%',
    duration: '2-3 Weeks',
    deliverables: [
      'Complete UI Designs',
      'Interactive Prototype',
      'Design System',
      'Client Approval',
    ],
    payment: 'Due on design approval',
  },
  {
    phase: 'Phase 3',
    title: 'Development Sprint 1',
    percentage: '25%',
    duration: '3-4 Weeks',
    deliverables: [
      'Core Features Built',
      'Database Setup',
      'API Development',
      'Progress Demo',
    ],
    payment: 'Due on sprint completion',
  },
  {
    phase: 'Phase 4',
    title: 'Development Sprint 2',
    percentage: '25%',
    duration: '2-3 Weeks',
    deliverables: [
      'All Features Complete',
      'Third-party Integrations',
      'Testing & QA',
      'Bug Fixes',
    ],
    payment: 'Due on sprint completion',
  },
  {
    phase: 'Phase 5',
    title: 'Launch & Handover',
    percentage: '10%',
    duration: '1 Week',
    deliverables: [
      'Production Deployment',
      'Documentation',
      'Training Session',
      '30-Day Support',
    ],
    payment: 'Due on successful launch',
  },
];

const projectPackages = [
  {
    name: 'MVP Package',
    price: 'From ₹5,000',
    timeline: '4-6 Weeks',
    description: 'Launch your idea fast with a lean MVP',
    includes: [
      'Requirements Analysis',
      'UI/UX Design (5 Screens)',
      'Core Feature Development',
      'Basic Admin Panel',
      'Deployment & Launch',
      '30-Day Bug Support',
    ],
    ideal: 'Early-stage startups validating ideas',
  },
  {
    name: 'Full Product',
    price: 'From ₹15,000',
    timeline: '8-12 Weeks',
    description: 'Complete product ready for market',
    includes: [
      'Full Discovery Phase',
      'Complete UI/UX Design',
      'All Features Development',
      'Admin Dashboard',
      'API Documentation',
      'Performance Optimization',
      '90-Day Support & Maintenance',
    ],
    ideal: 'Funded startups building v1.0',
  },
  {
    name: 'Enterprise Solution',
    price: 'Custom Quote',
    timeline: '12+ Weeks',
    description: 'Complex, scalable enterprise applications',
    includes: [
      'In-depth Discovery & Strategy',
      'Custom Design System',
      'Complex Feature Development',
      'Multi-tenant Architecture',
      'Security Audit',
      'DevOps & CI/CD Setup',
      '12-Month Partnership',
    ],
    ideal: 'Series A+ companies',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="aurora-bg opacity-40" />
        <div className="absolute inset-0 grid-pattern" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 text-indigo-300 mb-6">
              Services
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              End-to-end <span className="gradient-text">development</span> services
            </h1>
            <p className="text-lg text-zinc-400">
              From ideation to launch and beyond—everything you need to build and scale. Best website development services in Ranchi, Jharkhand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div 
                key={service.id}
                id={service.id}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-xl font-bold">{service.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section Header */}
      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 border border-emerald-500/30 text-emerald-300 mb-6">
              Flexible Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Choose how you want to <span className="gradient-text">pay</span>
            </h2>
            <p className="text-lg text-zinc-400">
              Monthly EMI plans for ongoing partnerships or one-time project fees with milestone payments.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly EMI Plans */}
      <section id="monthly" className="py-16 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="container relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Monthly EMI Plans</h3>
              <p className="text-zinc-400">Predictable monthly costs for ongoing development & support</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {monthlyPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`
                  relative p-8 rounded-2xl transition-all duration-300
                  ${plan.highlight 
                    ? 'bg-gradient-to-b from-indigo-500/20 to-purple-500/10 border-2 border-indigo-500/50 scale-105' 
                    : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15]'
                  }
                `}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                
                <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                <p className="text-sm text-zinc-500 mb-4">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-sm text-zinc-500">₹</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-500">{plan.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className={`
                    block w-full py-3 text-center font-semibold rounded-full transition-all
                    ${plan.highlight 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25' 
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }
                  `}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-zinc-500 mt-8">
            All plans include: Code ownership • NDA • Weekly reports • Dedicated project manager
          </p>
        </div>
      </section>

      {/* One-Time Project Packages */}
      <section id="onetime" className="py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold">One-Time Project Packages</h3>
              <p className="text-zinc-400">Fixed price with milestone-based payments</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {projectPackages.map((pkg) => (
              <div 
                key={pkg.name}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-1">{pkg.name}</h4>
                <div className="text-3xl font-bold gradient-text mb-1">{pkg.price}</div>
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {pkg.timeline}
                </div>
                <p className="text-sm text-zinc-400 mb-6">{pkg.description}</p>
                
                <div className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-xs text-zinc-500">
                    <span className="text-zinc-400">Ideal for:</span> {pkg.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Milestone Payment Breakdown */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h4 className="text-2xl font-bold mb-2">Milestone-Based Payment Structure</h4>
              <p className="text-zinc-400">Pay as we deliver—no risk, complete transparency</p>
            </div>

            {/* Progress Bar */}
            <div className="relative mb-8">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 w-full" />
              </div>
              <div className="flex justify-between mt-2">
                {milestoneSteps.map((step, index) => (
                  <div key={step.phase} className="text-center" style={{ width: step.percentage }}>
                    <div className="text-xs text-zinc-500">{step.percentage}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestone Cards */}
            <div className="space-y-4">
              {milestoneSteps.map((step, index) => (
                <div 
                  key={step.phase}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Phase Info */}
                    <div className="flex items-center gap-4 lg:w-48 flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-lg font-bold gradient-text">{index + 1}</span>
                      </div>
                      <div>
                        <div className="text-xs text-indigo-400 font-semibold">{step.phase}</div>
                        <div className="font-semibold">{step.title}</div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((item) => (
                          <span key={item} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-zinc-400">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="lg:w-48 flex-shrink-0 lg:text-right">
                      <div className="text-2xl font-bold text-emerald-400">{step.percentage}</div>
                      <div className="text-xs text-zinc-500">{step.duration}</div>
                      <div className="text-xs text-zinc-600 mt-1">{step.payment}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
              <h5 className="font-semibold mb-4 text-center">Why Milestone Payments?</h5>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="font-medium mb-1">Zero Risk</div>
                  <div className="text-sm text-zinc-500">Pay only when satisfied with deliverables</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">👁️</div>
                  <div className="font-medium mb-1">Full Transparency</div>
                  <div className="text-sm text-zinc-500">Clear progress tracking at each phase</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-medium mb-1">Budget Control</div>
                  <div className="text-sm text-zinc-500">Spread payments across project timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-2">Which model is right for you?</h3>
              <p className="text-zinc-400">Compare our engagement options</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Monthly EMI</th>
                    <th className="text-center py-4 px-4 font-semibold">One-Time Project</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { feature: 'Best For', monthly: 'Ongoing development', onetime: 'Defined scope projects' },
                    { feature: 'Payment', monthly: 'Fixed monthly fee', onetime: 'Milestone-based' },
                    { feature: 'Flexibility', monthly: 'Add/change features anytime', onetime: 'Scope defined upfront' },
                    { feature: 'Team', monthly: 'Dedicated resources', onetime: 'Project-based allocation' },
                    { feature: 'Support', monthly: 'Included in plan', onetime: '30-90 day post-launch' },
                    { feature: 'Commitment', monthly: '3-month minimum', onetime: 'Per project' },
                    { feature: 'Ideal Stage', monthly: 'Post-launch growth', onetime: 'MVP or v1.0 launch' },
                  ].map((row, i) => (
                    <tr key={row.feature} className="border-b border-white/5">
                      <td className="py-4 px-4 text-zinc-400">{row.feature}</td>
                      <td className="py-4 px-4 text-center">{row.monthly}</td>
                      <td className="py-4 px-4 text-center">{row.onetime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-2">Payment FAQs</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { q: 'Can I switch from monthly to one-time?', a: 'Yes! You can start with a one-time project and switch to monthly EMI for ongoing development and maintenance.' },
                { q: 'What payment methods do you accept?', a: 'We accept bank transfers, credit cards, PayPal, and crypto. For Indian clients, UPI and NEFT are available.' },
                { q: 'Is there a refund policy?', a: 'For milestone payments, you only pay when satisfied with deliverables. Monthly plans can be cancelled with 30-day notice.' },
                { q: 'Do you offer custom pricing?', a: 'Absolutely! Contact us for enterprise deals, startup discounts, or custom payment schedules.' },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-zinc-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
