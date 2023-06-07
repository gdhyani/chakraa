import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chakraa",
    description: "Marketing Agency",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
