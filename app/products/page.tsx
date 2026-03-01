import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { productsData } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products - RO Control Panels, Smart Dosers & Water Vending Machines',
  description:
    'Browse Haven Technologies products: RO control panels, contactor-based control panels, smart doser sensors, and water vending machines for industrial water treatment.',
  alternates: {
    canonical: 'https://haventechnologies.in/products',
  },
  openGraph: {
    title: 'Products - RO Control Panels, Smart Dosers & Water Vending Machines',
    description:
      'Browse Haven Technologies products: RO control panels, contactor-based control panels, smart doser sensors, and water vending machines for industrial water treatment.',
    url: 'https://haventechnologies.in/products',
  },
};

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-normal text-foreground tracking-tight text-balance">
                Products
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Complete range of water treatment components and systems for industrial applications.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productsData.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="relative w-full aspect-[16/10] bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.shortDescription}
                    </p>
                    {product.hasSubModels && (
                      <span className="inline-block mt-3 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {product.subModels?.length} Models Available
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-4">
                <h2 className="text-4xl font-normal text-foreground text-balance">Need Custom Engineering?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team can design custom integrated systems for your unique water treatment requirements.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
