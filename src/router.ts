import { ComponentType } from 'react';
import Gallery from './pages/Gallery';
import Picture from './pages/Picture';

interface SingleRoute {
  path: string;
  component: ComponentType;
}

const router = [
  {
    path: '/',
    component: Gallery,
  },
  {
    path: '/picture/:id',
    component: Picture,
  },
];

export default router;
