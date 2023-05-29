import { UserStore } from "./context/context";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AWS Community",
  description:
    "At this event, you can have dinner with influential Mongolian and foreign IT representatives. You'll also receive valuable guidance from respected experts, both local and international.",
};

export default function RootLayout({ children }) {
  return (
    <UserStore>
      <html lang="en">
        <meta property="og:url" content="https://2023.awsmongolia.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AWS Community" />
        <meta
          property="og:description"
          content="At this event, you can have dinner with influential Mongolian and foreign IT representatives. You'll also receive valuable guidance from respected experts, both local and international."
        />
        <meta
          property="og:image"
          content="https://2023.awsmongolia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faws_logo.0fe796af.png&w=640&q=75"
        />
        <body className={inter.className} style={{ margin: 0, padding: 0 }}>
          {children}
        </body>
      </html>
    </UserStore>
  );
}
