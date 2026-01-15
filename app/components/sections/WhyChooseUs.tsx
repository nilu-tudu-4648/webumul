'use client';

const features = [
  { title: 'Startup DNA', description: 'We understand lean budgets, fast pivots, and the need for speed.', icon: '🚀' },
  { title: 'AI-Native', description: 'Cutting-edge AI integration from day one, not an afterthought.', icon: '🧠' },
  { title: 'Clean Code', description: 'Maintainable, well-documented code your future team will love.', icon: '✨' },
  { title: 'Fast Delivery', description: 'MVP in weeks, not months. Speed without compromising quality.', icon: '⚡' },
  { title: 'True Partners', description: 'We grow with you—from seed to Series A and beyond.', icon: '🤝' },
  { title: 'Transparent', description: 'Clear pricing, honest timelines, no surprises.', icon: '💎' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 text-indigo-300 mb-6">
              Why Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Your trusted <span className="gradient-text">tech partner</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              We&apos;re not just developers—we&apos;re startup enthusiasts who understand 
              what it takes to build successful products.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-4xl font-bold gradient-text mb-1">100%</div>
                <div className="text-sm text-zinc-500">Project Success Rate</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-4xl font-bold gradient-text mb-1">2 Weeks</div>
                <div className="text-sm text-zinc-500">Average MVP Time</div>
              </div>
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`
                  p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300
                  ${index === 0 ? 'col-span-2' : ''}
                `}
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
