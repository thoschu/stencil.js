import { HTMLStencilElement } from "@stencil/core/internal";
import html2canvas from "html2canvas";

export async function clipboard(dataUrl: string): Promise<boolean> {
  return await navigator.clipboard
    .writeText(dataUrl)
    .then<boolean, never>((): boolean => true)
    .catch((err): boolean => {
      console.error(err);

      return false;
    });
}

export const appendTemp = (
  elements: Element[],
  temp: HTMLElement,
): HTMLElement => {
  elements.forEach(
    (element: Element): Element => temp.appendChild<Element>(element),
  );

  return document.body.appendChild(temp);
};

export const getElements = (
  hostHTMLElement: HTMLStencilElement,
): { elements: Element[] } => {
  const { shadowRoot }: { shadowRoot: ShadowRoot } = hostHTMLElement;
  const template: HTMLTemplateElement =
    shadowRoot.querySelector<"template">("template");
  const slotElement: HTMLSlotElement = template.querySelector<"slot">("slot");
  const elements: Element[] = slotElement.assignedElements({ flatten: true });

  return { elements };
};

export const getCanvas = async (
  element: HTMLElement,
  config: any,
): Promise<HTMLCanvasElement> => {
  const canvasPromise: Promise<HTMLCanvasElement> = html2canvas(
    element,
    config,
  );
  return await canvasPromise.then(
    (canvas: HTMLCanvasElement): HTMLCanvasElement => {
      return canvas;
    },
  );
};
