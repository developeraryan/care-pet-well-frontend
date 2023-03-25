import React from "react";
import App from "../containers/App/App";
import Home from "../components/pages/Home/Home";
import Rescue from "../components/pages/Rescue/Rescue";
import PetCare from "../components/pages/PetCare/PetCare";
import Adoption from "../components/pages/Adoption/Adoption";
import Breeder from "../components/pages/Breeder/Breeder";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rescue",
        element: <Rescue />,
      },
      {
        path: "/petcare",
        element: <PetCare />,
      },
      {
        path: "/adoption",
        element: <Adoption />,
      },
      {
        path: "/breeder",
        element: <Breeder />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

// const Routing = () => {
//   return <div>Routing</div>;
// };

export default router;
