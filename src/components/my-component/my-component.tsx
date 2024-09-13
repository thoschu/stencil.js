import { Component, Prop, h, VNode } from "@stencil/core";
import { format } from "@/utils";

@Component({
  tag: "my-component",
  styleUrl: "my-component.scss",
  shadow: true,
})
export class MyComponent {
  private static readonly defaultText: string = "Hello, World! I'm";

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render(): VNode {
    return (
      <div>
        {MyComponent.defaultText} <span>{this.getText()}</span>
      </div>
    );
  }
}
