import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
