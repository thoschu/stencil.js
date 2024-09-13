import { Component, Host, h, VNode, Prop, State } from "@stencil/core";

@Component({
  tag: "test-component",
  styleUrl: "test-component.scss",
  shadow: true,
})
export class TestComponent {
  @Prop() public readonly name: string;
  @Prop() public readonly email: string;
  @State() private isVisible: boolean = false;

  constructor() {
    setTimeout((): void => {
      this.isVisible = true;
    }, 3000);
  }

  render(): VNode {
    return (
      <Host>
        <header class="header-card">
          <slot name="my-header" />
          <h1>{this.name}</h1>
        </header>
        <main class="main-card">
          <p>{this.isVisible && <span>{this.email}</span>}</p>
        </main>
        <footer class="footer-card">
          <slot name="my-footer" />
        </footer>
      </Host>
    );
  }
}
