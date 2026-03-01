import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { productsData } from '@/lib/products';
import type { Product } from '@/lib/products';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} - Haven Technologies`,
    description: product.description,
    alternates: {
      canonical: `https://haventechnologies.in/products/${slug}`,
    },
    openGraph: {
      title: `${product.name} - Haven Technologies`,
      description: product.description,
      url: `https://haventechnologies.in/products/${slug}`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-24">
            <h1 className="text-3xl font-normal text-foreground mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you are looking for does not exist.
            </p>
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

  // Products with sub-models show a model selection page
  if (product.hasSubModels && product.subModels) {
    return <SubModelsPage product={product} />;
  }

  // Single products show image left + details right
  return <SingleProductPage product={product} />;
}

function SingleProductPage({ product }: { product: Product }) {
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
              <span className="text-foreground">{product.name}</span>
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
                    src={product.image}
                    alt={product.name}
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
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="text-xl font-semibold text-foreground">{product.price}</p>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
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
                    {Object.entries(product.specifications).map(([key, value], i) => (
                      <div key={i} className="flex items-start gap-4 px-4 py-3">
                        <span className="text-sm font-medium text-foreground w-40 flex-shrink-0">
                          {key}
                        </span>
                        <span className="text-sm text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Applications</h2>
                  <ul className="space-y-2">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
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
                    href="/products"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                  >
                    View All Products
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

function SubModelsPage({ product }: { product: Product }) {
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
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="space-y-4 max-w-3xl">
              <span className="text-sm font-medium text-primary">{product.category}</span>
              <h1 className="text-4xl lg:text-5xl font-normal text-foreground tracking-tight text-balance">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </section>

        {/* Sub-Models Grid */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <h2 className="text-2xl font-medium text-foreground mb-10">
              Choose a Model
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.subModels?.map((model) => (
                <Link
                  key={model.slug}
                  href={`/products/${product.slug}/${model.slug}`}
                  className="group border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="relative w-full aspect-[4/3] bg-muted">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {model.description}
                    </p>
                    <span className="inline-block text-sm font-medium text-primary">
                      View Details
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-4">
                <h2 className="text-3xl font-normal text-foreground text-balance">
                  Not sure which model fits your needs?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Contact our team and we will help you choose the right {product.name} for your application.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
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
