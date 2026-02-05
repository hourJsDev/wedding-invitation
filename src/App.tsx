import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // The layout wraps the children
    children: [
      {
        index: true, // This makes Home the default at "/"
        element: <Home />,
      },
      // {
      //   path: "project",
      //   element: <ProjectLayout />,
      //   children: [
      //     {
      //       path: ":id",
      //       element: <ProjectDetail />,
      //     },
      //   ],
      // },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
