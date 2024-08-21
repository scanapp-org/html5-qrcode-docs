---
sidebar_position: 1
---

[html5-qrcode](../) / Html5Qrcode

# Class: Html5Qrcode

用於配置基於網頁的 QR Code 和條碼掃描器的低級 API。

支援鏡頭掃描和基於檔案的掃描 API。

根據配置，該類將幫助在提供的父 HTML 容器中渲染程式碼掃描 UI。

## 目錄

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

初始化程式碼掃描器。
#### Parameters

| 名稱 | 類型 | 描述 |
| :------ | :------ | :------ |
| elementId | string | HTML 元素的 ID。 |
| configOrVerbosityFlag? | boolean \| [Html5QrcodeFullConfig](../interfaces/Html5QrcodeFullConfig.md) | 可選，`Html5QrcodeFullConfig` 類型的配置對象或布林值的詳細程度標誌（以維持向後兼容性）。如果未傳遞任何值，將使用預設值。如果使用布林值，它將用於設定詳細程度。傳遞配置值以根據需要配置 Html5Qrcode 掃描器。自版本 2.0.7 起，`configOrVerbosityFlag` 作為布林值的用法已被棄用。TODO(mebjas): 完全棄用詳細程度布林標誌。 |

#### 參數

| 名稱 | 類型 | 描述 |
| :------ | :------ | :------ |
| `elementId` | `string` | HTML 元素的 ID。 |
| `configOrVerbosityFlag?` | `boolean` \| [`Html5QrcodeFullConfig`](../interfaces/Html5QrcodeFullConfig.md) | 可選，`Html5QrcodeFullConfig` 類型的配置對象或布林型詳細訊息標誌（以維持向後兼容）。如果未傳遞任何值，則將使用預設值。如果使用布林值，它將用於設定詳細訊息。根據需要的設定傳遞設定值設定 Html5Qrcode 掃描器。自版本 2.0.7 起，不建議使用 configOrVerbosityFlag 作為布林值。 TODO(mebjas)：完全棄用詳細布林標誌。

#### 定義於

[html5-qrcode.ts:313](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L313)

## 方法

### applyVideoConstraints

▸ **applyVideoConstraints**(`videoConstaints`): `Promise`<`void`\>

對來自鏡頭的執行影片軌道應用影片約束。

重要事項：
1. 只有在進行基於鏡頭的掃描時，才必須呼叫此方法。
2. 在掃描器執行時更改 `aspectRatio` 尚不支援。

**`Throws`**

如果掃描不在執行狀態，則拋出錯誤。

#### 參數

| 名稱 | 類型 |
| :------ | :------ |
| `videoConstaints` | `MediaTrackConstraints` |

#### 回傳

`Promise`<`void`\>

一個 Promise，若傳遞的約束已成功應用則成功，否則失敗。

#### 定義於

[html5-qrcode.ts:829](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L829)

___

### clear

▸ **clear**(): `void`

清除現有的畫布。

注意：如果有正在進行的網路鏡頭掃描，需要在呼叫此方法之前明確關閉，否則會拋出異常。


#### 回傳

`void`

#### 定義於

[html5-qrcode.ts:758](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L758)

___

### getRunningTrackCameraCapabilities

▸ **getRunningTrackCameraCapabilities**(): [`CameraCapabilities`](../interfaces/CameraCapabilities.md)

Returns [CameraCapabilities](../interfaces/CameraCapabilities.md) of the running video track.

TODO(minhazav): Document this API, currently hidden.
回傳執行追蹤的影片 [CameraCapabilities](../interfaces/CameraCapabilities.md)。

TODO(minhazav): 文檔化此 API，目前為隱藏。
**`Throws`**

如果掃描不在執行狀態，則拋出錯誤。

#### 回傳

[`CameraCapabilities`](../interfaces/CameraCapabilities.md)

執行中相機的能力
#### 定義於

[html5-qrcode.ts:811](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L811)

___

### getRunningTrackCapabilities

▸ **getRunningTrackCapabilities**(): `MediaTrackCapabilities`

回傳執行中影片軌道的能力。

閱讀更多：https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints

重要事項：
1. 僅當基於相機的掃描正在進行時才可呼叫此方法。

**`Throws`**

如果掃描未處於執行狀態，則拋出錯誤。

#### 回傳

`MediaTrackCapabilities`

執行中相機的能力。

#### 定義於

[html5-qrcode.ts:782](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L782)

___

### getRunningTrackSettings

▸ **getRunningTrackSettings**(): `MediaTrackSettings`

回傳包含執行中影片軌道的每個可約束屬性當前值的物件。

閱讀更多：https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings

重要事項：
1. 僅當相機掃描正在進行時才可呼叫此方法。

**`Throws`**

如果掃描未處於執行狀態，則拋出錯誤。

#### 回傳

`MediaTrackSettings`

執行中媒體軌道的設定。

#### 定義於

[html5-qrcode.ts:799](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L799)

___

### getState

▸ **getState**(): [`Html5QrcodeScannerState`](../enums/Html5QrcodeScannerState.md)

取得相機掃描的狀態。

#### 回傳

[`Html5QrcodeScannerState`](../enums/Html5QrcodeScannerState.md)

`ScannerState` 型別的狀態。

#### 定義於

[html5-qrcode.ts:539](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L539)

___

### pause

▸ **pause**(`shouldPauseVideo?`): `void`

暫停正在進行的掃描。

**`Throws`**

當掃描器未處於掃描狀態時呼叫此方法，則拋出錯誤。

#### 參數

| 名稱 | 類型 | 說明 |
| :------ | :------ | :------ |
| `shouldPauseVideo?` | `boolean` | （可選，預設值為 false）如果為 true，則影片將被暫停。 |

#### 回傳

`void`

#### 定義於

[html5-qrcode.ts:480](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L480)

___

### resume

▸ **resume**(): `void`

恢復暫停的掃描。

如果影片之前因設置 `shouldPauseVideo` 為 `true` 在[(shouldPauseVideo)](Html5Qrcode.md#pause)中被暫停，則呼叫此方法將恢復影片。

注意：呼叫者將開始在成功和錯誤 Callback 中獲取結果。

**`Throws`**

如果方法在掃描器未處於暫停狀態時被呼叫，則拋出錯誤。

#### 回傳

`void`

#### 定義於

[html5-qrcode.ts:508](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L508)

___

### scanFile

▸ **scanFile**(`imageFile`, `showImage?`): `Promise`<`string`\>

掃描圖像文件以識別 QR code 。

此功能與基於相機的掃描互斥，如果基於相機的掃描正在進行中，應呼叫 `stop()`。

#### 參數

| 名稱 | 類型 | 說明 |
| :------ | :------ | :------ |
| `imageFile` | `File` | 含有圖像內容的本地文件。 |
| `showImage?` | `boolean` | 如果為 true，圖像將顯示在給定元素上。 |

#### 回傳

`Promise`<`string`\>

在成功時回傳解碼的 QR code 字串的 Promise，在失敗時回傳錯誤信息。
失敗可能是由於不同的原因：
1. QR code 解碼失敗，因為圖像中沒有找到足夠的圖案。
2. 輸入文件不是圖像或無法加載圖像，或其他圖像加載錯誤。

#### 定義於

[html5-qrcode.ts:615](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L615)

___

### scanFileV2

▸ **scanFileV2**(`imageFile`, `showImage?`): `Promise`<[`Html5QrcodeResult`](../interfaces/Html5QrcodeResult.md)\>

掃描圖像文件以識別 QR code 並回傳 [`Html5QrcodeResult`](../interfaces/Html5QrcodeResult.md)。

此功能與基於相機的掃描互斥，如果基於相機的掃描正在進行中，應呼叫 `stop()`。

#### 參數

| 名稱 | 類型 | 說明 |
| :------ | :------ | :------ |
| `imageFile` | `File` | 含有圖像內容的本地文件。 |
| `showImage?` | `boolean` | 如果為 true，圖像將顯示在給定元素上。 |

#### 回傳

`Promise`<[`Html5QrcodeResult`](../interfaces/Html5QrcodeResult.md)\>

Promise 解析並回傳類型為 [`Html5QrcodeResult`](../interfaces/Html5QrcodeResult.md) 的結果。

這是一個工作進行中的方法，它作為公共方法可用但未記錄。
TODO(mebjas): 用 `ScanFileV2` 替換 `scanFile`。

#### 定義於

[html5-qrcode.ts:638](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L638)

___

### start

▸ **start**(`cameraIdOrConfig`, `configuration`, `qrCodeSuccessCallback`, `qrCodeErrorCallback`): `Promise`<``null``\>

啟動 QR code 或條形碼掃描器以掃描指定相機的內容。

#### 參數

| 名稱 | 類型 | 說明 |
| :------ | :------ | :------ |
| `cameraIdOrConfig` | `string` \| `MediaTrackConstraints` | 相機的識別碼，它可以是從 `Html5Qrcode#getCameras()` 方法檢索的相機 ID，或具有面向模式約束的對象。 |
| `configuration` | `undefined` \| [`Html5QrcodeCameraScanConfig`](../interfaces/Html5QrcodeCameraScanConfig.md) | 用於調整掃描器的額外配置。 |
| `qrCodeSuccessCallback` | `undefined` \| `QrcodeSuccessCallback` | 當找到 QR code 或任何其他支援的條形碼時調用的 Callback 。 |
| `qrCodeErrorCallback` | `undefined` \| `QrcodeErrorCallback` | 當未找到 QR code 或其他支援的條形碼時調用的 Callback 。 |

#### 回傳

`Promise`<``null``\>

啟動掃描的 Promise。該 Promise 可能會因為用戶未授予權限或瀏覽器不支援某些 API 而失敗。

#### 定義於

[html5-qrcode.ts:360](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L360)

___

### stop

▸ **stop**(): `Promise`<`void`\>

停止輸出串流 QR code 並停止掃描。

#### 回傳

`Promise`<`void`\>

安全關閉視訊來源的 Promise。

#### 定義於

[html5-qrcode.ts:548](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L548)

___

### getCameras

▸ `Static` **getCameras**(): `Promise`<[`CameraDevice`](../interfaces/CameraDevice.md)[]\>

回傳設備支援的 [`CameraDevice`](../interfaces/CameraDevice.md) 列表。

#### 回傳

`Promise`<[`CameraDevice`](../interfaces/CameraDevice.md)[]\>

成功時回傳相機設備的陣列。

#### 定義於

[html5-qrcode.ts:767](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L767)