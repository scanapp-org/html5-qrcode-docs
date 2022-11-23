// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ScanApp',
  tagline: 'Guide for html5-qrcode',
  url: 'https://scanapp.org/',
  baseUrl: '/html5-qrcode-docs/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://scanapp.org/assets/svg/log_sq-144.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scanapp-org', // Usually your GitHub org/user name.
  projectName: 'html5-qrcode-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ScanApp',
        logo: {
          alt: 'ScanApp Logo',
          src: 'https://scanapp.org/assets/svg/log_sq-144.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'API',
          },
          // {
          //   type: 'demo',
          //   docId: 'demo',
          //   position: 'left',
          //   label: 'Demo',
          // },
          // TODO: Move this to scanapp.
          {
            href: 'https://qrcode.minhazav.dev/',
            docId: 'demo',
            position: 'left',
            label: 'Demo',
          },
          {
            href: 'https://scanapp.org/blog/',
            docId: 'blog',
            position: 'left',
            label: 'Blog',
          },
          {
            href: 'https://github.com/mebjas/html5-qrcode',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              // TODO: Move this to scanapp.
              {
                href: 'https://qrcode.minhazav.dev/',
                docId: 'demo',
                position: 'left',
                label: 'Demo',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/html5-qrcode',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/minhazav',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://scanapp.org/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              // {
              //   label: 'Attributions',
              //   to: '/attributions',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScanApp.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
