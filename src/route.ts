const routes = [
  {
    path: '/',
    component: 'x-home',
    action: async () => {
      await import('./screens/home/home');
    },
  },
  {
    path: '/help',
    component: 'x-help',
    action: async () => {
      await import('./screens/help/help');
    },
  },
  {
    path: '/about',
    component: 'x-about',
    action: async () => {
      await import('./screens/about/about');
    },
  },
  {
    path: '/login',
    component: 'x-login',
    action: async () => {
      await import('./screens/login/login');
    },
  }
];

export default routes;
