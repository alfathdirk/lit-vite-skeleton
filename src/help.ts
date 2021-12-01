import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('x-app')
export class LitApp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    @property() name = 'Skaleup Lit';

    render() {
      return html`<h1>Help</h1>`;
    }
}
