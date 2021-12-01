import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { Router } from '@vaadin/router';

import routes from './route';

@customElement('x-app')
export class App extends LitElement {

  @property({ type: Boolean }) hideNavBar = false;

  createRenderRoot (): Element {
    return this;
  }

  firstUpdated() {
    const outlet = document.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }

  updated() {
    console.log('object');
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg navbar-light bg-light" ?hidden="${this.hideNavBar}">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/help">Help</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">Login</a>
                </li>
              </ul>

            </div>
          </div>
      </nav>
      <div id="outlet"></div>
    `;
  }
}
