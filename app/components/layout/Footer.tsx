import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services#web' },
    { name: 'Mobile Apps', href: '/services#mobile' },
    { name: 'AI Solutions', href: '/services#ai' },
    { name: 'SaaS Products', href: '/services#saas' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Case Studies', href: '/projects' },
    { name: 'Process', href: '/about#process' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/[0.06]">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="container relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-xl" />
                <div className="absolute inset-[2px] bg-[#09090b] rounded-[10px] flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">W</span>
                </div>
              </div>
              <span className="text-xl font-bold">Webumul</span>
            </Link>
            <p className="text-zinc-500 text-sm mb-4 max-w-xs">
              Building AI-powered digital products for modern startups. From MVP to enterprise.
            </p>
            <div className="text-zinc-500 text-sm mb-6 space-y-1">
              <p>📍 Lalpur, Ranchi, Jharkhand</p>
              <p>📱 +91 91551 86701</p>
              <p>📱 +91 70042 12602</p>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {['in', 'X', 'GH'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-500 hover:text-white text-sm font-medium transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-sm text-zinc-500 mb-4">
              Ready to build something amazing?
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Webumul. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <span>Made with</span>
            <span className="text-red-500">❤</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
