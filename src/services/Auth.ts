import { createEvent } from '../lib/event';
import fetchData from '../lib/fetch';

interface Credential {
  username: string;
  password: string;
}

interface TokenCredential {
  token: string;
}

export class AuthService {

  constructor (private target: EventTarget, public token?: string) {}

  loggedIn (): boolean {
    return Boolean(this.token);
  }

  async login (body: Credential): Promise<void> {
    // fetchData()
    console.log('here login');
    let token = 'asdf';
    this.token = token;
    this.target.dispatchEvent(createEvent('auth-changed', this));
  }

  logout (): Promise<void> {
    this.token = '';
    this.target.dispatchEvent(createEvent('auth-changed', this));
    return Promise.resolve();
  }
}
