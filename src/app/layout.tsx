import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "app/services/provider";

export const metadata: Metadata = {
  title: "Database example",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <Providers>
        <div>{children}</div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
