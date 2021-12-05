

import { accessor, lookup } from '@xlit/di';
import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { XView } from '../XView';

@customElement('x-sidebar')
class SideBar extends accessor()(XView) {
  @property({ type: Boolean })
  isAuthorized!: any;

  @property({ type: String })
  router!: any;

  @lookup()
  app!: any;

  constructor() {
    super();
  }
  pressLogout() {
    this.app.auth.logout();
  }

  render() {
    return html`
        <div class="sidenav-header">
          <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
            <img src="https://picsum.photos/200/300" class="navbar-brand-img h-100 rounded" alt="main_logo">
            <span class="ms-1 font-weight-bold text-white">SkaleUp Admin</span>
          </a>
        </div>
        <hr class="horizontal light mt-0 mb-2">
        <div class="collapse navbar-collapse  w-auto max-height-vh-100" id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white ${this.router === '/' ? 'bg-gradient-primary' : ''}" href="/">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">dashboard</i>
                </div>
                <span class="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li class="nav-item mt-3">
              <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Main Menu</h6>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white ${this.router === '/home' ? 'bg-gradient-primary' : ''}" href="/home">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">home</i>
                </div>
                <span class="nav-link-text ms-1">Home</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    `
  }
}
