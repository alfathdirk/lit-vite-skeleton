import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { XView } from '../../XView';

@customElement('x-dashboard')
export class Dashboard extends XView {
    @property() name = 'Skaleup Lit';

    render() {
      return html`<h1>Dashboard</h1>`;
    }
}
