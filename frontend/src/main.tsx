import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Index from './pages/index'
import Mensa from './pages/mensa'
import Error from './pages/error'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <Error />,
  },
  {
    path: '/:city/:mensa',
    element: <Mensa />,
  },
  {
    path: '/error',
    element: <Error />,
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
