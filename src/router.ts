import { ComponentType } from 'react';
import Gallery from './pages/Gallery';
import Picture from './pages/Picture';
import Game from './pages/Game';

interface SingleRoute {
  path: string;
  component: ComponentType;
}

const router: SingleRoute[] = [
  // {
  //   path: '/',
  //   component: Gallery,
  // },
  {
    path: '/',
    component: Game,
  },
  {
    path: '/picture/:id',
    component: Picture,
  },
];

export default router;
