import { html } from "cheerio/lib/api/manipulation";
import { children } from "cheerio/lib/api/traversing";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
