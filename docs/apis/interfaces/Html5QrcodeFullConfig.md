---
sidebar_position: 2
---

[html5-qrcode](../) / Html5QrcodeFullConfig

# Interface: Html5QrcodeFullConfig

Interface for full configuration of [Html5Qrcode](../classes/Html5Qrcode.md).

Notes: Ideally we don't need to have two interfaces for this purpose, but
since the public APIs before version 2.0.8 allowed passing a boolean verbose
flag to constructor we need to allow users to pass Html5QrcodeFullConfig or
boolean flag to be backward compatible.
In future versions these two interfaces can be merged.

## Hierarchy

- `Html5QrcodeConfigs`

  ↳ **`Html5QrcodeFullConfig`**

## Table of contents

### Properties

- [experimentalFeatures](Html5QrcodeFullConfig.md#experimentalfeatures)
- [formatsToSupport](Html5QrcodeFullConfig.md#formatstosupport)
- [useBarCodeDetectorIfSupported](Html5QrcodeFullConfig.md#usebarcodedetectorifsupported)
- [verbose](Html5QrcodeFullConfig.md#verbose)

## Properties

### experimentalFeatures

• `Optional` **experimentalFeatures**: `ExperimentalFeaturesConfig`

Config for experimental features.

Everything is false by default.

#### Inherited from

Html5QrcodeConfigs.experimentalFeatures

#### Defined in

[html5-qrcode.ts:104](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L104)

___

### formatsToSupport

• `Optional` **formatsToSupport**: [`Html5QrcodeSupportedFormats`](../enums/Html5QrcodeSupportedFormats.md)[]

Array of formats to support of type [Html5QrcodeSupportedFormats](../enums/Html5QrcodeSupportedFormats.md).

All invalid values would be ignored. If null or underfined all supported
formats will be used for scanning. Unless you want to limit the scan to
only certain formats or want to improve performance, you should not set
this value.

#### Inherited from

Html5QrcodeConfigs.formatsToSupport

#### Defined in

[html5-qrcode.ts:83](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L83)

___

### useBarCodeDetectorIfSupported

• `Optional` **useBarCodeDetectorIfSupported**: `boolean`

BarcodeDetector is being implemented by browsers at the moment.
It has very limited browser support but as it gets available it could
enable faster native code scanning experience.

Set this flag to true, to enable using BarcodeDetector if
supported. This is true by default.

Documentations:
 - https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector
 - https://web.dev/shape-detection/#barcodedetector

#### Inherited from

Html5QrcodeConfigs.useBarCodeDetectorIfSupported

#### Defined in

[html5-qrcode.ts:97](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L97)

___

### verbose

• **verbose**: `undefined` \| `boolean`

If true, all logs would be printed to console. False by default.

#### Defined in

[html5-qrcode.ts:120](https://github.com/mebjas/html5-qrcode/blob/600717e/src/html5-qrcode.ts#L120)
