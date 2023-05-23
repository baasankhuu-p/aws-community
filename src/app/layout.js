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
        <body className={inter.className} style={{ margin: 0, padding: 0 }}>
          {children}
        </body>
      </html>
    </UserStore>
  );
}
