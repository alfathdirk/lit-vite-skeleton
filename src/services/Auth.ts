import { createEvent } from '../lib/event';
import axios from 'axios';

interface Claims {
  subject: string;
}

interface Credential {
  username: string;
  password: string;
}

interface TokenCredential {
  token: string;
}

export class AuthService {
  claims!: Claims;

  constructor (private target: EventTarget, private http: any, public token?: string) {}

  loggedIn (): boolean {
    return Boolean(this.token);
  }

  async login (body: Credential): Promise<void> {
    // this.token = token;
    this.target.dispatchEvent(createEvent('auth-changed', this));
  }

  logout (): Promise<void> {
    this.token = '';
    this.target.dispatchEvent(createEvent('auth-changed', this));
    return Promise.resolve();
  }
}
