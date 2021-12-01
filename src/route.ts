import { Router, template, component } from '@xlit/router';

const router = new Router(document.getElementById('outlet') as HTMLElement)
    .use(async (ctx: any, next: any) => {
    await next();
    // do something after
  })
  .route('/', component('x-app', () => import('./home')))
  .route('/help', component('x-app', () => import('./help')))
