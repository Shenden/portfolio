//import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Records } from "./pages/Records";
import { Root } from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "portfolio",
        element: <Home title=" Hey, my name is André!" />,
      },
      { path: "records", element: <Records title="Vinyls!" /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
