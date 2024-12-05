import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Cookies from 'js-cookie';
import "./globals.css";

const Header = dynamic(() => import('./components/header'));
const Footer = dynamic(() => import('./components/footer'));
import { Inter } from 'next/font/google';

export const metadata = {
  title: "AI tạo video và hình ảnh",
  description: "Tạo video và hình ảnh bằng cách nhập lệnh để AI thực hiện.",
  openGraph: {
    title: "AI tạo video và hình ảnh",
    description: "Tạo video và hình ảnh bằng cách nhập lệnh để AI thực hiện.",
    url: "https://yourwebsite.com",
    image: "https://yourwebsite.com/path/to/image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI tạo video và hình ảnh",
    description: "Tạo video và hình ảnh bằng cách nhập lệnh để AI thực hiện.",
    image: "https://yourwebsite.com/path/to/image.jpg",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    android: "/android-icon.png",
  },
  canonical: "https://yourwebsite.com/your-page",
  locale: "vi-VN",
  authors: [
    { name: "Bùi Huy Vũ", url: "https://yourwebsite.com/about" },
  ],
};

const inter = Inter({
  subsets: ['latin'],  
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  display: 'swap',  
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkModeCookie = Cookies.get('darkMode');
  const initialDarkMode = darkModeCookie === 'true';
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:image" content={metadata.openGraph?.image} />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta name="twitter:card" content={metadata.twitter?.card} />
        <meta name="twitter:title" content={metadata.twitter?.title} />
        <meta name="twitter:description" content={metadata.twitter?.description} />
        <meta name="twitter:image" content={metadata.twitter?.image} />
        <link rel="canonical" href={metadata.canonical} />
        <link  rel="icon" href={metadata.icons.icon} type="image/x-icon" />
        <link rel="apple-touch-icon" href={metadata.icons.apple} sizes="180x180" />
        <link rel="icon" href={metadata.icons.android} sizes="192x192" type="image/png" />
      </Head>
      <body
        className={`${ inter.className }`}
      >

          <Header initialDarkMode={initialDarkMode} />
          {children}

          <Footer />

      </body>
    </html>
  );
}
