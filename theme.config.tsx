import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Analog Money Public Docs</span>,
  project: {
    link: "https://github.com/analog-money",
  },
  docsRepositoryBase: "https://github.com/analog-money/analog/tree/main/apps/docs-public",
  footer: {
    content: <span>Analog Money Documentation</span>,
  },
};

export default config;
