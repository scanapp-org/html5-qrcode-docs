---
sidebar_position: 3
---

# Supported code formats

The library supports a variety of 2D and 1D code formats.


| Code | Example |
| ---- | ----- |
| QR Code | <img src="https://scanapp.org/assets/github_assets/qr-code.png" width="200px" /> |
| AZTEC | <img src="https://scanapp.org/assets/github_assets/aztec.png"  /> |
| CODE_39|  <img src="https://scanapp.org/assets/github_assets/code_39.gif"  /> |
| CODE_93| <img src="https://scanapp.org/assets/github_assets/code_93.gif"  />|
| CODE_128| <img src="https://scanapp.org/assets/github_assets/code_128.gif"  />|
| ITF| <img src="https://scanapp.org/assets/github_assets/itf.png"  />|
| EAN_13|<img src="https://scanapp.org/assets/github_assets/ean13.jpeg"  /> |
| EAN_8| <img src="https://scanapp.org/assets/github_assets/ean8.jpeg"  />|
| PDF_417| <img src="https://scanapp.org/assets/github_assets/pdf417.png"  />|
| UPC_A| <img src="https://scanapp.org/assets/github_assets/upca.jpeg"  />|
| UPC_E| <img src="https://scanapp.org/assets/github_assets/upce.jpeg"  />|
| DATA_MATRIX|<img src="https://scanapp.org/assets/github_assets/datamatrix.png"  /> |
| MAXICODE*| <img src="https://scanapp.org/assets/github_assets/maxicode.gif"  /> |
| RSS_14*| <img src="https://scanapp.org/assets/github_assets/rss14.gif"  />|
| RSS_EXPANDED*|<img src="https://scanapp.org/assets/github_assets/rssexpanded.gif"  /> |

Code scanning is dependent on Javascript [BarcodeDetector](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector) APIs and [Zxing-js](https://github.com/zxing-js/library) library.

It's important to note that
-   [BarcodeDetector](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector) may not be supported on all platforms. The supports is not so good on Windows platform.
-   [Zxing-js](https://github.com/zxing-js/library) also have some implementation issues as raised in several issues. The authors of the [html5-qrcode](https://github.com/mebjas/html5-qrcode) are working hard to address those issues and improve scanning capability.
