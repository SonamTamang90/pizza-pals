import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import { PATHS } from "./paths";
import { Home, Menu, About, Shop, Contact } from "./lazyComponents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATHS.MENU,
        element: <Menu />,
      },
      {
        path: PATHS.ABOUT,
        element: <About />,
      },
      {
        path: PATHS.SHOP,
        element: <Shop />,
      },
      {
        path: PATHS.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);

export default router;
