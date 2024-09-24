
# @thoschu/canvas-web-component Project

This project is a Stencil.js web component that enables HTML content to be rendered into a canvas element or converted into an image. It supports various options for customization, including canvas size, cross-origin image handling, and clipboard integration.
This project is built with [Stencil.js](https://stenciljs.com/), a compiler for building fast, reusable Web Components. The project leverages Stencil to create modern, framework-agnostic components that can be used in any web application, including those built with frameworks like Angular, React, or Vue.js.

## Features

- Canvas Rendering: Convert HTML elements into a canvas or image.
- Clipboard Support: Easily copy the canvas as an image to the clipboard.
- Customizable Options: Fine-tune rendering settings, including background color, CORS handling, scaling, and more.
- Dynamic API: Methods to retrieve the current canvas or image at runtime.
- Shadow DOM Support: Encapsulated styling and rendering.

## Project Overview

- **src/**: Contains the main source code for the Stencil components.
- **www/**: The output folder for the web deployment build.
- **dist/**: Contains the compiled distribution files for reuse in other projects.
- **stencil.config.ts**: Configuration file for the Stencil compiler.
- **package.json**: Manages the dependencies, scripts, and project metadata.
- **tsconfig.json**: TypeScript configuration for the project.

## Prerequisites

To work with this project, ensure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

You can install the component using npm or include it directly via CDN.

### Using npm

```bash
npm install canvas-component
```

### Using unpkg

**https://stenciljs.com/docs/publishing**

If you prefer not to use npm, you can include the component directly from a CDN like **unpkg**.
For example, include the following script in your HTML:

> https://unpkg.com/browse/@thoschu/canvas-web-component@1.1.1/

```html
<script type="module" src="https://unpkg.com/@thoschu/canvas-web-component@1.0.1/dist/canvas-web-component/canvas-web-component.esm.js"></script>
```

For browsers that don't support ES modules, use the following fallback:

```html
<script nomodule src="https://unpkg.com/browse/@thoschu/canvas-web-component"></script>
```

This allows you to use the components directly in your HTML pages without the need for any installation.

```html
<!doctype html>
<html dir="ltr" lang="en">
    <head>
       <meta charset="utf-8" />
       <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
       />
       <title>Stencil Component Starter</title>
       <script type="module" src="https://unpkg.com/stencil-components/dist/stencil-components/stencil-components.esm.js"></script>
       <script nomodule src="https://unpkg.com/stencil-components/dist/stencil-components/stencil-components.js"></script>>
    </head>
    <body>
        <canvas-component copy="true" type="canvas">
           <style>
              @scope {
                 .card {
                    width: 100%;
                 }
        
                 img {
                    width: 250px;
                    height: 250px;
                    border: 3px #333 solid;
                    border-radius: 50%;
                 }
        
                 .container {
                    padding: 2px 16px;
                    border: 1px orchid dotted;
                 }
        
                 h4 {
                    color: blue;
                 }
        
                 p {
                    color: red;
                 }
              }
           </style>
           <div class="card">
              <img src="https://res.cloudinary.com/dzupkajfz/image/upload/v1727020614/images_cwpe0k.png" alt="Avatar" />
              <div class="container">
                 <h1>Hello World</h1>
                 <h4><b>Tom S.</b></h4>
                 <p>Architect & Engineer from Hamburg - Germany</p>
              </div>
           </div>
        </canvas-component>
        <hr />
    </body>
</html>
```

## Usage

Once included, you can use the `canvas-component` in your HTML like any other element.

### Basic Example

```html
<canvas-component></canvas-component>
```

### Copy to Clipboard Example

To enable copying the canvas content to the clipboard on click, use the `copy` property:

```html
<canvas-component copy="true"></canvas-component>
```

### Set Image Type

Specify whether the component should render as a canvas or an image using the `type` property:

```html
<canvas-component type="image"></canvas-component>
```

## Configuration

The `config` property allows you to customize how the HTML content is rendered into the canvas. Below are the available options:

### Config Options

- **`allowTaint`**: Boolean indicating whether to allow cross-origin images to taint the canvas.
- **`backgroundColor`**: The background color of the canvas. Use `null` for a transparent background.
- **`canvas`**: An existing canvas element to use for drawing.
- **`foreignObjectRendering`**: Enable foreign object rendering, where supported.
- **`imageTimeout`**: Timeout for loading images in milliseconds.
- **`ignoreElements`**: Function to ignore certain elements during rendering.
- **`logging`**: Enable logging for debugging.
- **`onclone`**: Callback function for modifying the cloned document before rendering.
- **`proxy`**: URL of a proxy to load cross-origin images.
- **`removeContainer`**: Whether to remove temporary DOM elements after rendering.
- **`scale`**: The scaling factor for rendering. Defaults to the device pixel ratio.
- **`useCORS`**: Boolean for attempting to load images with CORS to avoid tainting.
- **`width`**: The width of the canvas.
- **`height`**: The height of the canvas.
- **`x`, `y`**: Coordinates for cropping the canvas.
- **`scrollX`, `scrollY`**: Scroll positions for rendering the element.
- **`windowWidth`, `windowHeight`**: The window dimensions for rendering.

### Example with Configuration

```html
<canvas-component
  copy="true"
  type="canvas"
  config='{
    "backgroundColor": "#fff",
    "width": 600,
    "height": 400,
    "scale": 2,
    "useCORS": true
  }'
></canvas-component>
```

## API Methods

- **`get(type: "canvas" | "image")`**: Returns the current canvas or image element.

### Example Usage

```typescript
const canvasComponent = document.querySelector('canvas-component');

// Get the canvas element
const canvas = await canvasComponent.get('canvas');

// Get the image element
const image = await canvasComponent.get('image');
```

## Angular Integration

You can use this web component in an **Angular** project by following these steps:

### Step 1: Install the Component

First, install the component via npm:

```bash
npm install canvas-component
```

### Step 2: Add Custom Elements Schema

Update your `AppModule` to include `CUSTOM_ELEMENTS_SCHEMA` to support custom elements:

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Step 3: Add Scripts to `angular.json`

Add the JavaScript files for the web component to the `scripts` section in `angular.json`:

```json
{
  "scripts": [
    "node_modules/canvas-component/dist/canvas-component/canvas-component.js"
  ]
}
```

or like this:

```typescript 
import { APP_INITIALIZER, ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { defineCustomElements } from '@thoschu/canvas-web-component/loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ],
};

```

### Step 4: Use the Component in Angular

Now you can use the `canvas-component` in your Angular templates:

```html
<canvas-component copy="true"></canvas-component>
```

### Using with React or Vue.js

Stencil components can be easily integrated into React and Vue.js as well. For React, you can wrap the web components in a React component using `createRef`. For Vue.js, the components can be directly used in the templates.

### Browser Support

Stencil components are compiled down to vanilla JavaScript, ensuring compatibility with all modern browsers. If older browsers are a concern, make sure to include the necessary polyfills.

## Features

Discover the different features supported by this web component

### Below is a list of all the supported CSS properties and values.

- background
  + background-clip (Does not support text)
  + background-color
  + background-image
    * url()
    * linear-gradient()
    * radial-gradient()
  + background-origin
  + background-position
  + background-size
- border
  + border-color
  + border-radius
  + border-style
  + border-width
- bottom
- box-sizing
- content
- color
- display
- flex
- float
- font
  + font-family
  + font-size
  + font-style
  + font-variant
  + font-weight
- height
- left
- letter-spacing
- line-break
- list-style
  + mlist-style-image
  + list-style-position
  + list-style-type
- margin
- max-height
- max-width
- min-height
- min-width
- opacity
- overflow
- overflow-wrap
- padding
- paint-order
- position
- right
- text-align
- text-decoration
  + text-decoration-color
  + text-decoration-line
  + text-decoration-style (Only supports solid)
- text-shadow
- text-transform
- top
- transform (Limited support)
- visibility
- white-space
- width
- webkit-text-stroke
- word-break
- word-spacing
- word-wrap
- z-index

### Unsupported CSS properties

These CSS properties are NOT currently supported

- background-blend-mode
- border-image
- box-decoration-break
- box-shadow
- filter
- font-variant-ligatures
- mix-blend-mode
- object-fit
- repeating-linear-gradient()
- writing-mode
- zoom

## Development

1. Clone the repository:

```bash
git clone git@github.com:thoschu/stencil.js.git
cd stencil.js
```

2. Install the project dependencies:

```bash
npm install
```

3. Start the development server and begin building components:

```bash
npm start
```

This will launch a local development server with live-reload functionality. Any changes made to the components in the `src/` folder will automatically trigger a browser reload.

4. To create a production build of the components, run:

```bash
npm run build
```

The compiled files will be output to the `www/` and `dist/` directories. These files can be used in a standalone fashion or integrated into other projects.

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, feel free to open a pull request or file an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Additional Resources

For more information on using Stencil.js, check out the official [Stencil Documentation](https://stenciljs.com/docs).
