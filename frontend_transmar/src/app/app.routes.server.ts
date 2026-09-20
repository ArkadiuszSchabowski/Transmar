import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'dashboard',
    renderMode: RenderMode.Client,
  },
  {
    path: 'product-list',
    renderMode: RenderMode.Client,
  },
  {
    path: 'assembly-line-list',
    renderMode: RenderMode.Client,
  },
  {
    path: 'workstation-list',
    renderMode: RenderMode.Client,
  },
  {
    path: 'assignment',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
