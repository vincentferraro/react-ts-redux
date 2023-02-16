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
                path: 'contact',
                element: <Contact />
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