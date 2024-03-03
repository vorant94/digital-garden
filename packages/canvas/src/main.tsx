import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { TypescriptMonoreposAreAMess } from './TypescriptMonoreposAreAMess/TypescriptMonoreposAreAMess.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TypescriptMonoreposAreAMess />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
