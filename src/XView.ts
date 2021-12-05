import { LitElement } from 'lit';
import { accessor } from '@xlit/di';
import { createEvent } from './lib/event';
export { html } from 'lit';

export class XView extends accessor()(LitElement) {
  createRenderRoot (): Element {
    return this;
  }

  connectedCallback (): void {
    super.connectedCallback();
    this.dispatchEvent(createEvent('view-connected', this));
  }

  disconnectedCallback (): void {
    super.disconnectedCallback();
    this.dispatchEvent(createEvent('view-disconnected', this));
  }
}
