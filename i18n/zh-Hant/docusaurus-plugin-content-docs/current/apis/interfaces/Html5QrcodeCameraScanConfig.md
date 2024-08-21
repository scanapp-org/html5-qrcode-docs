---
sidebar_position: 3
---

[html5-qrcode](../) / Html5QrcodeCameraScanConfig

# Interface: Html5QrcodeCameraScanConfig

用於相機掃描 QR Code 的配置類型。

## Table of contents

### Properties

- [aspectRatio](Html5QrcodeCameraScanConfig.md#aspectratio)
- [disableFlip](Html5QrcodeCameraScanConfig.md#disableflip)
- [fps](Html5QrcodeCameraScanConfig.md#fps)
- [qrbox](Html5QrcodeCameraScanConfig.md#qrbox)
- [videoConstraints](Html5QrcodeCameraScanConfig.md#videoconstraints)

## Properties

### aspectRatio

• `Optional` **aspectRatio**: `number`

可選，視訊來源的期望長寬比。理想的長寬比為 4:3 或 16:9。傳遞不正確的長寬比可能會導致視訊無法顯示。

#### 定義於

[html5-qrcode.ts:164](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L164)

___

### disableFlip

• `Optional` **disableFlip**: `boolean`

可選，若為 `true`，則不會掃描翻轉的 QR Code 。僅在確定相機無法提供鏡像視訊源且你面臨效能限制時啟用此選項。


#### 定義於

[html5-qrcode.ts:171](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L171)

___

### fps

• **fps**: `undefined` \| `number`

可選，QR Code 掃描的期望幀率。例如 `{ fps: 2 }` 表示掃描將每 `500 ms` 完成一次。

#### 定義於

[html5-qrcode.ts:131](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L131)

___

### qrbox

• `Optional` **qrbox**: `number` \| `QrDimensions` \| `QrDimensionFunction`

可選，QR 掃描框的邊長、尺寸或計算函數，該值或計算值應小於完整區域的寬度和高度。

這將使掃描器看起來像這樣：
         ----------------------
         |********************|
         |******,,,,,,,,,*****|      <--- 陰影區域
         |******|       |*****|      <--- 非陰影區域將用於 QR Code 掃描。
         |******|       |*****|          
         |******|_______|*****|
         |********************|
         |********************|
         ----------------------

可以傳遞 QrDimensions 的實例來配置非正方形的掃描框渲染。你也可以傳遞一個 QrDimensionFunction 類型的函數，該函數接收影片流的寬度和高度並返回 QrDimensions 類型的 QR 框大小。

如果未設定此值，則不會渲染陰影 QR 框，掃描器將掃描整個影片流區域。


#### 定義於

[html5-qrcode.ts:157](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L157)

___

### videoConstraints

• `可選` **videoConstraints**: `MediaTrackConstraints`

可選，@beta（此設定尚未完全支援）。

重要：傳遞此參數時，將會覆蓋其他參數，如 'cameraIdOrConfig' 或配置，如 'aspectRatio'。'videoConstraints' 應為 MediaTrackConstraints 類型，如 https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints 中所定義，用於指定各種影片或相機控制，如：aspectRatio（長寬比）、facingMode（鏡頭方向）、frameRate（幀率）等。


#### 定義於

[html5-qrcode.ts:184](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L184)
