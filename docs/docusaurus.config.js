// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flipify',
  tagline: 'Simple, fast, and fun switch between hosting providers, third party integrations, and more.',
  url: 'https://flipify.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'flipify', // Usually your GitHub org/user name.
  projectName: 'flipify', // Usually your repo name.

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
            'https://github.com/flipify/flipify/edit/main/docs/',
        },
        blog: false,
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
        title: 'Flipify',
        logo: {
          alt: 'Flipify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://github.com/sponsors/flipify',
            label: 'Sponsor',
            position: 'left',
          },
          {
            href: 'https://swag.flipify.dev',
            label: 'Swag',
            position: 'left',
          },
          {
            href: 'https://github.com/flipify/flipify',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
          {
            href: 'https://twitter.com/flipifydev',
            className: 'header-twitter-link',
            'aria-label': 'Twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'How to',
            items: [
              {
                label: 'Getting started',
                to: 'docs/',
              },
              {
                label: 'Contributing',
                to: 'docs/contributing/started',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/flipify/flipify',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/flipifydev',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Sponsor',
                href: 'https://github.com/sponsors/flipify',
              },
              {
                label: 'Docusaurus',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        logo: {
          alt: 'Flipify Logo',
          src: '/img/flipify.svg',
          href: 'https://flipify.dev',
        },
        copyright: `Copyright © ${new Date().getFullYear()} <a href='https://github.com/sponsors/flipify' target='_blank'>Flipify Creators</a> and <a href='/docs/contributors'>contributors</a>.`,
      },
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
