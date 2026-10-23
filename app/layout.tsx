import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Betty Hawk | Enterprise Strategy & Transformation",
 description: "Betty Hawk is an enterprise strategy and transformation leader focused on turning complexity into clear strategy and measurable results.",
 robots: { index: true, follow: true },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}
