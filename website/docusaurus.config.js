const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

const config = {
  title: "Bokeh Docusaurus Widgets",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  themeConfig: {
    navbar: {
      title: "Bokeh widgets",
      items: [
        {
          to: "docs/overview/widgets",
          position: "left",
          label: "Docs",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          path: "../docs/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

module.exports = config;
