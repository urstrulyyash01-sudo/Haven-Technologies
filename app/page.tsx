import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Haven Technologies',
  url: 'https://haventechnologies.in',
  description:
    'Leading manufacturer of RO control panels, contactor-based control panels, smart doser sensors, and water vending machines in Hyderabad, India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shiva Sai Recidency, M J Colony Street No. 5, Moula-ali',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500040',
    addressCountry: 'IN',
  },
  telephone: '+919000702009',
  email: 'havantechnologies99@gmail.com',
  foundingDate: '2002',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '50+' },
  sameAs: [],
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-normal text-foreground tracking-tight">
                  Modern Control Panels and Water Treatment Solutions for Industries
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reliable, efficient water treatment systems and components engineered for industrial applications. From smart sensors to complete control solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded hover:bg-muted transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-normal text-foreground">Why Choose Haven</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Reliable Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Proven components and systems trusted by leading water treatment facilities worldwide.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Complete Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From individual sensors to integrated control panels - everything you need in one place.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Expert Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dedicated team ready to help with installation, training, and ongoing maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-normal text-foreground">Our Products</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: 'Smart Doser Sensor',
                    slug: 'smart-doser',
                    desc: 'Intelligent dosing control with real-time monitoring and automated adjustments.'
                  },
                  {
                    name: 'Water Vending Machine',
                    slug: 'water-vending',
                    desc: 'Complete vending solution with integrated treatment and dispensing system.'
                  },
                  {
                    name: 'RO Control Panels',
                    slug: 'ro-panels',
                    desc: 'Professional control systems for reverse osmosis water treatment plants.'
                  },
                  {
                    name: 'Contactor-Based Control Panels',
                    slug: 'contactor-panels',
                    desc: 'Robust electrical control panels for industrial equipment and pump management.'
                  },
                ].map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group border border-border rounded p-8 hover:border-primary hover:bg-muted transition-all"
                  >
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {product.desc}
                    </p>
                    <span className="text-primary text-sm font-medium">Learn more →</span>
                  </Link>
                ))}
              </div>
              <div className="pt-8">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-4">
                <h2 className="text-4xl font-normal text-foreground">Ready to Improve Your Water Treatment?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Contact our team today to discuss your specific needs and find the right solution.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
