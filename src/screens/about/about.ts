import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('x-about')
export class About extends LitElement {
    @property() name = 'Skaleup Lit';


    createRenderRoot (): Element {
      return this;
    }

    render() {
      return html`
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 class="text-white text-capitalize ps-3">Authors table</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2 m-2">
              asdf
            </div>
          </div>
        </div>
      </div>
      `;
    }
}
