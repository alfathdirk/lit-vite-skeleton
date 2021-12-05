import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import fetchData from '../../lib/fetch';
import '../../components/dataTable';
import { XView } from '../../XView';
interface IPagination {
  limit?: number;
  next?: boolean;
  prev?: boolean;
  totalPage?: number;
  totalRow?: number;
  page?: number;
}
@customElement('x-home')
export class Home extends XView {
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
        onPress: (s: any) => this.doSome(s),
        icon: html`<i class="fas fa-fw fa-table"></i>`
      },
      details: {
        onPress: (s: any) => this.doSome(s),
        icon: html`<i class="fas fa-fw fa-table"></i>`
      }
    }

    constructor() {
      super();
      this.addEventListener('view-connected', () => {
        this.getData();
      })
    }

    doSome(s: any) {
      console.log(s);
    }

    createRenderRoot (): Element {
      return this;
    }

    async getData () {
      let data = await fetchData(`/user-business?page=${this.page}&limit=${this.limit}`).get();
      this.data = data;
    }

    changePages(page: number) {
      this.page = page;
      this.getData()
      this.requestUpdate();
    }

    render() {
      return html`
        <div class="row">
          <div class="col-12">
            <div class="card my-4">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 class="text-white text-capitalize ps-3">User Questioner</h6>
                </div>
              </div>
              <div class="card-body px-0 pb-2 m-2">
                <x-data-table .data="${this.data}" .changePage="${this.changePages.bind(this)}" .page="${this.page}" .columns="${this.columns}" .actions="${this.actions}"></x-data-table>
              </div>
            </div>
          </div>
        </div>
      `;
    }
}
