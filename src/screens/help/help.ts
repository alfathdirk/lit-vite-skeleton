import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('x-help')
export class Help extends LitElement {
    @property() name = 'Skaleup Lit';


    createRenderRoot (): Element {
      return this;
    }

    render() {
      return html`<h1>Help</h1>`;
    }
}
