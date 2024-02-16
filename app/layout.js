import Script from 'next/script';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Mode } from '@/components/header/Mode';
import { getSetting } from '@/lib/api';
import '@/global.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export async function generateMetadata() {
  const site = await getSetting();
  return {
    title: site.seo_title,
    description: site.seo_description,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col bg-slate-100 font-sans antialiased dark:bg-slate-950',
          fontSans.variable,
        )}
      >
        <Mode
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </Mode>
        <Script id='nav' src='/js/nav.js' />
        <Script
          defer
          data-domain='seedx.seedwebs.com'
          src='https://stat.seedwebs.com/js/script.js'
        />
      </body>
    </html>
  );
}
