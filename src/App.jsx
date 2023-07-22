import { RouterProvider } from "react-router-dom"
import { router } from "./Router/router"
import { Toaster } from "react-hot-toast"

function App() {


  return (
    <div className="main-div">
        <Toaster/>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}

export default App
