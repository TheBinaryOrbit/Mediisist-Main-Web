import type { Metadata } from "next";
import { Roboto, Open_Sans , Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Header from "@/component/Header/header";
import Footer from "@/component/Footer/footer";


const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Mediisist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
