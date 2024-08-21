---
sidebar_position: 2
---

[html5-qrcode](../) / Html5QrcodeFullConfig

# 介面: Html5QrcodeFullConfig

[Html5Qrcode](../classes/Html5Qrcode.md) 的完整配置介面。

注意：理想情況下，我們不需要這兩個介面，但由於在 2.0.8 版本之前的公共 API 允許將布林值的 verbose 標誌傳遞給構造函數，因此我們需要允許使用者傳遞 Html5QrcodeFullConfig 或布林值標誌以保持向後兼容性。在未來的版本中，這兩個介面可以合併。

## 階層

- `Html5QrcodeConfigs`

  ↳ **`Html5QrcodeFullConfig`**

## 內容

### 屬性

- [experimentalFeatures](Html5QrcodeFullConfig.md#experimentalfeatures)
- [formatsToSupport](Html5QrcodeFullConfig.md#formatstosupport)
- [useBarCodeDetectorIfSupported](Html5QrcodeFullConfig.md#usebarcodedetectorifsupported)
- [verbose](Html5QrcodeFullConfig.md#verbose)

## 屬性

### experimentalFeatures

• `Optional` **experimentalFeatures**: `ExperimentalFeaturesConfig`

實驗性功能的配置。

預設情況下所有設定均為 false。

#### 繼承自

Html5QrcodeConfigs.experimentalFeatures

#### 定義於

[html5-qrcode.ts:104](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L104)

___

### formatsToSupport

• `Optional` **formatsToSupport**: [`Html5QrcodeSupportedFormats`](../enums/Html5QrcodeSupportedFormats.md)[]

支援的格式類型，為 [Html5QrcodeSupportedFormats](../enums/Html5QrcodeSupportedFormats.md) 的陣列。

所有無效的值將被忽略。如果為 null 或 undefined，則會使用所有支援的格式進行掃描。除非你希望僅限於某些格式或想要提高效能，否則不應設定此值。

#### 繼承自

Html5QrcodeConfigs.formatsToSupport

#### 定義於

[html5-qrcode.ts:83](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L83)

___

### useBarCodeDetectorIfSupported

• `Optional` **useBarCodeDetectorIfSupported**: `boolean`

BarcodeDetector 目前正在由瀏覽器實現。
目前瀏覽器的支援非常有限，但隨著它的可用性增加，可能會
啟用更快速的原生程式碼掃描體驗。

將此標誌設定為 true，以啟用支援時使用 BarcodeDetector。
預設情況下，此值為 true。

檔案：
 - https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector
 - https://web.dev/shape-detection/#barcodedetector

#### 繼承自

Html5QrcodeConfigs.useBarCodeDetectorIfSupported

#### 定義於

[html5-qrcode.ts:97](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L97)


___

### verbose

• **verbose**: `undefined` \| `boolean`

如果為 true，所有日誌將會輸出到 console。預設為 false。

#### 定義於

[html5-qrcode.ts:120](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L120)
