import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Btheone Movie",
  description: "Discover the Magic of Movies with Ankush Kumars Movie AppExperience cinema like never before with a sleek and immersive movie app crafted by Ankush Kumar. Built with Next.js and TypeScript, the app integrates the powerful TMDB API to bring you an extensive library of movies and TV shows. From detailed movie descriptions and trending titles to seamless search functionality, the app ensures every user finds their perfect watch.Featuring dynamic routing for over 400 titles and GSAP animations for smooth transitions, the app delivers both performance and aesthetics. Whether you are exploring genres, searching for specific titles, or diving into detailed synopses, this app is your ultimate movie companionDesigned with user experience in mind, it’s more than just a movie database it &apos;s your personal gateway to cinematic adventures.",
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
