
import {html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import { provide, container } from '@xlit/di';

import { Router } from '@vaadin/router';
import routes from './route';
import './components/navbar';
import './components/sideBar';
import { AuthService } from './services/Auth';
import fetchData from './lib/fetch';

@customElement('x-app')
export class App extends container()(LitElement) {

  @state()
  isAuthorized = false;

  @provide()
  app = this;

  @provide()
  fetchService = fetchData;

  @provide()
  auth = new AuthService(this, localStorage.token)

  @property({type: String})
  router!: string;

  createRenderRoot (): Element {
    return this;
  }

  firstUpdated() {
    const outlet = document.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
    this.isAuthorized = this.auth.loggedIn();

    if(location.pathname === '/login') {
      if(this.auth.loggedIn()) {
        Router.go('/');
        return;
      }
    }

    if(!this.auth.loggedIn()) {
      Router.go('/login');
      return;
    }
    // window.location.href = '/';
  }

  constructor() {
    super();
    this.addEventListener('auth-changed', () => {
      this.isAuthorized = this.auth.loggedIn();
      console.log(this.isAuthorized);
      if (this.auth.loggedIn()) {
        localStorage.token = this.auth.token;
        Router.go('/');
        return;
      }
      Router.go('/login');
      localStorage.clear();
    });

    this.addEventListener('view-connected', () => {
      // console.log(this);
      this.router = location.pathname;
    })
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      ${this.isAuthorized ? html`<x-sidebar router="${this.router}" class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main"></x-sidebar>` : ''}
      <main class="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
        <x-navbar ?hidden="${!this.isAuthorized}"></x-navbar>
        <div class="container-fluid px-2 px-md-4 bg-gray-100" id="outlet" ></div>
      </main>
    `;
  }
}
