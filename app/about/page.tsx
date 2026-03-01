import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-normal text-foreground tracking-tight">
                About Haven Technologies
              </h1>
              <p className="text-lg text-muted-foreground">
                Leading provider of innovative water treatment solutions for industrial applications worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-normal text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide reliable, efficient water treatment systems and components that help industries meet the highest standards of water quality and sustainability.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-normal text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the trusted partner for water treatment innovation, delivering solutions that improve operational efficiency and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-16">
              <h2 className="text-3xl font-normal text-foreground">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Reliability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our products and services are built on proven technology and rigorous testing standards.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Continuous improvement and adoption of latest technologies to serve our customers better.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Sustainability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Committed to environmental responsibility in all our operations and solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-16">
              <h2 className="text-3xl font-normal text-foreground">By The Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-2">
                  <div className="text-4xl font-light text-primary">500+</div>
                  <p className="text-muted-foreground">Installations Worldwide</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-light text-primary">30+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-light text-primary">99.8%</div>
                  <p className="text-muted-foreground">Uptime Performance</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-light text-primary">50+</div>
                  <p className="text-muted-foreground">Expert Engineers</p>
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
