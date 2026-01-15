'use client';

const steps = [
  { number: '01', title: 'Discovery', description: 'Deep dive into your vision, market, and core problem.' },
  { number: '02', title: 'Design', description: 'Lean MVP design that validates your idea fast.' },
  { number: '03', title: 'Develop', description: 'Agile sprints with continuous feedback and iteration.' },
  { number: '04', title: 'Deploy', description: 'Launch with robust infrastructure and monitoring.' },
  { number: '05', title: 'Scale', description: 'Continuous optimization based on real user data.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 text-indigo-300 mb-6">
            Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            From idea to <span className="gradient-text">launch</span>
          </h2>
          <p className="text-lg text-zinc-400">
            A proven methodology that takes you from concept to scalable product.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Card */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 text-center h-full">
                  {/* Number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all" />
                    <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full bg-[#09090b] border border-white/10">
                    <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
