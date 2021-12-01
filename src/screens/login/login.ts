import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { provide, container } from '@xlit/di';
import './login.css';

@customElement('x-login')
export class Login extends LitElement {

    createRenderRoot (): Element {
      return this;
    }

    connectedCallback() {
      super.connectedCallback();
      console.log('connected');
    }

    render() {
      return html`
        <div class="formBody">
          <form class="form-signin">
            <div class="text-center mb-4">
              <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
              <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            </div>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button">Login</button>
            </div>
          </form>
        </div>
      `;
    }
}
