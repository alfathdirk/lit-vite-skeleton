import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import fetchData from '../../lib/fetch';
import '../../components/dataTable';
interface IPagination {
  limit?: number;
  next?: boolean;
  prev?: boolean;
  totalPage?: number;
  totalRow?: number;
  page?: number;
}
@customElement('x-home')
export class Home extends LitElement {
    @state() data = {};
    @state() page = 1;
    @state() limit = 10;
    // @state() pagination: IPagination = {};
    columns = [
      {
        selector: (row: any) => row.id,
        name: 'Id',
        maxWidth: 500,
        editable: false,
      },
      {
        selector: (row: any) => row.name,
        name: 'Name',
        maxWidth: 500,
        editable: true,
        // cell: (row: any) => html`<p>${row.id}</p>`,
      },
      {
        selector: (row: any) => row.phone,
        name: 'Phone',
        maxWidth: 500,
        editable: true,
      },
      {
        selector: (row: any) => row.score,
        name: 'Score',
        maxWidth: 500,
        editable: true,
      },
    ];

    actions = {
      detail: {
        onPress: (s) => this.doSome(s),
        icon: html`<i class="fas fa-fw fa-table"></i>`
      },
      details: {
        onPress: (s) => this.doSome(s),
        icon: html`<i class="fas fa-fw fa-table"></i>`
      }
    }

    doSome(s) {
      console.log(s);
    }

    createRenderRoot (): Element {
      return this;
    }

    async getData () {
      let data = await fetchData(`/user-business?page=${this.page}&limit=${this.limit}`).get();
      this.data = data;
    }

    connectedCallback() {
      super.connectedCallback();
      this.getData();
    }

    changePages(page: number) {
      this.page = page;
      this.getData()
      this.requestUpdate();
    }

    render() {
      return html`
        <div class="card shadow mb-4">
          <x-data-table .data="${this.data}" .changePage="${this.changePages.bind(this)}" .page="${this.page}" .columns="${this.columns}" .actions="${this.actions}"></x-data-table>
        </div>
      `;
    }
}
