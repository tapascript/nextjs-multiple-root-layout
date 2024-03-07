import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home Page",
  description: "This is Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
