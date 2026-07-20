import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Dashboard from "./Dashboard"

export default  function App() {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
        {index: true, element: <Home/>},
        {path: "about", element: <About/>},
        {path: "services", element: <Services/>},
        {path: "dashboard/:adminID", element: <Dashboard /> }
      ]
  }
])

