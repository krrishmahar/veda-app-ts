import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom'
import ErrorPage from './components/errors/errorpage.jsx'
import AdminPage from './AdminPage.jsx'
import RoomPage from './RoomPage.jsx'
import ContactPage from './ContactPage.jsx'
import BookPage from './BookPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/home'
      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: '/auth',
    element: <AdminPage />
  },
  {
    path: '/roompage',
    element: <RoomPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/booknow',
    element: <BookPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
