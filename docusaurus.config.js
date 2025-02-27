// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IT3049C - Web Game Development",
  tagline: "Andrew Lively",
  url: "https://it-3049-c.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "IT3049C-Lively-FA23", // Usually your GitHub org/user name.
  projectName: "IT3049C", // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/IT3049C-Lively-FA23/IT3049C/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/IT3049C-Lively-FA23/IT3049C/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    "@docusaurus/theme-live-codeblock",
    [
      "content-docs",
      ({
        id: "syllabus",
        path: "content/syllabus",
        routeBasePath: "syllabus",
        editUrl: "https://github.com/IT3049C-Lively-FA23/IT3049C/tree/main/",
        editCurrentVersion: true,
        sidebarPath: require.resolve("./content/syllabus/sidebarsSyllabus.js"),
        remarkPlugins: [require("mdx-mermaid")],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      "content-docs",
      ({
        id: "labs",
        path: "content/coursework",
        routeBasePath: "coursework",
        editUrl: "https://github.com/IT4063C/IT4063C.github.io/tree/main/",
        editCurrentVersion: true,
        sidebarPath: require.resolve(
          "./content/coursework/sidebarsCoursework.js"
        ),
        remarkPlugins: [require("mdx-mermaid")],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#880000',
      //   textColor: '#ffffff',
      //   isCloseable: false,
      // },
      navbar: {
        title: "IT3049C - Lively",
        logo: {
          alt: "My Site Logo",
          src: "img/javascript.svg",
        },
        items: [
          {
            to: "/syllabus/info",
            label: "Syllabus",
          },
          {
            to: "/coursework",
            label: "Coursework",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/docs/course-notes",
            label: "Course Notes",
            position: "left",
          },
          // {
          //   href: 'https://ygilany-solution-access.herokuapp.com',
          //   label: 'Solutions Access',
          //   position: 'right',
          // },
          {
            href: "https://it3049c.github.io/students/",
            label: "Students",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Site map",
            items: [
              {
                label: "Syllabus",
                to: "/syllabus/info",
              },
              {
                label: "Coursework",
                to: "/coursework",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "⏰ Scheduler",
                href: "https://outlook.office365.com/owa/calendar/OfficeHours6@mailuc.onmicrosoft.com/bookings/",
              },
              {
                label: "✉️ Email",
                href: "mailto:livelyar@ucmail.uc.edu",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Solutions Access',
              //   href: 'https://ygilany-solution-access.herokuapp.com',
              // },
              {
                label: "Classwork Repo",
                href: "https://github.com/Ygilany/spring22-classwork",
              },
              {
                label: "GitHub Organization",
                href: "https://github.com/IT3049C/",
              },
              {
                label: "GitHub Assignment",
                href: "https://github.com/IT3049C-Students",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Andrew Lively. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
