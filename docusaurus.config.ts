import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Diduenjoy API',
  tagline: 'Official Diduenjoy API Documentation',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://diduenjoy.github.io',
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Diduenjoy', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve docs at root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Diduenjoy API',
      logo: {
        alt: 'Diduenjoy Logo',
        src: 'img/logo_due.webp',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Sign Up for a Developer Key',
              href: '#',
            },
            {
              label: 'Diduenjoy Website',
              href: 'https://www.diduenjoy.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Diduenjoy.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['ruby', 'php', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
