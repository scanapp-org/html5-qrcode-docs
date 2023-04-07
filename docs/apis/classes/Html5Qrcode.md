---
sidebar_position: 1
---

[html5-qrcode](../) / Html5Qrcode

# Class: Html5Qrcode

Low level APIs for building web based QR and Barcode Scanner.

Supports APIs for camera as well as file based scanning.

Depending of the configuration, the class will help render code
scanning UI on the provided parent HTML container.

## Table of contents

### Constructors

- [constructor](Html5Qrcode.md#constructor)

### Methods

- [applyVideoConstraints](Html5Qrcode.md#applyvideoconstraints)
- [clear](Html5Qrcode.md#clear)
- [getRunningTrackCameraCapabilities](Html5Qrcode.md#getrunningtrackcameracapabilities)
- [getRunningTrackCapabilities](Html5Qrcode.md#getrunningtrackcapabilities)
- [getRunningTrackSettings](Html5Qrcode.md#getrunningtracksettings)
- [getState](Html5Qrcode.md#getstate)
- [pause](Html5Qrcode.md#pause)
- [resume](Html5Qrcode.md#resume)
- [scanFile](Html5Qrcode.md#scanfile)
- [scanFileV2](Html5Qrcode.md#scanfilev2)
- [start](Html5Qrcode.md#start)
- [stop](Html5Qrcode.md#stop)
- [getCameras](Html5Qrcode.md#getcameras)

## Constructors

### constructor

• **new Html5Qrcode**(`elementId`, `configOrVerbosityFlag?`)

Initialize the code scanner.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementId` | `string` | Id of the HTML element. |
| `configOrVerbosityFlag?` | `boolean` \| [`Html5QrcodeFullConfig`](../interfaces/Html5QrcodeFullConfig.md) | optional, config object of type [Html5QrcodeFullConfig](../interfaces/Html5QrcodeFullConfig.md) or a boolean verbosity flag (to maintain backward compatibility). If nothing is passed, default values would be used. If a boolean value is used, it'll be used to set verbosity. Pass a config value to configure the Html5Qrcode scanner as per needs. Use of `configOrVerbosityFlag` as a boolean value is being deprecated since version 2.0.7. TODO(mebjas): Deprecate the verbosity boolean flag completely. |

#### Defined in

[html5-qrcode.ts:313](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L313)

## Methods

### applyVideoConstraints

▸ **applyVideoConstraints**(`videoConstaints`): `Promise`<`void`\>

Apply a video constraints on running video track from camera.

Important:
 1. Must be called only if the camera based scanning is in progress.
 2. Changing aspectRatio while scanner is running is not yet supported.

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

[html5-qrcode.ts:829](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L829)

___

### clear

▸ **clear**(): `void`

Clears the existing canvas.

Note: in case of ongoing web cam based scan, it needs to be explicitly
closed before calling this method, else it will throw exception.

#### Returns

`void`

#### Defined in

[html5-qrcode.ts:758](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L758)

___

### getRunningTrackCameraCapabilities

▸ **getRunningTrackCameraCapabilities**(): [`CameraCapabilities`](../interfaces/CameraCapabilities.md)

Returns [CameraCapabilities](../interfaces/CameraCapabilities.md) of the running video track.

TODO(minhazav): Document this API, currently hidden.

**`Throws`**

error if the scanning is not in running state.

#### Returns

[`CameraCapabilities`](../interfaces/CameraCapabilities.md)

capabilities of the running camera.

#### Defined in

[html5-qrcode.ts:811](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L811)

___

### getRunningTrackCapabilities

▸ **getRunningTrackCapabilities**(): `MediaTrackCapabilities`

Returns the capabilities of the running video track.

Read more: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints

Important:
 1. Must be called only if the camera based scanning is in progress.

**`Throws`**

error if the scanning is not in running state.

#### Returns

`MediaTrackCapabilities`

capabilities of the running camera.

#### Defined in

[html5-qrcode.ts:782](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L782)

___

### getRunningTrackSettings

▸ **getRunningTrackSettings**(): `MediaTrackSettings`

Returns the object containing the current values of each constrainable
property of the running video track.

Read more: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings

Important:
 1. Must be called only if the camera based scanning is in progress.

**`Throws`**

error if the scanning is not in running state.

#### Returns

`MediaTrackSettings`

settings of the running media track.

#### Defined in

[html5-qrcode.ts:799](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L799)

___

### getState

▸ **getState**(): [`Html5QrcodeScannerState`](../enums/Html5QrcodeScannerState.md)

Gets state of the camera scan.

#### Returns

[`Html5QrcodeScannerState`](../enums/Html5QrcodeScannerState.md)

state of type ScannerState.

#### Defined in

[html5-qrcode.ts:539](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L539)

___

### pause

▸ **pause**(`shouldPauseVideo?`): `void`

Pauses the ongoing scan.

**`Throws`**

error if method is called when scanner is not in scanning state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shouldPauseVideo?` | `boolean` | (Optional, default = false) If true the video will be paused. |

#### Returns

`void`

#### Defined in

[html5-qrcode.ts:480](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L480)

___

### resume

▸ **resume**(): `void`

Resumes the paused scan.

If the video was previously paused by setting `shouldPauseVideo``
to `true` in [(shouldPauseVideo)](Html5Qrcode.md#pause), calling
this method will resume the video.

Note: with this caller will start getting results in success and error
callbacks.

**`Throws`**

error if method is called when scanner is not in paused state.

#### Returns

`void`

#### Defined in

[html5-qrcode.ts:508](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L508)

___

### scanFile

▸ **scanFile**(`imageFile`, `showImage?`): `Promise`<`string`\>

Scans an Image File for QR Code.

This feature is mutually exclusive to camera-based scanning, you should
call stop() if the camera-based scanning was ongoing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageFile` | `File` | a local file with Image content. |
| `showImage?` | `boolean` | if true the Image will be rendered on given element. |

#### Returns

`Promise`<`string`\>

Promise with decoded QR code string on success and error message
on failure. Failure could happen due to different reasons:
  1. QR Code decode failed because enough patterns not found in image.
  2. Input file was not image or unable to load the image or other image
     load errors.

#### Defined in

[html5-qrcode.ts:615](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L615)

___

### scanFileV2

▸ **scanFileV2**(`imageFile`, `showImage?`): `Promise`<[`Html5QrcodeResult`](../interfaces/Html5QrcodeResult.md)\>

Scans an Image File for QR Code & returns [Html5QrcodeResult](../interfaces/Html5QrcodeResult.md).

This feature is mutually exclusive to camera-based scanning, you should
call stop() if the camera-based scanning was ongoing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageFile` | `File` | a local file with Image content. |
| `showImage?` | `boolean` | if true the Image will be rendered on given element. |

#### Returns

`Promise`<[`Html5QrcodeResult`](../interfaces/Html5QrcodeResult.md)\>

Promise which resolves with result of type
[Html5QrcodeResult](../interfaces/Html5QrcodeResult.md).

 This is a WIP method, it's available as a public method but not
documented.
TODO(mebjas): Replace scanFile with ScanFileV2

#### Defined in

[html5-qrcode.ts:638](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L638)

___

### start

▸ **start**(`cameraIdOrConfig`, `configuration`, `qrCodeSuccessCallback`, `qrCodeErrorCallback`): `Promise`<``null``\>

Start scanning QR codes or bar codes for a given camera.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraIdOrConfig` | `string` \| `MediaTrackConstraints` | Identifier of the camera, it can either be the camera id retrieved from Html5Qrcode#getCameras() method or object with facing mode constraint. |
| `configuration` | `undefined` \| [`Html5QrcodeCameraScanConfig`](../interfaces/Html5QrcodeCameraScanConfig.md) | Extra configurations to tune the code scanner. |
| `qrCodeSuccessCallback` | `undefined` \| `QrcodeSuccessCallback` | Callback called when an instance of a QR code or any other supported bar code is found. |
| `qrCodeErrorCallback` | `undefined` \| `QrcodeErrorCallback` | Callback called in cases where no instance of QR code or any other supported bar code is found. |

#### Returns

`Promise`<``null``\>

Promise for starting the scan. The Promise can fail if the user
doesn't grant permission or some API is not supported by the browser.

#### Defined in

[html5-qrcode.ts:360](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L360)

___

### stop

▸ **stop**(): `Promise`<`void`\>

Stops streaming QR Code video and scanning.

#### Returns

`Promise`<`void`\>

Promise for safely closing the video stream.

#### Defined in

[html5-qrcode.ts:548](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L548)

___

### getCameras

▸ `Static` **getCameras**(): `Promise`<[`CameraDevice`](../interfaces/CameraDevice.md)[]\>

Returns list of [CameraDevice](../interfaces/CameraDevice.md) supported by the device.

#### Returns

`Promise`<[`CameraDevice`](../interfaces/CameraDevice.md)[]\>

array of camera devices on success.

#### Defined in

[html5-qrcode.ts:767](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L767)
