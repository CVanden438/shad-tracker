import { ThemeProvider } from '@/components/themeProvider';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Health Tracker',
  description: 'App to track your health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} overflow-hidden`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
