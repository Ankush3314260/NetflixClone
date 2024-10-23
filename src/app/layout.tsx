import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netflix",
  description: "this is a netflix clone",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png" depending on your file
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        className={` antialiased `}
      >
       
        
        {children}
     
      </body>
    </html>
  );
}
