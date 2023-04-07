---
sidebar_position: 2
---

[html5-qrcode](../) / Html5QrcodeScanner

# Class: Html5QrcodeScanner

End to end web based QR and Barcode Scanner.

Use this class for setting up QR scanner in your web application with
few lines of codes.

-   Supports camera as well as file based scanning.
-   Depending on device supports camera selection, zoom and torch features.
-   Supports different kind of 2D and 1D codes [Html5QrcodeSupportedFormats](../enums/Html5QrcodeSupportedFormats.md).

## Table of contents

### Constructors

- [constructor](Html5QrcodeScanner.md#constructor)

### Methods

- [applyVideoConstraints](Html5QrcodeScanner.md#applyvideoconstraints)
- [clear](Html5QrcodeScanner.md#clear)
- [getRunningTrackCapabilities](Html5QrcodeScanner.md#getrunningtrackcapabilities)
- [getRunningTrackSettings](Html5QrcodeScanner.md#getrunningtracksettings)
- [getState](Html5QrcodeScanner.md#getstate)
- [pause](Html5QrcodeScanner.md#pause)
- [render](Html5QrcodeScanner.md#render)
- [resume](Html5QrcodeScanner.md#resume)

## Constructors

### constructor

• **new Html5QrcodeScanner**(`elementId`, `config`, `verbose`)

Creates instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementId` | `string` | Id of the HTML element. |
| `config` | `undefined` \| `Html5QrcodeScannerConfig` | Extra configurations to tune the code scanner. |
| `verbose` | `undefined` \| `boolean` | If true, all logs would be printed to console. |

#### Defined in

[html5-qrcode-scanner.ts:208](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L208)

## Methods

### applyVideoConstraints

▸ **applyVideoConstraints**(`videoConstaints`): `Promise`<`void`\>

Apply a video constraints on running video track from camera.

Note: Should only be called if [()](Html5QrcodeScanner.md#getstate)
  returns [SCANNING](../enums/Html5QrcodeScannerState.md#scanning) or 
  [PAUSED](../enums/Html5QrcodeScannerState.md#paused).

**`Throws`**

error if the scanning is not in running state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `videoConstaints` | `MediaTrackConstraints` |

#### Returns

`Promise`<`void`\>

a Promise which succeeds if the passed constraints are applied,
 fails otherwise.

#### Defined in

[html5-qrcode-scanner.ts:428](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L428)

___

### clear

▸ **clear**(): `Promise`<`void`\>

Removes the QR Code scanner UI.

#### Returns

`Promise`<`void`\>

Promise which succeeds if the cleanup is complete successfully,
 fails otherwise.

#### Defined in

[html5-qrcode-scanner.ts:335](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L335)

___

### getRunningTrackCapabilities

▸ **getRunningTrackCapabilities**(): `MediaTrackCapabilities`

Returns the capabilities of the running video track.

Read more: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints

Note: Should only be called if [()](Html5QrcodeScanner.md#getstate)
  returns [SCANNING](../enums/Html5QrcodeScannerState.md#scanning) or 
  [PAUSED](../enums/Html5QrcodeScannerState.md#paused).

**`Throws`**

error if the scanning is not in running state.

#### Returns

`MediaTrackCapabilities`

the capabilities of a running video track.

#### Defined in

[html5-qrcode-scanner.ts:393](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L393)

___

### getRunningTrackSettings

▸ **getRunningTrackSettings**(): `MediaTrackSettings`

Returns the object containing the current values of each constrainable
property of the running video track.

Read more: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings

Note: Should only be called if [()](Html5QrcodeScanner.md#getstate)
  returns [SCANNING](../enums/Html5QrcodeScannerState.md#scanning) or 
  [PAUSED](../enums/Html5QrcodeScannerState.md#paused).

**`Throws`**

error if the scanning is not in running state.

#### Returns

`MediaTrackSettings`

the supported settings of the running video track.

#### Defined in

[html5-qrcode-scanner.ts:410](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L410)

___

### getState

▸ **getState**(): [`Html5QrcodeScannerState`](../enums/Html5QrcodeScannerState.md)

Gets state of the camera scan.

#### Returns

[`Html5QrcodeScannerState`](../enums/Html5QrcodeScannerState.md)

state of type [Html5QrcodeScannerState](../enums/Html5QrcodeScannerState.md).

#### Defined in

[html5-qrcode-scanner.ts:325](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L325)

___

### pause

▸ **pause**(`shouldPauseVideo?`): `void`

Pauses the ongoing scan.

Notes:
-   Should only be called if camera scan is ongoing.

**`Throws`**

error if method is called when scanner is not in scanning state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shouldPauseVideo?` | `boolean` | (Optional, default = false) If `true` the video will be paused. |

#### Returns

`void`

#### Defined in

[html5-qrcode-scanner.ts:294](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L294)

___

### render

▸ **render**(`qrCodeSuccessCallback`, `qrCodeErrorCallback`): `void`

Renders the User Interface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qrCodeSuccessCallback` | `QrcodeSuccessCallback` | Callback called when an instance of a QR code or any other supported bar code is found. |
| `qrCodeErrorCallback` | `undefined` \| `QrcodeErrorCallback` | optional, callback called in cases where no instance of QR code or any other supported bar code is found. |

#### Returns

`void`

#### Defined in

[html5-qrcode-scanner.ts:241](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L241)

___

### resume

▸ **resume**(): `void`

Resumes the paused scan.

If the video was previously paused by setting `shouldPauseVideo`
to `true` in [(shouldPauseVideo)](Html5QrcodeScanner.md#pause),
calling this method will resume the video.

Notes:
-   Should only be called if camera scan is ongoing.
-   With this caller will start getting results in success and error
callbacks.

**`Throws`**

error if method is called when scanner is not in paused state.

#### Returns

`void`

#### Defined in

[html5-qrcode-scanner.ts:316](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L316)
