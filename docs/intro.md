---
sidebar_position: 1
---

# Getting started

Let's discover **html5-qrcode in less than 5 minutes**.

## Setup the library
You can get started using `npm`, if you don't use `npm` in your project checkout the next section.

### Install using npm

```
npm install --save-dev html5-qrcode
```

### Include minified Javascript directly

If you are not using any loader, you can get the latest UMD javascript code in production from [https://unpkg.com/html5-qrcode](https://unpkg.com/html5-qrcode).

```html
<script src="https://unpkg.com/html5-qrcode" type="text/javascript">
```

> In case you installed the plugin using `npm` but still use javascript without any module loader, you can get the minified script in `node_modules/html5-qrcode/html5-qrcode.min.js`

### Using with module loaders
If you are building on Typescript or use module loaders in Javascript, you can include the key classes directly based on needs.

```js
// To use Html5QrcodeScanner (more info below)
import {Html5QrcodeScanner} from "html5-qrcode";

// To use Html5Qrcode (more info below)
import {Html5Qrcode} from "html5-qrcode";
```

## Setup a target HTML container

In your web application, implement an `HTML` container element like `<div>` element. The library will render the QR scanning UI in this `HTML` container.

```html
<div id="reader" width="600px"></div>
```

> Ideally do not set the height of this container as the height should depend on the height of the video feed from the camera. The library would honor the existing width, otherwise apply the default width. The height is derived from the aspect ratio of the video feed.

## Start scanner using Javascript

### Easy Mode - With end to end scanner user interface
`Html5QrcodeScanner` lets you implement an end to end scanner with few lines of code with the default user interface which allows scanning using the camera or selecting an image from the file system.

You can set up the scanner as follows:
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

### Pro Mode - if you want to implement your own user interface
You can use `Html5Qrcode` class to set up your QR code scanner (with your own user interface) and allow users to scan QR codes using the camera or by choosing an image file in the file system or native cameras in smartphones.

You can use the following APIs to `fetch camera`, `start` scanning and `stop` scanning.

#### For using inline QR Code scanning with Webcam or Smartphone camera

##### Start Scanning
To get a list of supported cameras, query it using static method `Html5Qrcode.getCameras()`. This method returns a `Promise` with a list of devices supported in format `{ id: "id", label: "label" }`. 
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

**Important**: Note that this method will trigger user permission if the user has not granted it already. 
> Warning: Direct access to the camera is a powerful feature. It requires consent from the user, and your site MUST be on a secure origin (HTTPS).
> 
> Warning: Asking for access to the camera on page load will result in most of your users rejecting access to it. [More info](https://developers.google.com/web/fundamentals/media/capturing-images)

Once you have the camera ID from `device.id`, start camera using `Html5Qrcode#start(..)`. This method returns a `Promise` with Qr code scanning initiation.
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

> You can optionally set another argument in constructor called `verbose` to print all logs to console

```js
const html5QrCode = new Html5Qrcode("reader", /* verbose= */ true);
```

##### Scanning without cameraId
In mobile devices you may want users to directly scan the QR code using the back camera or the front camera for some use cases. For such cases you can avoid using the exact camera device ID that you get from `Html5Qrcode.getCameras()`. The `start()` method allows passing constraints in place of camera device ID similar to [html5 web API syntax](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Syntax). You can start scanning like mentioned in these examples:

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

##### Stop Scanning

To stop using camera and thus stop scanning, call `Html5Qrcode#stop()` which returns a `Promise` for stopping the video feed and scanning.
```js
html5QrCode.stop().then((ignore) => {
  // QR Code scanning is stopped.
}).catch((err) => {
  // Stop failed, handle it.
});
```

> Note that the class is stateful and `stop()` should be called to properly tear down the video and camera objects safely after calling `start()` when the scan is over or the user intend to move on. `stop()` will stop the video feed on the viewfinder.

#### For QR Code scanning using local files or inbuilt camera on Smartphones
| Selector in Android | Selector in IOS|
|------|-------|
| Taken on Pixel 3, Google Chrome<br /><img src="https://scanapp.org/assets/github_assets/selector_android.png" width="300px" /> |  Taken on iPhone 7, Google Chrome<br /><img src="https://scanapp.org/assets/github_assets/selector_iphone.jpg" width="300px" /> |

You can alternatively leverage QR Code scanning for local files on the device or default camera on the device. It works similar to inline QR Code scanning.

Define the HTML container and import the JavaScript library as mentioned above
```html
<div id="reader" width="600px" height="600px"></div>
<script src="./dist/html5-qrcode.js"></script>
```
> It's not mandatory to set the height and width of the HTML element. If provided, the library would try to honor it. If it's not set, the library would set a default width and derive the height based on the input image's aspect ratio.

Add an `Input` element for supporting file selection like this:
```html
<input type="file" id="qr-input-file" accept="image/*">
<!-- 
  Or add captured if you only want to enable smartphone camera, PC browsers will ignore it.
-->

<input type="file" id="qr-input-file" accept="image/*" capture>
```
Find more information about this at [developers.google.com](https://developers.google.com/web/fundamentals/media/capturing-images).

And in JavaScript code initialize the object and attach listener like this:
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

> Note that inline scanning and file-based scanning are mutually exclusive at the moment. This means you can only use one of them at a time. I'll soon be adding support for the option to have both if the requirement comes in. If you want to use both, use `html5QrCode#clear()` method to clear the canvas.


## Demo
<img src="https://scanapp.org/assets/github_assets/qr-code.png" width="200px" /><br />

_Scan this image or visit [blog.minhazav.dev/research/html5-qrcode.html](https://blog.minhazav.dev/research/html5-qrcode.html)_

## For more information

### If you are on Medium
[![](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://bit.ly/3CZiASv)

[Thorough documentation on Html5-qrcode library on Medium](https://bit.ly/3CZiASv).

### Otherwise

Check these articles on how to use this library:
<!-- TODO(mebjas) Mirgate this link to blog.minhazav.dev -->
-   [QR and barcode scanner using HTML and JavaScript](https://minhazav.medium.com/qr-and-barcode-scanner-using-html-and-javascript-2cdc937f793d)
-   [HTML5 QR Code scanning — launched v1.0.1 without jQuery dependency and refactored Promise based APIs](https://blog.minhazav.dev/HTML5-QR-Code-scanning-launched-v1.0.1/).
-   [HTML5 QR Code scanning with JavaScript — Support for scanning the local file and using default camera added (v1.0.5)](https://blog.minhazav.dev/HTML5-QR-Code-scanning-support-for-local-file-and-default-camera/)

## Screenshots
![screenshot](https://scanapp.org/assets/github_assets/screen.gif)<br />
_Figure: Screenshot from Google Chrome running on MacBook Pro_

## Documentation
Checkout [API documentation](category/apis) for more information on individual components.


