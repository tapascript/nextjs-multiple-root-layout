import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marketing Page",
  description: "This is Marketing Page",
};

export default function RootLayout({ children }) {
  return <div className="w-full h-screen flex flex-col">{children}</div>;
}
