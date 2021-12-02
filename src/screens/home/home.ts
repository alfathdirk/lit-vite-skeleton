import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
@customElement('x-home')
export class Home extends LitElement {

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


    render() {
      return html`
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">User Question List</h6>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
      `;
    }
}
