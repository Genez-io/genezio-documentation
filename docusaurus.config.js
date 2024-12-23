// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Genezio Documentation",
  tagline: "Genezio Documentation",
  favicon: "img/favicon.ico",
  trailingSlash: true,
  // Set the production url of your site here
  url: "https://genezio.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "genezio", // Usually your GitHub org/user name.
  projectName: "genezio-documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },
  // plugins: [""],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        gtag: {
          trackingID: "G-VR905VXGKC"
        },
        googleTagManager: {
          containerId: "GTM-PP95P9BW"
        },
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.,
          include: ["**/*.md", "**/.*.md"] // Include dot files
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        }
      }
    ]
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true
      }
    },
    // Replace with your project's social card
    algolia: {
      // The application ID provided by Algolia
      appId: "01Z71RJVIP",

      // Public API key: it is safe to commit it
      apiKey: "00bf2437c8279d80ed7c991744fdb457",

      indexName: "genezio3",
      insights: true,

      contextualSearch: true
    },
    hotjar: {
      applicationId: "3329235"
    },
    image: "img/genezio.svg",
    navbar: {
      logo: {
        href: "https://genezio.com/",
        target: "_self",
        alt: "Genezio Logo",
        src: "img/Logo_Genezio_Black.svg",
        srcDark: "img/Logo_Genezio_White.svg"
      },
      items: [
        {
          to: "/",
          target: "_self",
          html: "<b>Docs</b>",
          position: "left",
          activeBaseRegex: "docs/(next|v8)",
          id: "docs-item"
        },
      ]
    },

    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      magicComments: [
        {
          className: "code-block-diff-add-line",
          line: "diff-add"
        },
        {
          className: "code-block-diff-remove-line",
          line: "diff-remove"
        },
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" }
        }
      ]
    }
  }
};

export default config;
