import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import NavigationBar from "@/components/navigation/NavigationBar";
import { Suspense } from "react";
import { ProductContextProvider } from "@/hooks/productContext";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Catalogo",
  description: "Catalogo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={sora.className}>
        <NavigationBar />
        <ProductContextProvider>
          <Suspense>{children}</Suspense>
        </ProductContextProvider>
      </body>
    </html>
  );
}
