import { Inter } from "next/font/google";
import "./globals.css";
// import { ClerkProvider } from '@clerk/nextjs'
import ImageGeneration from "./global-state/ImageGeneration";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pendora AI Art",
  description: "Generate your imagination",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={inter.className}>
          <ImageGeneration>
            {children}
          </ImageGeneration>
        </body>
      </html>
   
  );
}
