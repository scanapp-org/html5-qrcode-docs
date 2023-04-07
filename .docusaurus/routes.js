import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/html5-qrcode-docs/__docusaurus/debug',
    component: ComponentCreator('/html5-qrcode-docs/__docusaurus/debug', 'ab1'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/__docusaurus/debug/config',
    component: ComponentCreator('/html5-qrcode-docs/__docusaurus/debug/config', 'cf3'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/__docusaurus/debug/content',
    component: ComponentCreator('/html5-qrcode-docs/__docusaurus/debug/content', 'ad4'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/html5-qrcode-docs/__docusaurus/debug/globalData', '512'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/html5-qrcode-docs/__docusaurus/debug/metadata', 'f72'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/html5-qrcode-docs/__docusaurus/debug/registry', '8c1'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/html5-qrcode-docs/__docusaurus/debug/routes', 'a3b'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog',
    component: ComponentCreator('/html5-qrcode-docs/blog', '43a'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/archive',
    component: ComponentCreator('/html5-qrcode-docs/blog/archive', '9f0'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/first-blog-post',
    component: ComponentCreator('/html5-qrcode-docs/blog/first-blog-post', '6f9'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/long-blog-post',
    component: ComponentCreator('/html5-qrcode-docs/blog/long-blog-post', '57e'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/mdx-blog-post',
    component: ComponentCreator('/html5-qrcode-docs/blog/mdx-blog-post', '493'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags', '8ea'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags/docusaurus',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags/docusaurus', '603'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags/facebook',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags/facebook', 'c9f'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags/hello',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags/hello', '5aa'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/tags/hola',
    component: ComponentCreator('/html5-qrcode-docs/blog/tags/hola', '502'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/blog/welcome',
    component: ComponentCreator('/html5-qrcode-docs/blog/welcome', '2e0'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/markdown-page',
    component: ComponentCreator('/html5-qrcode-docs/markdown-page', 'cf2'),
    exact: true
  },
  {
    path: '/html5-qrcode-docs/docs',
    component: ComponentCreator('/html5-qrcode-docs/docs', '90c'),
    routes: [
      {
        path: '/html5-qrcode-docs/docs/apis',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis', '181'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/classes/Html5Qrcode',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/classes/Html5Qrcode', 'fc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/classes/Html5QrcodeScanner', '35d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScannerState', 'efd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScanType',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/enums/Html5QrcodeScanType', '7b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/enums/Html5QrcodeSupportedFormats',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/enums/Html5QrcodeSupportedFormats', 'ff6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/interfaces/CameraCapabilities',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/interfaces/CameraCapabilities', '4ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/interfaces/CameraDevice',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/interfaces/CameraDevice', '7a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeCameraScanConfig',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeCameraScanConfig', 'b09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeFullConfig',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeFullConfig', '576'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeResult',
        component: ComponentCreator('/html5-qrcode-docs/docs/apis/interfaces/Html5QrcodeResult', '762'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/category/apis',
        component: ComponentCreator('/html5-qrcode-docs/docs/category/apis', 'bc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/category/classes',
        component: ComponentCreator('/html5-qrcode-docs/docs/category/classes', 'ed9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/category/enums',
        component: ComponentCreator('/html5-qrcode-docs/docs/category/enums', 'ff9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/category/interfaces',
        component: ComponentCreator('/html5-qrcode-docs/docs/category/interfaces', 'f0a'),
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
        path: '/html5-qrcode-docs/docs/supported_code_formats',
        component: ComponentCreator('/html5-qrcode-docs/docs/supported_code_formats', 'ce5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/html5-qrcode-docs/docs/supported_frameworks',
        component: ComponentCreator('/html5-qrcode-docs/docs/supported_frameworks', 'a8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/html5-qrcode-docs/',
    component: ComponentCreator('/html5-qrcode-docs/', '384'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
