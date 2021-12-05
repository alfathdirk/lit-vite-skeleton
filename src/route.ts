const routes = [
  {
    path: '/',
    component: 'x-dashboard',
    action: async () => {
      await import('./screens/dashboard/dashboard');
    },
  },
  {
    path: '/home',
    component: 'x-home',
    action: async () => {
      await import('./screens/home/home');
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
