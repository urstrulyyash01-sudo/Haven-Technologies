import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { productsData } from '@/lib/products';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-24">
            <h1 className="text-3xl font-normal text-foreground mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
            >
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-6 max-w-3xl">
              <div className="text-5xl">{product.icon}</div>
              <h1 className="text-5xl lg:text-6xl font-normal text-foreground tracking-tight">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-16">
              <h2 className="text-3xl font-normal text-foreground">Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {product.features.map((feature, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="text-lg font-medium text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-12">
              <h2 className="text-3xl font-normal text-foreground">Key Specifications</h2>
              <div className="space-y-8">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-32">
                      <h3 className="font-medium text-foreground">{spec.name}</h3>
                    </div>
                    <p className="text-muted-foreground flex-1">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-12">
              <h2 className="text-3xl font-normal text-foreground">Ideal Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.applications.map((app, i) => (
                  <div key={i} className="border border-border rounded p-6">
                    <p className="text-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-4">
                <h2 className="text-4xl font-normal text-foreground">Ready to Learn More?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Contact our team to discuss how {product.name} can benefit your operation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded hover:bg-muted transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
