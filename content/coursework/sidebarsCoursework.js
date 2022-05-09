/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  coursework: [
    'index',
    {
      type: `category`,
      label: `Labs`,
      collapsed: false,
      link: {
        type: `doc`,
        id: `labs/index`
      },
      items:[
        'labs/hello-world/index',
        // 'labs/js-and-dom-exercises/index',
        // 'labs/we-message/index',
        // 'labs/we-message-storage/index',
        // 'labs/tooling/index',
        // 'labs/rps-in-react/index',
      ]
    },
    {
      type: `category`,
      label: `Assignments`,
      collapsed: false,
      link: {
        type: `doc`,
        id: `assignments/index`
      },
      items:[
        'assignments/online-portfolio/index',
        // 'assignments/js-exercises/index',
        // 'assignments/rock-paper-scissors/index',
        // 'assignments/hangman/index',
      ]
    }
  ]
};

module.exports = sidebars;
