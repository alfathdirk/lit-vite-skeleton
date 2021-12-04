import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

interface IPagination {
  limit?: number;
  next?: boolean;
  prev?: boolean;
  totalPage?: number;
  totalRow?: number;
  page?: number;
}

@customElement('x-data-table')
export class DataTable extends LitElement {
    @property() data: any = {};
    @property() page = 1;
    @property() changePage = (val: number) => {};
    @property() columns = [];
    @property() actions: any = undefined;
    // @property() page = 1;
    // @state() pagination: IPagination = this.data.pagination;

    connectedCallback() {
      super.connectedCallback();
    }

    createRenderRoot (): Element {
      return this;
    }

    render() {
      return html`
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">User Question List</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive tbody">
            <table class="table table-hover">
              <thead style="position: sticky;top: 0" class="thead-dark">
                <tr>
                  ${[...this.columns, this.actions ? { name: 'Action '} : ''].filter((v: any) => v.name).map((v:any) => html`<th>${v.name}</th>`)}
                </tr>
              </thead>
              <tbody>
              ${this?.data?.rows?.map((v: any) => html`
                <tr>
                  ${this.columns.map((val:any) => html`
                    ${val.cell ? val.cell(v) : html`<td>${val.selector(v)}</td>` }
                  `)}
                  <td>${this.actions && Object.keys(this.actions).map((va: any) => html`<span @click="${this.actions[va].onPress.bind(this, v)}" class="mr-2">${this.actions[va].icon}</span>`)}</td>
                </tr>
              `)}

              </tbody>
            </table>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end mr-4">
            <li class="page-item ${!this?.data?.pagination?.prev && 'disabled'}">
              <a class="page-link" href="#" @click="${() => this.changePage(this.page - 1)}" tabindex="-1">Previous</a>
            </li>
            ${Array.from(Array(this?.data?.pagination?.totalPage).keys()).map((v) => html`<li class="page-item ${this?.data?.pagination?.page === v + 1 && 'active'}"><a class="page-link" @click="${() => this.changePage(v + 1)}" href="#">${v + 1}</a></li>`)}
            <li class="page-item ${!this?.data?.pagination?.next && 'disabled'}">
              <a class="page-link" href="#" @click="${() => this.changePage(this.page + 1)}">Next</a>
            </li>
          </ul>
        </nav>
      `
    }
}
