import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Contact Haven Technologies - Water Treatment Solutions Hyderabad',
  description:
    'Get in touch with Haven Technologies for RO control panels, water treatment solutions, and industrial control systems. Located in Moula-ali, Hyderabad, Telangana.',
  alternates: {
    canonical: 'https://haventechnologies.in/contact',
  },
  openGraph: {
    title: 'Contact Haven Technologies - Water Treatment Solutions Hyderabad',
    description:
      'Get in touch with Haven Technologies for RO control panels, water treatment solutions, and industrial control systems.',
    url: 'https://haventechnologies.in/contact',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-normal text-foreground tracking-tight">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Contact our team to discuss your water treatment requirements and find the right solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="w-full border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-normal text-foreground mb-8">Contact Information</h2>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:havantechnologies99@gmail.com" className="text-primary hover:underline">
                          havantechnologies99@gmail.com
                        </a>
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+1234567890" className="text-primary hover:underline">
                          +91 9000702009/ 8866310606
                        </a>
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Address</h3>
                      <p className="text-muted-foreground">
                        Shiva Sai Recidency,M J Colony Street No. 5<br />
                        Moula-ali, Hyderabad-040<br />
                        Telangana
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 3:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Form */}
              <div>
                <h2 className="text-2xl font-normal text-foreground mb-8">Send us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <iframe
                  src="https://forms.gle/vb4W3Ap2GYskQeMP8"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded border border-border"
                >
                  Loading...
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="space-y-12 max-w-3xl">
              <h2 className="text-3xl font-normal text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">What is your typical response time?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our phone line.
                  </p>
                </div>
                <div className="border-t border-border pt-8">
                  <h3 className="text-lg font-medium text-foreground mb-3">Do you offer installation services?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, our team provides professional installation services and on-site training for all products.
                  </p>
                </div>
                <div className="border-t border-border pt-8">
                  <h3 className="text-lg font-medium text-foreground mb-3">What warranty is provided?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All products come with a 2-year manufacturer's warranty. Extended warranty options are available.
                  </p>
                </div>
                <div className="border-t border-border pt-8">
                  <h3 className="text-lg font-medium text-foreground mb-3">Can you design custom solutions?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Absolutely. Our engineering team specializes in designing custom integrated systems for unique requirements.
                  </p>
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
