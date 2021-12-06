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
    @state() data: any = {};
    @property({ type: Number }) page = 1;
    @property() changePage = (val: number) => {};
    @property({ type: Array }) columns: any = [];
    @property() actions: any = undefined;
    // @property() page = 1;
    // @state() pagination: IPagination = this.data.pagination;

    createRenderRoot (): Element {
      return this;
    }

    render() {
      return html`
        <div class="table-responsive tbody">
          <table class="table table-hover">
            <thead style="position: sticky;top: 0" >
              <tr>
                ${[...this.columns, this.actions ? { name: ' '} : ''].filter((v: any) => v.name).map((v:any) => html`<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">${v.name}</th>`)}
              </tr>
            </thead>
            <tbody>
            ${this?.data?.rows?.map((v: any) => html`
              <tr>
                ${this.columns.map((val:any) => html`
                  ${val.cell ? val.cell(v) : html`<td>
                  <span class="text-xs font-weight-bold">${val.selector(v)}</span>
                  </td>`}
                `)}
                <td>${this.actions && Object.keys(this.actions).map((va: any) => html`<span @click="${this.actions[va].onPress.bind(this, v)}" class="text-xs font-weight-bold cursor-pointer" style="margin-right: 10px">${this.actions[va].icon}</span>`)}</td>
              </tr>
              `)}

            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end mr-4">
            <li class="page-item ${!this?.data?.pagination?.prev && 'disabled'}">
              <a class="page-link" href="#" @click="${() => this.changePage(this.page - 1)}" tabindex="-1">
              <span aria-hidden="true">
                <span class="material-icons">
                  keyboard_arrow_left
                </span>
              </span>
              </a>
            </li>
            ${Array.from(Array(this?.data?.pagination?.totalPage).keys()).map((v) => html`<li class="page-item ${this?.data?.pagination?.page === v + 1 && 'active'}"><a class="page-link" @click="${() => this.changePage(v + 1)}" href="#">${v + 1}</a></li>`)}
            <li class="page-item ${!this?.data?.pagination?.next && 'disabled'}">
              <a class="page-link" href="#" @click="${() => this.changePage(this.page + 1)}">
                <span aria-hidden="true">
                  <span class="material-icons">
                    keyboard_arrow_right
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      `
    }
}
