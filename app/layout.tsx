import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ModeToggle from "@/components/theme-switch";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ram | Personal Portfolio",
  description:
    "Parshuram Reddy Sudda is a full-stack developer with 4+ years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>

      <link rel="icon" href="/images/brand.png" sizes="any" />
<Script id="next"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-1GP5BB2Z9W`}>
            </Script>
            <Script id="next">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-1GP5BB2Z9W');`
                }
            </Script>
      </head>

      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
  
        <div className="fixed top-0 left-0 w-full h-full area bg-gradient-to-r from-blue-400 to-indigo-700 dark:bg-gray-900 ">
          <ul className="circles">
            {[...Array(15)].map((_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>

        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <SpeedInsights />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
