import{ createBrowserRouter } from 'react-router-dom'
import Home from "../pages/home"
import ErrorPage from '../pages/errorPage'
import Presentation from '../pages/presentation'
import Contact from '../pages/contact'
const router = createBrowserRouter([
  {
    path: "/",
        element: <Home />,
        children: [
            {
                path: "home",
                element: <Presentation />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
              path: '/products',
              element: <h1>Goods</h1>
          },
          {
             path: "/goods",
             element: <h1>element</h1>
           }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <h1>Contact page</h1>
  }
])

export default router