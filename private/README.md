
# @thoschu/canvas-component Project

This project is built with [Stencil.js](https://stenciljs.com/), a compiler for building fast, reusable Web Components. The project leverages Stencil to create modern, framework-agnostic components that can be used in any web application, including those built with frameworks like Angular, React, or Vue.js.

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

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd stencil.js
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Development

To start the development server and begin building components:

```bash
npm start
```

This will launch a local development server with live-reload functionality. Any changes made to the components in the `src/` folder will automatically trigger a browser reload.

## Building the Project

To create a production build of the components, run:

```bash
npm run build
```

The compiled files will be output to the `www/` and `dist/` directories. These files can be used in a standalone fashion or integrated into other projects.

## Usage in Other Projects

### Using via UNPKG

To use the Stencil components directly from a CDN without installing anything, you can import them from **unpkg**. For example, include the following script in your HTML:

```html
<script type="module" src="https://unpkg.com/my-stencil-components/dist/my-stencil-components/my-stencil-components.esm.js"></script>
```

For browsers that don't support ES modules, use the following fallback:

```html
<script nomodule src="https://unpkg.com/my-stencil-components/dist/my-stencil-components/my-stencil-components.js"></script>
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
   <script type="module" src="https://unpkg.com/my-stencil-components/dist/my-stencil-components/my-stencil-components.esm.js"></script>
   <script nomodule src="https://unpkg.com/my-stencil-components/dist/my-stencil-components/my-stencil-components.js"></script>>
</head>
<body>
<div id="shadowHost">
   <h1>The template Element</h1>
   <p>
      Click the button below to display the hidden content from the template
      element.
   </p>
   <button onclick="showContent()">Show hidden content</button>
   <template>
      <h2>Flower</h2>
      <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPnRal9NWxRQWlJrBgJCfYcbTwoSkBCHe-Q&s"
              width="214"
              height="204"
              alt=""
      />
   </template>
   <script>
      function showContent() {
         let temp = document.getElementsByTagName("template")[0]
         let button = document.getElementsByTagName("button")[0]
         let clon = temp.content.cloneNode(true)
         document.body.prepend(clon)
         button.disabled = true
      }
   </script>
</div>
<hr />
<canvas-component copy="true" type="canvas">
   <style>
      @scope {
         .card {
            transition: 0.3s;
            width: 40%;
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
      <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
              alt="Avatar"
      />
      <div class="container">
         <h1>Hello World</h1>
         <h4><b>John Doe</b></h4>
         <p>Architect & Engineer</p>
      </div>
   </div>
</canvas-component>
<hr />
</body>
</html>
```

### Using with Angular

To integrate these components into an Angular application, follow these steps:

1. **Install the Component Library**:

   If the Stencil components are published as an npm package, you can install them with:

   ```bash
   npm install my-stencil-components
   ```

   Alternatively, you can use the files from the `dist/` folder directly in your Angular project.

2. **Enable Web Components in Angular**:

   Modify your `polyfills.ts` to include support for custom elements:

   ```typescript
   import '@webcomponents/custom-elements';
   ```

3. **Use the Components in Angular**:

   You can now use the Stencil components directly in your Angular templates. For example:

   ```html
   <my-stencil-component></my-stencil-component>
   ```

   If Angular throws errors regarding unknown elements, update `tsconfig.json` as follows:

   ```json
   "compilerOptions": {
     "skipLibCheck": true,
     "noImplicitAny": false
   }
   ```

### Using with React or Vue.js

Stencil components can be easily integrated into React and Vue.js as well. For React, you can wrap the web components in a React component using `createRef`. For Vue.js, the components can be directly used in the templates.

### Browser Support

Stencil components are compiled down to vanilla JavaScript, ensuring compatibility with all modern browsers. If older browsers are a concern, make sure to include the necessary polyfills.

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, feel free to open a pull request or file an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Additional Resources

For more information on using Stencil.js, check out the official [Stencil Documentation](https://stenciljs.com/docs).

## Features

Discover the different features supported by this web component

Below is a list of all the supported CSS properties and values.

- background
  - background-clip (Does not support text)
  - background-color
    - background-image
      - url()
      - linear-gradient()
      - radial-gradient()
    - background-origin
    - background-position
    - background-size
- border
  - border-color
  - border-radius
  border-style
  border-width
  bottom
  box-sizing
  content
  color
  display
  flex
  float
  font

font-family
font-size
font-style
font-variant
font-weight
height
left
letter-spacing
line-break
list-style

list-style-image
list-style-position
list-style-type
margin
max-height
max-width
min-height
min-width
opacity
overflow
overflow-wrap
padding
paint-order
position
right
text-align
text-decoration

text-decoration-color
text-decoration-line
text-decoration-style (Only supports solid)
text-shadow
text-transform
top
transform (Limited support)
visibility
white-space
width
webkit-text-stroke
word-break
word-spacing
word-wrap
z-index
Unsupported CSS properties
These CSS properties are NOT currently supported

background-blend-mode
border-image
box-decoration-break
box-shadow
filter
font-variant-ligatures
mix-blend-mode
object-fit
repeating-linear-gradient()
writing-mode
zoom