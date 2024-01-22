import { ToastContainer } from '@/components/Toast/ToastContainer';
import { Navigation } from '@/components/Navigation/Navigation';
import { ContextProvider } from '@/context/Context';
import { Footer } from '@/components/Footer/Footer';
import { Manrope } from 'next/font/google';
import type { Metadata } from 'next';
import '../stylesheets/globals.scss';

const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Audiophile E-commerce',
  description: 'Audiophile E-commerce Frontend Challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <ContextProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </ContextProvider>
      </body>
    </html>
  );
}
