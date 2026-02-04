import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withNextra({
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.BASE_PATH || "",
  env: {
    BASE_PATH: process.env.BASE_PATH || "",
  },
});
