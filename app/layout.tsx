import type { Metadata } from 'next';
import './globals.css';
import Logo from '@/components/ui/Logo';

export const metadata: Metadata = {
  title: 'RecruiterAI - Every Hire, Faster and Better',
  description: 'AI-powered recruiting software that automates resume screening, interview scheduling, and candidate engagement. Hire 10x faster with intelligent workflows.',
  keywords: 'AI recruiting, applicant tracking system, ATS, hiring automation, resume screening, interview scheduling',
  openGraph: {
    title: 'RecruiterAI - Every Hire, Faster and Better',
    description: 'Transform your hiring process with AI-powered automation. Join 500+ companies hiring smarter.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200/80">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 group transition-opacity hover:opacity-80">
              <Logo size="md" />
              <span className="text-lg font-semibold text-gray-900 tracking-tight">RecruiterAI</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Sign in
              </a>
              <button className="px-5 py-2.5 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-600 transition-all text-sm shadow-sm shadow-primary-500/20 hover:shadow-md hover:shadow-primary-500/25 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
                Start Free Trial
              </button>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 pt-20 pb-8 px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <a href="/" className="flex items-center gap-2.5 mb-5">
                  <div className="text-white">
                    <Logo size="md" />
                  </div>
                  <span className="text-lg font-semibold text-white tracking-tight">RecruiterAI</span>
                </a>
                <p className="text-sm leading-relaxed text-gray-500">
                  AI-powered recruiting software for modern teams. Hire smarter, faster.
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm">Product</h3>
                <ul className="space-y-3">
                  {['Features', 'Pricing', 'Integrations', 'API', 'Changelog'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
                <ul className="space-y-3">
                  {['About', 'Blog', 'Careers', 'Press', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-white font-semibold mb-4 text-sm">Legal</h3>
                <ul className="space-y-3">
                  {['Privacy Policy', 'Terms of Service', 'Security', 'GDPR'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2026 RecruiterAI. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {/* Social Links */}
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
