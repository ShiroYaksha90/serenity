import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Serenity",
  description: 'Tech Courses and Books',
  keywords: 'passive income, small bets, tech courses, tech books, tech tutorials'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto my-4">
        {children}
        </div>
      </body>
    </html>
  );
}
