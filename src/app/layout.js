import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/header";


const inter = Inter({
  subsets: ["latin"],
  weight: "200",
  style: "normal",
});

export const metadata = {
  title: "Photography portfolio",
  description: "Photos portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
