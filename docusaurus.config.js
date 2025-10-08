// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gyoza Protocol Documentation",
  tagline: "The Future of DeFi",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.gyoza.finance",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NeriteOrg", // Usually your GitHub org/user name.
  projectName: "gyoza-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/NeriteOrg/gyoza-docs/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: [
  '@docusaurus/theme-mermaid',
  /** @type {[string, import("@easyops-cn/docusaurus-search-local").PluginOptions]} */
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      language: ["en"],
      searchBarShortcutKeymap: "ctrl+shift+f",
    },
  ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/gyoza-social-card.jpg",
      navbar: {
        title: "Gyoza",
        logo: {
          alt: "Gyoza Logo",
          src: "/img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "localeDropdown",
            position: "left",
          },
          {
            href: "https://github.com/NeriteOrg/gyoza-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "User Docs",
                to: "/docs/category/user-docs/",
              },
              {
                label: "Technical Documentation",
                to: "/docs/category/technical-documentation/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/Gyoza-Finance/Gyoza",
              },
              // {
              //   label: "Discord",
              //   href: "https://discord.gg/5h3avBYxcn",
              // },
              {
                label: "X",
                href: "https://x.com/GyozaFinance",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "DAO Dashboard",
                href: "https://app.aragon.org/#/daos/arbitrum/0x108f48e558078c8ef2eb428e0774d7ecd01f6b1d/dashboard",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gyoza Finance. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
