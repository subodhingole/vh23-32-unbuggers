import React from "react";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Topbar from "../../components/shared/Topbar";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className="flex flex-row">
            <section className="main-container px-[4rem]">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
