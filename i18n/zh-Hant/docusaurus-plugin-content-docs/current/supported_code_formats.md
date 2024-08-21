---
sidebar_position: 3
---

# 支援的條碼格式

該函式庫支援各種 2D 和 1D 條碼格式。

| 條碼格式 | 範例 |
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

條碼掃描基於 Javascript [BarcodeDetector](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector) API 和 [Zxing-js](https://github.com/zxing-js/library) 函式庫。

值得注意的是：
-   [BarcodeDetector](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector) 可能在所有平台上都不受支援。該功能在 Windows 平台上的支援度不高。
-   [Zxing-js](https://github.com/zxing-js/library) 也存在一些實現問題，這些問題已在幾個問題中提出。 [html5-qrcode](https://github.com/mebjas/html5-qrcode) 的作者正努力解決這些問題並提高掃描能力。
