import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { productsData, getSubModelBySlug } from '@/lib/products';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; model: string }>;
}): Promise<Metadata> {
  const { slug, model } = await params;
  const product = productsData.find((p) => p.slug === slug);
  const subModel = getSubModelBySlug(slug, model);

  if (!product || !subModel) {
    return { title: 'Model Not Found' };
  }

  return {
    title: `${subModel.name} - ${product.name} | Haven Technologies`,
    description: subModel.description,
    alternates: {
      canonical: `https://haventechnologies.in/products/${slug}/${model}`,
    },
    openGraph: {
      title: `${subModel.name} - ${product.name} | Haven Technologies`,
      description: subModel.description,
      url: `https://haventechnologies.in/products/${slug}/${model}`,
      images: [
        {
          url: subModel.image,
          alt: subModel.name,
        },
      ],
    },
  };
}

export default async function SubModelDetail({
  params,
}: {
  params: Promise<{ slug: string; model: string }>;
}) {
  const { slug, model } = await params;
  const product = productsData.find((p) => p.slug === slug);
  const subModel = getSubModelBySlug(slug, model);

  if (!product || !subModel) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-24">
            <h1 className="text-3xl font-normal text-foreground mb-2">Model Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product model you are looking for does not exist.
            </p>
            <Link
              href={`/products/${slug}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity"
            >
              Back to {product?.name || 'Products'}
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
        {/* Breadcrumb */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/products" className="hover:text-foreground transition-colors">
                Products
              </Link>
              <span>/</span>
              <Link
                href={`/products/${product.slug}`}
                className="hover:text-foreground transition-colors"
              >
                {product.name}
              </Link>
              <span>/</span>
              <span className="text-foreground">{subModel.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero - Image Left, Details Right */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden sticky top-24">
                  <Image
                    src={subModel.image}
                    alt={subModel.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                </div>
              </div>

              {/* Details */}
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <span className="text-sm font-medium text-primary">{product.category}</span>
                  <h1 className="text-4xl lg:text-5xl font-normal text-foreground tracking-tight text-balance">
                    {subModel.name}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {subModel.description}
                  </p>
                </div>

                {/* Price */}
                <div className="border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="text-xl font-semibold text-foreground">{subModel.price}</p>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Key Features</h2>
                  <ul className="space-y-2">
                    {subModel.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Specifications</h2>
                  <div className="border border-border rounded-lg divide-y divide-border">
                    {Object.entries(subModel.specifications).map(([key, value], i) => (
                      <div key={i} className="flex items-start gap-4 px-4 py-3">
                        <span className="text-sm font-medium text-foreground w-40 flex-shrink-0">
                          {key}
                        </span>
                        <span className="text-sm text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Contact Us for Pricing
                  </Link>
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                  >
                    View Other Models
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
