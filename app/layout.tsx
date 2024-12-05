import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ToasterComponent from '@/components/ToasterComponent';
import { Provider } from 'react-redux';
import Mystore from '@/Redux/store';
import ReduxProvider from '@/Provider/ReduxProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Meh Instroment store',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-slate-200  antialiased`}
        >
          <ToasterComponent />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
