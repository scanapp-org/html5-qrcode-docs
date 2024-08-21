---
sidebar_position: 2
---

[html5-qrcode](../) / Html5QrcodeScanner

# 類別：Html5QrcodeScanner

端到端的基於網頁的 QR 和條碼掃描器。

使用此類可以通過幾行程式碼在你的網頁應用程式中設定 QR 掃描器。

- 支援相機和檔案掃描。
- 根據裝置支援相機選擇、縮放和手電筒功能。
- 支援不同類型的 2D 和 1D 條碼 [Html5QrcodeSupportedFormats](../enums/Html5QrcodeSupportedFormats.md)。



## 目錄


### 建構函數

- [constructor](Html5QrcodeScanner.md#建構函數)

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

### 建構函數

• **new Html5QrcodeScanner**(`elementId`, `config`, `verbose`)

創建這個類別的實例。

#### 參數

| 名稱 | 類型 | 描述 |
| :------ | :------ | :------ |
| `elementId` | `string` | HTML 元素的 ID。 |
| `config` | `undefined` \| `Html5QrcodeScannerConfig` | 調整程式碼掃描器的額外配置。 |
| `verbose` | `undefined` \| `boolean` | 如果為 true，所有日誌將輸出到 console。 |

#### 定義於

[html5-qrcode-scanner.ts:208](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L208)

## 方法

### applyVideoConstraints

▸ **applyVideoConstraints**(`videoConstraints`): `Promise`<`void`\>

對來自相機的執行視訊應用影片約束。

注意：僅當 [()](Html5QrcodeScanner.md#getstate) 返回 [SCANNING](../enums/Html5QrcodeScannerState.md#scanning) 或 [PAUSED](../enums/Html5QrcodeScannerState.md#paused) 時才應呼叫此方法。

**`Throws`**

如果掃描未處於執行狀態，則會拋出錯誤。

#### 參數

| Name | Type |
| :------ | :------ |
| `videoConstaints` | `MediaTrackConstraints` |

#### 回傳

`Promise`<`void`\>

一個 Promise，如果應用傳遞的約束成功則成功，否則失敗。
#### 定義於

[html5-qrcode-scanner.ts:428](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L428)

___

### clear

▸ **clear**(): `Promise`<`void`\>

移除 QR Code 掃描器 UI。

#### 回傳

`Promise`<`void`\>

成功完成清理則返回成功的 Promise，否則返回失敗的 Promise。

#### 定義於

[html5-qrcode-scanner.ts:335](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L335)

___

### getRunningTrackCapabilities

▸ **getRunningTrackCapabilities**(): `MediaTrackCapabilities`

傳回執行中的視訊軌道的功能
了解更多： https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints

Note: Should only be called if [()](Html5QrcodeScanner.md#getstate)
  returns [SCANNING](../enums/Html5QrcodeScannerState.md#scanning) or 
  [PAUSED](../enums/Html5QrcodeScannerState.md#paused).

**`Throws`**

如果掃描未處於運作狀態，則會出現錯誤。

#### 回傳

`MediaTrackCapabilities`

視訊軌道的功能

#### 定義於

[html5-qrcode-scanner.ts:393](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L393)

___

### getRunningTrackSettings

▸ **getRunningTrackSettings**(): `MediaTrackSettings`

返回包含執行中視訊每個可約束屬性當前值的對象。

了解更多: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings

注意：僅當 [()](Html5QrcodeScanner.md#getstate) 返回 [SCANNING](../enums/Html5QrcodeScannerState.md#scanning) 或 [PAUSED](../enums/Html5QrcodeScannerState.md#paused) 時才應呼叫此方法。

**`Throws`**

如果掃描未處於運作狀態，則會出現錯誤。

#### 回傳

`MediaTrackSettings`

執行中視訊的支援的設定。
#### 定義於

[html5-qrcode-scanner.ts:410](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L410)

___

### getState

▸ **getState**(): [`Html5QrcodeScannerState`](../enums/Html5QrcodeScannerState.md)

取得相機掃描的狀態。

#### 回傳

[`Html5QrcodeScannerState`](../enums/Html5QrcodeScannerState.md)

回傳的狀態類型為 [Html5QrcodeScannerState](../enums/Html5QrcodeScannerState.md)。

#### 定義於

[html5-qrcode-scanner.ts:325](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L325)

___

### pause

▸ **pause**(`shouldPauseVideo?`): `void`

暫停正在進行的掃描。

注意事項：
- 只有在相機掃描進行中時才應該呼叫此方法。

**`Throws`**

當掃描器未處於掃描狀態時呼叫該方法將引發錯誤。

#### 參數

| 名稱 | 類型 | 說明 |
| :------ | :------ | :------ |
| `shouldPauseVideo?` | `boolean` | （可選，預設值為 false）如果為 `true`，影片將被暫停。 |

#### 回傳

`void`

#### 定義於

[html5-qrcode-scanner.ts:294](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L294)

___

### render

▸ **render**(`qrCodeSuccessCallback`, `qrCodeErrorCallback`): `void`

呈現用戶介面。

#### 參數

| 名稱 | 類型 | 說明 |
| :------ | :------ | :------ |
| `qrCodeSuccessCallback` | `QrcodeSuccessCallback` | 當找到 QR 碼或任何其他支持的條形碼時呼叫的回調函數。 |
| `qrCodeErrorCallback` | `undefined` \| `QrcodeErrorCallback` | 可選，當未找到 QR 碼或其他支持的條形碼時呼叫的回調函數。 |

#### 回傳

`void`

#### 定義於

[html5-qrcode-scanner.ts:241](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L241)

___

### resume

▸ **resume**(): `void`

恢復已暫停的掃描。

如果之前通過設置 `shouldPauseVideo` 為 `true` 而暫停了影片，
呼叫此方法將恢復影片播放。

注意事項：
- 只有在相機掃描進行中時才應該呼叫此方法。
- 呼叫此方法後，呼叫者將開始在成功和錯誤回調中接收結果。

**`Throws`**

當掃描器未處於暫停狀態時呼叫該方法將引發錯誤。

#### 回傳

`void`

#### 定義於

[html5-qrcode-scanner.ts:316](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode-scanner.ts#L316)