# canvas-web-component

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description                                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default                    |
| -------- | --------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `config` | --        | The config property for canvas generation config | `{ allowTaint?: boolean; backgroundColor?: string; canvas?: HTMLCanvasElement; foreignObjectRendering?: boolean; imageTimeout?: number; ignoreElements?: (element: HTMLElement) => boolean; logging?: boolean; onclone?: (doc: Document) => void; proxy?: string; removeContainer?: boolean; scale?: number; useCORS?: boolean; width?: number; height?: number; x?: number; y?: number; scrollX?: number; scrollY?: number; windowWidth?: number; windowHeight?: number; }` | `{     useCORS: true,   }` |
| `copy`   | `copy`    | The copy property for activate copy to clipboad  | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `false`                    |
| `type`   | `type`    | The type property for image type                 | `"canvas" \| "image"`                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `null`                     |

## Methods

### `get(type?: "canvas" | "image") => Promise<string | HTMLImageElement | HTMLCanvasElement>`

Public API to get content during runtime

#### Parameters

| Name   | Type                  | Description |
| ------ | --------------------- | ----------- |
| `type` | `"canvas" \| "image"` |             |

#### Returns

Type: `Promise<string | HTMLCanvasElement | HTMLImageElement>`

---

_Built with [StencilJS](https://stenciljs.com/)_
