import { Inter as FontSans } from 'next/font/google';
import { cn } from './lib/utils';
import { Mode } from './components/Mode';
import { getSetting } from './lib/api';
import Header from './components/Header';
import Script from 'next/script';
import '@/global.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export async function generateMetadata() {
  const site = await getSetting();
  return {
    title: site.title,
    description: site.description,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-slate-100 font-sans antialiased dark:bg-slate-950',
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
