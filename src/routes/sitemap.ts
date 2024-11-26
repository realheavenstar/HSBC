

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'ri:dashboard-fill',
    active: true,
  },
  {
    id: 'activity',
    subheader: 'Activity',
    path: '#!',
    icon: 'ic:baseline-show-chart',
  },
  {
    id: 'Teams',
    subheader: 'Teams',
    path: '#!',
    icon: 'material-symbols:local-library-outline',
  },
  
  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'ic:outline-settings',
  },

  {
    id: 'ai',
    subheader: 'Ai Assistant',
    path: '#!',
    icon: 'ic:outline-smart-toy',

  },
];

export default sitemap;
