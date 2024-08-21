---
sidebar_position: 1
---

# 入門指南

在 5 分鐘內開始 **html5-qrcode**。

## 設定必要函式庫
如果你使用 `npm`，便可以直接開始使用。如果你的專案中沒有使用 `npm`，請參閱下一節。

### 使用 npm 安裝

```
npm install --save-dev html5-qrcode
```

### 直接包含壓縮後的 JavaScript

如果你沒有使用任何 loader ，可以從[https://unpkg.com/html5-qrcode](https://unpkg.com/html5-qrcode) 下載最新的 UMD JavaScript 程式碼以在你的系統中使用。
```html
<script src="https://unpkg.com/html5-qrcode" type="text/javascript">
```

> 如果你使用 `npm` 安裝了該擴充套件，但仍然在沒有任何 module loader 的情況下使用 JavaScript，則可以在 `node_modules/html5-qrcode/html5-qrcode.min.js` 中獲取壓縮腳本。

### 使用 module loader
如果你使用 TypeScript 或在 JavaScript 中使用module loader，則可以根據需要直接包含關鍵類別。
```js
// To use Html5QrcodeScanner (more info below)
import {Html5QrcodeScanner} from "html5-qrcode";

// To use Html5Qrcode (more info below)
import {Html5Qrcode} from "html5-qrcode";
```

## 設定目標 HTML 容器

在你的網頁應用程式中，實現一個 `HTML` 容器元素，比如 `<div>` 元素。該函式庫庫將在這個 `HTML` 容器中渲染 QR code 掃描界面。

```html
<div id="reader" width="600px"></div>
```

> 理想情況下，不要設定此容器的高度，因為高度應取決於來自相機的視訊的高度。該庫將遵循現有的寬度，否則將應用預設寬度。高度是從視訊來源的長寬比得出的。

## 使用 JavaScript 啟動掃描器

### 簡單模式 - 帶有端到端掃描器使用者界面
`Html5QrcodeScanner` 允許你使用預設的使用者界面以簡單幾行代碼實現端到端的掃描器，該界面允許使用相機掃描或從檔案系統中選擇圖像進行掃描。

你可以按照以下方式設定掃描器：
```js
function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
```

### 專業模式 - 如果你想實現自己的使用者界面
你可以使用 `Html5Qrcode` 類來設定你的 QR 碼掃描器（帶有自己的使用者界面），並允許使用者使用相機掃描 QR 碼，或者通過選擇檔案系統中的圖檔案或智慧型手機中的原生相機進行掃描。

你可以使用以下 API 來 `fetch camera`、`start` 掃描和 `stop` 掃描。

#### 使用網頁攝像頭或智慧型手機相機進行內嵌 QR 碼掃描

##### 開始掃描
要獲取支援的相機列表，可以使用靜態方法 `Html5Qrcode.getCameras()` 進行查詢。此方法返回一個包含支援裝置列表的 `Promise`，格式為 `{ id: "id", label: "label" }`。

```js
// This method will trigger user permissions
Html5Qrcode.getCameras().then(devices => {
  /**
   * devices would be an array of objects of type:
   * { id: "id", label: "label" }
   */
  if (devices && devices.length) {
    var cameraId = devices[0].id;
    // .. use this to start scanning.
  }
}).catch(err => {
  // handle err
});
```


Once you have the camera ID from `device.id`, start camera using `Html5Qrcode#start(..)`. This method returns a `Promise` with Qr code scanning initiation.
**重要**: 請注意，如果使用者尚未授予權限，這個方法會觸發使用者授權。

> 警告: 直接訪問相機是一個強大的功能。它需要使用者的同意，而且你的網站必須在安全來源（HTTPS）上執行。
> 
> 警告: 在頁面加載時要求訪問相機會導致大多數使用者拒絕訪問。 [更多資訊](https://developers.google.com/web/fundamentals/media/capturing-images)

一旦你獲取了來自 `device.id` 的相機 ID，就可以使用 `Html5Qrcode#start(..)` 開始相機。此方法返回一個包含 QR 碼掃描啟動的 `Promise`。

```js
const html5QrCode = new Html5Qrcode(/* element id */ "reader");
html5QrCode.start(
  cameraId, 
  {
    fps: 10,    // Optional, frame per seconds for qr code scanning
    qrbox: { width: 250, height: 250 }  // Optional, if you want bounded box UI
  },
  (decodedText, decodedResult) => {
    // do something when code is read
  },
  (errorMessage) => {
    // parse error, ignore it.
  })
.catch((err) => {
  // Start failed, handle it.
});
```

> 你可以在構造函數中選擇性地設定另一個參數 `verbose`，以將所有 log 打輸出到 console。

```js
const html5QrCode = new Html5Qrcode("reader", /* verbose= */ true);
```

##### 不使用 cameraId 進行掃描
在移動裝置上，你可能希望使用者直接使用後置相機或前置相機掃描 QR 碼。在這些情況下，你可以避免使用從 `Html5Qrcode.getCameras()` 獲取的具體相機裝置 ID。`start()` 方法允許傳遞約束條件來代替相機裝置 ID，類似於 [html5 web API 語法](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Syntax)。你可以按照這些範例來開始掃描：

```js
const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer front camera
html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

// Select front camera or fail with `OverconstrainedError`.
html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);

// Select back camera or fail with `OverconstrainedError`.
html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
```

Passing the `cameraId` (recommended approach) is similar to
```js
html5QrCode.start({ deviceId: { exact: cameraId} }, config, qrCodeSuccessCallback);
```

##### 停止掃描

要停止使用相機並因此停止掃描，請呼叫 `Html5Qrcode#stop()`，該方法返回一個 `Promise`，用於停止視訊輸入和掃描。
```js
html5QrCode.stop().then((ignore) => {
  // QR Code scanning is stopped.
}).catch((err) => {
  // Stop failed, handle it.
});
```

> 請注意，該類是有狀態的，並且在掃描結束或使用者打算繼續時，應呼叫 `stop()` 以在呼叫 `start()` 後安全地正確拆解視頻和相機對象。`stop()` 會停止 viewfinder 視訊輸入。

#### 使用本地檔案或智慧型手機內建相機掃描 QR 碼
| Android 的選擇器 | iOS 的選擇器 |
|------|-------|
| 使用 Pixel 3，Google Chrome 拍攝<br /><img src="https://scanapp.org/assets/github_assets/selector_android.png" width="300px" /> | 使用 iPhone 7，Google Chrome 拍攝<br /><img src="https://scanapp.org/assets/github_assets/selector_iphone.jpg" width="300px" /> |

你也可以利用裝置上的 QR 碼掃描來處理本地檔案或預設相機。其工作方式類似於內嵌 QR 碼掃描。

定義 HTML 容器並導入上述 JavaScript 函式庫

```html
<div id="reader" width="600px" height="600px"></div>
<script src="./dist/html5-qrcode.js"></script>
```
> 設定 HTML 元素的高度和寬度不是強制性的。如果提供了這些屬性，函式庫會盡量遵守。若未設定，將設定預設寬度，並根據輸入圖像的長寬比推算高度。

添加一個 `Input` 元素來支援檔案選擇，如下所示：

```html
<input type="file" id="qr-input-file" accept="image/*">
<!-- 
  Or add captured if you only want to enable smartphone camera, PC browsers will ignore it.
-->

<input type="file" id="qr-input-file" accept="image/*" capture>
```
更多資訊可以參見 [developers.google.com](https://developers.google.com/web/fundamentals/media/capturing-images)。

在 JavaScript 代碼中，初始化對象並附加監聽器，如下所示：
```js
const html5QrCode = new Html5Qrcode(/* element id */ "reader");
// File based scanning
const fileinput = document.getElementById('qr-input-file');
fileinput.addEventListener('change', e => {
  if (e.target.files.length == 0) {
    // No file selected, ignore 
    return;
  }

  const imageFile = e.target.files[0];
  // Scan QR Code
  html5QrCode.scanFile(imageFile, true)
  .then(decodedText => {
    // success, use decodedText
    console.log(decodedText);
  })
  .catch(err => {
    // failure, handle it.
    console.log(`Error scanning file. Reason: ${err}`)
  });
});

// Note: Current public API `scanFile` only returns the decoded text. There is
// another work in progress API (in beta) which returns a full decoded result of
// type `QrcodeResult` (check interface in src/core.ts) which contains the
// decoded text, code format, code bounds, etc.
// Eventually, this beta API will be migrated to the public API.
```

> 請注意，目前內嵌掃描和基於檔案的掃描是互斥的。這意味著你一次只能使用其中之一。如果有需求，我們將很快添加支援同時使用兩者的功能。如果你想同時使用兩者，請使用 `html5QrCode#clear()` 方法來清除畫布。

## 示範
<img src="https://scanapp.org/assets/github_assets/qr-code.png" width="200px" /><br />

_掃描這張圖片或訪問 [blog.minhazav.dev/research/html5-qrcode.html](https://blog.minhazav.dev/research/html5-qrcode.html)_

## 更多資訊

### 如果你在 Medium 上
[![](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://bit.ly/3CZiASv)

[Medium 上關於 Html5-qrcode 庫的詳細文檔](https://bit.ly/3CZiASv)。

### 否則

查看這些文章了解如何使用該庫：
<!-- TODO(mebjas) Mirgate this link to blog.minhazav.dev -->
-   [使用 HTML 和 JavaScript 的 QR 和條碼掃描器](https://minhazav.medium.com/qr-and-barcode-scanner-using-html-and-javascript-2cdc937f793d)
-   [HTML5 QR 碼掃描 — 發布了 v1.0.1，不使用 jQuery，並重構了基於 Promise 的 API](https://blog.minhazav.dev/HTML5-QR-Code-scanning-launched-v1.0.1/)
-   [HTML5 QR 碼掃描與 JavaScript — 添加了對掃描本地檔案和使用預設相機的支援（v1.0.5）](https://blog.minhazav.dev/HTML5-QR-Code-scanning-support-for-local-file-and-default-camera/)

## 截圖
![screenshot](https://scanapp.org/assets/github_assets/screen.gif)<br />
_圖示：MacBook Pro 上執行的 Google Chrome 截圖_

## 文檔
查看 [API 文檔](category/apis) 以獲取有關各個套件的更多資訊。
