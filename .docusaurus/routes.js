import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/html5-qrcode-docs/blog',
    component: ComponentCreator('/html5-qrcode-docs/blog', 'e1d'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/archive',
    component: ComponentCreator('/html5-qrcode-docs/blog/archive', '93b'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/first-blog-post',
    component: ComponentCreator('/html5-qrcode-docs/blog/first-blog-post', 'f44'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/long-blog-post',
    component: ComponentCreator('/html5-qrcode-docs/blog/long-blog-post', '2ae'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/mdx-blog-post',
    component: ComponentCreator('/html5-qrcode-docs/blog/mdx-blog-post', '475'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags', '987'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags/docusaurus',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags/docusaurus', '751'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags/facebook',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags/facebook', '4b9'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags/hello',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags/hello', 'd41'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags/hola',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags/hola', '0b0'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/welcome',
    component: ComponentCreator('/html5-qrcode-docs/blog/welcome', '4a4'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/markdown-page',
    component: ComponentCreator('/html5-qrcode-docs/markdown-page', '19b'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/docs',
    component: ComponentCreator('/html5-qrcode-docs/docs', 'd8a'),
    routes: [
      {
        path: '/html5-qrcode-docs/docs/category/tutorial---basics',
        component: ComponentCreator('/html5-qrcode-docs/docs/category/tutorial---basics', 'c6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/category/tutorial---extras',
        component: ComponentCreator('/html5-qrcode-docs/docs/category/tutorial---extras', '3eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/intro',
        component: ComponentCreator('/html5-qrcode-docs/docs/intro', '8ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/html5-qrcode-docs/docs/tutorial-basics/congratulations', '2ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/html5-qrcode-docs/docs/tutorial-basics/create-a-blog-post', '017'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/html5-qrcode-docs/docs/tutorial-basics/create-a-document', '73c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/html5-qrcode-docs/docs/tutorial-basics/create-a-page', '4db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/html5-qrcode-docs/docs/tutorial-basics/deploy-your-site', '27e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/html5-qrcode-docs/docs/tutorial-basics/markdown-features', '710'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/html5-qrcode-docs/docs/tutorial-extras/manage-docs-versions', '74b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/html5-qrcode-docs/docs/tutorial-extras/translate-your-site', '73e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/html5-qrcode-docs/',
    component: ComponentCreator('/html5-qrcode-docs/', 'c28'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
