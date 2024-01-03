import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { TypeScriptMonoreposAreAMess } from './TypeScriptMonoreposAreAMess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TypeScriptMonoreposAreAMess />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
