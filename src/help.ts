import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('x-help')
export class LitApp extends LitElement {
    @property() name = 'Skaleup Lit';

    render() {
      return html`<h1>Help</h1>`;
    }
}
