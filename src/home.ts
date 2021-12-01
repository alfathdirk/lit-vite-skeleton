import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import router from './route';
@customElement('x-app')
export class LitApp extends LitElement {

    @property() name = 'Skaleup Lit';

    createRenderRoot (): Element {
      return this;
    }

    connectedCallback() {
      super.connectedCallback();
      console.log('connected');
      setTimeout(() => {
        this.name = 'Skaleup Lit 2';
      }, 3000);
    }

    _goTo() {
       // kalo di klik, pindah ke route yg di tuju tapi malah muncul double route
      // router.push('/');
    }

    render() {
      return html`
        <div class="container">
          <div class="row">
            <div class="col">
              Column
            </div>
            <div class="col">
              ${this.name}
            </div>
            <div class="col">
              Column 3
            </div>
          </div>
        </div>
      `;
    }
}
