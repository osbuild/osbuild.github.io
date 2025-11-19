import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { execSync } from 'child_process';
import path from 'path';
import generateSubPages from './scripts/generateSubPages.js';

function getGitHash() {
  try {
    return execSync('git rev-parse HEAD').toString().trim();
  } catch (error) {
    console.error('Error getting Git hash:', error);
    return 'unknown';
  }
}

const gitHash = getGitHash();

const config: Config = {
  title: 'Image Builder',
  tagline: 'Building operating system artifacts',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://osbuild.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'osbuild', // Usually your GitHub org/user name.
  projectName: 'osbuild.github.io', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osbuild/osbuild.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Image Builder',
      logo: {
        alt: 'osbuild logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hosted',
          position: 'left',
          label: 'Hosted',
        },
        {
          type: 'docSidebar',
          sidebarId: 'onPremises',
          position: 'left',
          label: 'On Premises',
        },
        {
          type: 'docSidebar',
          sidebarId: 'bootc',
          position: 'left',
          label: 'Bootc',
        },
        {
          type: 'docSidebar',
          sidebarId: 'userguide',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developer',
          position: 'left',
          label: 'Developer Guide',
        },
        {
          href: 'https://github.com/osbuild/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/orgs/osbuild/discussions',
            },
            {
              label: 'Matrix',
              href: 'https://matrix.to/#/#image-builder:fedoraproject.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/osbuild/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Red Hat, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['toml'],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // See https://github.com/cmfcmf/docusaurus-search-local for option docs
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexBlog: true,
        indexPages: false,
        language: "en",
        style: undefined,
        maxSearchResults: 8,
      },
    ],
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      {
        redirects: [
          {
            from: '/docs/service/architecture',
            to: '/docs/hosted/architecture',
          },
        ],
      }
    ],
    function dynamicIndexPagesPlugin() {
      return {
        name: 'dynamic-index-pages',
        async loadContent() {
          const mainIndexPaths = [
            { path: path.parse(path.join(__dirname,  'docs/developer-guide/02-projects/index.md')),
              title: "Project Overview" },
            { path: path.parse(path.join(__dirname, 'docs/developer-guide/01-general/index.md')),
              title: "General Topics" },
          ];
          generateSubPages(mainIndexPaths);
        },
      };
    },
  ],
};

if (gitHash !== 'unknown') {
  const moreSection = config.themeConfig.footer.links.find((section) => section.title === 'More');

  if (moreSection) {
    moreSection.items.push({
      label: 'Changelog',
      href: `https://github.com/osbuild/osbuild.github.io/commits/${gitHash}`,
    });
  }
}

export default config;
