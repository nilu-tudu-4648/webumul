import { Metadata } from 'next';
import Image from 'next/image';
import { CTA } from '../components/sections';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Our portfolio of successful startup projects - MVPs, SaaS platforms, and AI solutions.',
};

const projects = [
  {
    title: 'Johar 11',
    category: 'Fantasy Sports App',
    description: 'Fantasy sports app for team building.',
    problem: 'Organizations struggled to engage teams and build camaraderie through traditional activities.',
    solution: 'Built an engaging fantasy sports platform that brings teams together through competitive gameplay and social interaction.',
    impact: ['Increased team engagement', 'Better team building', 'Enhanced collaboration'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    gradient: 'from-orange-500 to-amber-500',
    featured: true,
    image: '/assets/johar11.png',
  },
  {
    title: 'Gyan Sarovar Library',
    category: 'Library Management',
    description: 'A user-friendly app designed for seamless library management.',
    problem: 'Libraries needed a modern solution to manage books, members, and transactions efficiently.',
    solution: 'Developed a comprehensive library management system with intuitive interface for cataloging, borrowing, and tracking.',
    impact: ['Streamlined operations', 'Improved user experience', 'Better inventory management'],
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
    image: '/assets/gyansarovar.png',
  },
  {
    title: 'Hostel Easy',
    category: 'Hostel Management',
    description: 'A user-friendly app designed for seamless hostel management.',
    problem: 'Hostels faced challenges managing rooms, residents, payments, and maintenance efficiently.',
    solution: 'Created an all-in-one hostel management platform automating bookings, payments, and administrative tasks.',
    impact: ['Reduced manual work', 'Better occupancy tracking', 'Improved resident satisfaction'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-emerald-500 to-teal-500',
    featured: true,
    image: '/assets/hosteleasy.png',
  },
  {
    title: 'Sayas Cooperative',
    category: 'Cooperative Management',
    description: 'A comprehensive platform for cooperative society management.',
    problem: 'Cooperative societies needed efficient tools to manage members, finances, and operations.',
    solution: 'Built a complete cooperative management system with member tracking, financial management, and reporting features.',
    impact: ['Better member management', 'Streamlined finances', 'Improved transparency'],
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    gradient: 'from-violet-500 to-purple-500',
    featured: true,
    image: '/assets/sayas.png',
  },
  {
    title: 'LensCraft',
    category: 'Photography Portfolio',
    description: 'A user-friendly app designed for photography and portfolio.',
    problem: 'Photographers lacked an elegant platform to showcase their work and attract clients.',
    solution: 'Developed a beautiful portfolio platform with gallery management, client booking, and portfolio customization.',
    impact: ['Enhanced portfolio presentation', 'Increased client bookings', 'Professional image'],
    technologies: ['Next.js', 'Tailwind CSS', 'Cloudinary', 'TypeScript'],
    gradient: 'from-pink-500 to-rose-500',
    featured: true,
    image: '/assets/lenscraft.png',
  },
];

const featured = projects.filter(p => p.featured);

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="aurora-bg opacity-40" />
        <div className="absolute inset-0 grid-pattern" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag tag-gradient mb-6">Portfolio</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Products that <span className="gradient-text">deliver results</span>
            </h1>
            <p className="text-lg text-[var(--foreground-muted)]">
              From MVPs to enterprise platforms—see how we&apos;ve helped startups succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-lg">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="tag tag-gradient mb-6">Featured</span>
            <h2 className="text-4xl font-bold">Case Studies</h2>
          </div>
          
          <div className="space-y-20">
            {featured.map((project, index) => (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Visual */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-20 blur-3xl`} />
                  <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--background)] border border-[var(--border)]`}>
                    {project.image ? (
                      <div className="relative w-full h-full p-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} rounded-3xl p-8 flex items-center justify-center`}>
                        <div className="absolute inset-0 grid-pattern opacity-20 rounded-3xl" />
                        <div className="absolute inset-0 flex items-center justify-center text-center relative z-10">
                          <div>
                            <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                            <span className="text-white/60">{project.category}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <span className="tag tag-gradient mb-4">{project.category}</span>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-[var(--foreground-muted)] mb-6">{project.description}</p>
                  
                  {/* Problem/Solution */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <span className="text-xs font-bold text-red-400 uppercase">Problem</span>
                      <p className="text-sm mt-1">{project.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-xs font-bold text-emerald-400 uppercase">Solution</span>
                      <p className="text-sm mt-1">{project.solution}</p>
                    </div>
                  </div>
                  
                  {/* Impact */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.impact.map((item) => (
                      <span key={item} className="px-3 py-1.5 text-sm bg-[var(--primary)]/10 text-[#a5b4fc] rounded-lg">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-white/5 border border-[var(--border)] rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Projects' },
              { value: '$10M+', label: 'Value Delivered' },
              { value: '98%', label: 'Satisfaction' },
              { value: '15+', label: 'Industries' },
            ].map((stat) => (
              <div key={stat.label} className="bento-card p-6 text-center">
                <div className="stat-value mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--foreground-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
