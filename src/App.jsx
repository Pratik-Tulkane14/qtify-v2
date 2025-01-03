import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Router from "./components/Router";
import PlayList from "./components/PlayList";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Router /> },
        { path: "/songs", element: <PlayList /> },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
