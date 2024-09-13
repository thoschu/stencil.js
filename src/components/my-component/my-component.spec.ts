import { newSpecPage } from "@stencil/core/testing";
import { MyComponent } from "./my-component";

describe("my-component", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: "<my-component></my-component>",
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
            <span></span>
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm <span>Stencil 'Don't call me a framework' JS</span>
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
