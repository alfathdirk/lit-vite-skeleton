import {html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { provide, container } from '@xlit/di';

import { Router } from '@vaadin/router';
import routes from './route';
import './components/navbar';

// import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './assets/js/sb-admin-2.min.js';
import 'jquery.easing/jquery.easing.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/sb-admin-2.min.css';
import './assets/css/global.css';

@customElement('x-app')
export class App extends container()(LitElement) {

  @state()
  isAuthorized = true;

  @provide()
  app = this;


  createRenderRoot (): Element {
    return this;
  }

  firstUpdated() {
    const outlet = document.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
    if(location.pathname === '/login') {
      this.isAuthorized = false;
    }
  }

  render() {
    return html`
      <div id="wrapper">
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" ?hidden="${!this.isAuthorized}">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            <hr class="sidebar-divider my-0">
            <li class="nav-item">
                <a class="nav-link" href="/">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            <hr class="sidebar-divider">

            <div class="sidebar-heading">
                Admin Menu
            </div>

            <li class="nav-item">
                <a class="nav-link" href="/">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Users</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/help">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Industries</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/help">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Banner</span></a>
            </li>
            <hr class="sidebar-divider d-none d-md-block">

            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">
              <x-navbar></x-navbar>
                <!-- Topbar -->
              <div class="container-fluid" id="outlet"></div>
            </div>
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    `;
  }
}
