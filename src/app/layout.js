import "../app/assets/scss/tailwind.scss";
import "./assets/css/material.css";
import Head from "next/head";
import {
  Nunito,
  Work_Sans,
  EB_Garamond,
  Kaushan_Script,
  Alex_Brush,
} from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400"],
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  weight: ["400"],
  display: "swap",
});

const alex = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex",
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Worksbyte - Build Smarter & Deploy Faster",
  description:
    "Worksbyte lets you transform ideas into powerful Enterprise applications that adapt to your business needs. Enhance your workflows and elevate employee productivity. Worksbyte enables you to effortlessly create apps that match the fast-paced growth of your business no coding required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <Head>
        <link rel="canonical" href="https://www.worksbyte.com/" />
        <meta
          property="og:title"
          content="Worksbyte - Build Smarter, Deploy Faster"
        />
        <meta
          property="og:description"
          content="Worksbyte lets you transform ideas into powerful Enterprise applications that adapt to your business needs. Enhance your workflows and elevate employee productivity. Worksbyte enables you to effortlessly create apps that match the fast-paced growth of your business no coding required."
        />
        <meta
          property="og:image"
          content="https://www.worksbyte.com/_next/image?url=%2Fimages%2Fsaas%2Fclassic02.png&w=1920&q=75"
        />
        <meta property="og:url" content="https://www.worksbyte.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <body
        className={`${nunito.variable} ${work_sans.variable} ${eb_garamond.variable} ${kaushan.variable} ${alex.variable} font-nunito text-base text-black dark:text-white dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
