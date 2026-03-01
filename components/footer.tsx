import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg tracking-tight">HAVEN TECHNOLOGIES</h3>
            <p className="text-sm opacity-85">
              30+ years of industrial leadership in water treatment and control systems. Trusted by global enterprises.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Smart Doser', href: '/products/smart-doser' },
                { label: 'Water Conditioner', href: '/products/water-conditioner' },
                { label: 'Vending Machine', href: '/products/water-vending' },
                { label: 'RO Panels', href: '/products/ro-panels' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Work With Us</h4>
            <p className="text-sm opacity-85">
              Schedule an expert consultation for your water treatment needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-primary-foreground text-primary rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Now
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20"></div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-80">
          <p>&copy; {new Date().getFullYear()} Haven Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
