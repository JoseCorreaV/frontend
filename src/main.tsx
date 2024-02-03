import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Login from './routes/Login';
import Signup from './routes/Signup';
import ProtectedRoutes from './routes/protectedRoutes/ProtectedRoutes';
import SuperAdmin from './routes/usuarios/SuperAdmin';
import { AuthProvider } from './auth/AuthProvider';

/**
 * Configuración de las rutas
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {// ruta protegida
    path: "/", // ruta raiz
    element: <ProtectedRoutes />, // renderiza la protección de rutas
    //rutas adicionales o hijas de la ruta principal
    children: [
      {
        // ruta padre
        path: "/superAdmin",
        element: <SuperAdmin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  
  </React.StrictMode>,
)
