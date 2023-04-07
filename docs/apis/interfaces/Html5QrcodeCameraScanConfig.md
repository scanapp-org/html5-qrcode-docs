---
sidebar_position: 3
---

[html5-qrcode](../) / Html5QrcodeCameraScanConfig

# Interface: Html5QrcodeCameraScanConfig

Configuration type for scanning QR code with camera.

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

Optional, Desired aspect ratio for the video feed. Ideal aspect ratios
are 4:3 or 16:9. Passing very wrong aspect ratio could lead to video feed
not showing up.

#### Defined in

[html5-qrcode.ts:164](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L164)

___

### disableFlip

• `Optional` **disableFlip**: `boolean`

Optional, if `true` flipped QR Code won't be scanned. Only use this
if you are sure the camera cannot give mirrored feed if you are facing
performance constraints.

#### Defined in

[html5-qrcode.ts:171](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L171)

___

### fps

• **fps**: `undefined` \| `number`

Optional, Expected framerate of qr code scanning. example `{ fps: 2 }` means the
scanning would be done every `500 ms`.

#### Defined in

[html5-qrcode.ts:131](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L131)

___

### qrbox

• `Optional` **qrbox**: `number` \| `QrDimensions` \| `QrDimensionFunction`

Optional, edge size, dimension or calculator function for QR scanning
box, the value or computed value should be smaller than the width and
height of the full region.

This would make the scanner look like this:
         ----------------------
         |********************|
         |******,,,,,,,,,*****|      <--- shaded region
         |******|       |*****|      <--- non shaded region would be
         |******|       |*****|          used for QR code scanning.
         |******|_______|*****|
         |********************|
         |********************|
         ----------------------

Instance of QrDimensions can be passed to construct a non
square rendering of scanner box. You can also pass in a function of type
QrDimensionFunction that takes in the width and height of the
video stream and return QR box size of type QrDimensions.

If this value is not set, no shaded QR box will be rendered and the
scanner will scan the entire area of video stream.

#### Defined in

[html5-qrcode.ts:157](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L157)

___

### videoConstraints

• `Optional` **videoConstraints**: `MediaTrackConstraints`

Optional, @beta(this config is not well supported yet).

Important: When passed this will override other parameters like
'cameraIdOrConfig' or configurations like 'aspectRatio'.
'videoConstraints' should be of type MediaTrackConstraints as
defined in
https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints
and is used to specify a variety of video or camera controls like:
aspectRatio, facingMode, frameRate, etc.

#### Defined in

[html5-qrcode.ts:184](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L184)
