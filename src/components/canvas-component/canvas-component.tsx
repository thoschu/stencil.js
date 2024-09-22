import {
  Component,
  Element,
  h,
  Host,
  Method,
  Prop,
  State,
} from "@stencil/core";
import { appendTemp, clipboard, getCanvas, getElements } from "@/utils";

export type Options = {
  allowTaint?: boolean; // Whether to allow cross-origin images to taint the canvas
  backgroundColor?: string | null; // Canvas background color, set to null for transparent
  canvas?: HTMLCanvasElement | null; // Existing canvas element to use as a base for drawing
  foreignObjectRendering?: boolean; // Whether to use ForeignObject rendering if supported
  imageTimeout?: number; // Timeout for loading an image (in milliseconds), 0 to disable
  ignoreElements?: (element: HTMLElement) => boolean; // Predicate function to remove matching elements
  logging?: boolean; // Enable logging for debug purposes
  onclone?: ((doc: Document) => void) | null; // Callback function for cloned document
  proxy?: string | null; // URL to proxy for loading cross-origin images
  removeContainer?: boolean; // Whether to cleanup the cloned DOM elements
  scale?: number; // The scale to use for rendering, defaults to device pixel ratio
  useCORS?: boolean; // Whether to attempt to load images from a server using CORS
  width?: number; // The width of the canvas
  height?: number; // The height of the canvas
  x?: number; // Crop canvas x-coordinate
  y?: number; // Crop canvas y-coordinate
  scrollX?: number; // The x-scroll position to use when rendering the element
  scrollY?: number; // The y-scroll position to use when rendering the element
  windowWidth?: number; // Window width to use when rendering the element
  windowHeight?: number; // Window height to use when rendering the element
};

@Component({
  tag: "canvas-component",
  styleUrl: "canvas-component.scss",
  shadow: true,
})
export class CanvasComponent {
  private static dataUrl: string;
  private readonly tempHTMLElement: HTMLElement;

  /**
   * The copy property for activate copy to clipboad
   */
  @Prop({ attribute: "copy", reflect: false, mutable: false }) copy: boolean =
    false;

  /**
   * The type property for image type
   */
  @Prop({ attribute: "type", reflect: false, mutable: false }) type:
    | "canvas"
    | "image" = null;

  /**
   * The config property for canvas generation config
   */
  @Prop() config: Options = {
    useCORS: true,
  };

  @Element() private readonly hostHTMLElement: HTMLCanvasComponentElement;

  @State() private stage: HTMLImageElement | HTMLCanvasElement | HTMLElement;

  private readonly imgElement: HTMLImageElement;
  private canvas: HTMLCanvasElement;

  constructor() {
    this.tempHTMLElement = document.createElement<"object">("object");
    this.imgElement = document.createElement<"img">("img");
  }

  /**
   * Public API to get content during runtime
   */
  @Method()
  public async get(
    type: "canvas" | "image" = null,
  ): Promise<string | HTMLImageElement | HTMLCanvasElement> {
    switch (type) {
      case "canvas":
        return this.canvas;
      case "image":
        return this.imgElement;
      default:
        return CanvasComponent.dataUrl;
    }
  }

  protected async componentDidLoad(): Promise<void> {
    const { elements }: { elements: Element[] } = getElements(
      this.hostHTMLElement,
    );
    const element: HTMLElement = appendTemp(elements, this.tempHTMLElement);
    this.set(
      await getCanvas(element, this.config).then(
        (canvas: HTMLCanvasElement): HTMLCanvasElement => {
          this.tempHTMLElement.remove();

          return canvas;
        },
      ),
    );
  }

  private set(canvas: HTMLCanvasElement): void {
    CanvasComponent.dataUrl = canvas.toDataURL("image/png");

    this.imgElement.setAttribute("src", CanvasComponent.dataUrl);
    this.imgElement.setAttribute("data-created", Date.now().toString());
    this.imgElement.setAttribute("width", canvas.width.toString());
    this.imgElement.setAttribute("height", canvas.height.toString());
    this.imgElement.style.aspectRatio = "1";

    this.canvas = canvas;

    switch (this.type) {
      case "image": {
        this.stage = this.imgElement;
        break;
      }
      case "canvas": {
        this.stage = this.canvas;
        break;
      }
      default: {
        const { elements }: { elements: Element[] } = getElements(
          this.hostHTMLElement,
        );
        this.stage = appendTemp(elements, this.tempHTMLElement);
        break;
      }
    }

    this.hostHTMLElement.shadowRoot.appendChild<HTMLElement>(this.stage);
  }

  private async hostClick(evt: Event): Promise<void> {
    const clipped: boolean = await clipboard(CanvasComponent.dataUrl);

    evt.stopPropagation();

    console.info(`Copy base64 encoded image (png) to clipboard: ${clipped}`);
  }

  protected render(): Element {
    return (
      <Host onClick={this.copy && this.hostClick}>
        <template>
          <slot />
        </template>
      </Host>
    );
  }
}
