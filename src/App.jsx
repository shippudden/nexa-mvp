import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Entry from "./pages/Entry"
import PropertyFeed from "./pages/PropertyFeed"
import PropertyDetails from "./pages/PropertyDetails"
import Agent from "./pages/Agent"
import Contact from "./pages/Contact"
import Success from "./pages/Success"
import RouteLayout from "./pages/RouteLayout"


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Entry />} />
      <Route path="propertyfeed" element={<PropertyFeed />} />
      <Route path="propertydetails/:id" element={<PropertyDetails />} />
      <Route path="agent/:agentId" element={<Agent />} />
      <Route path="contact/:agentId" element={<Contact />} />
      <Route path="success" element={<Success />} />
    </Route>
  ))

  return (
    <>
      {/* <div>Welcome to Nexa Space MVP</div> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
