import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Spinner from "./components/Spinner";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";

const Layout = () => {
  const { state } = useNavigation();
  return (
    <>
      <Navigation />
      <div className="ml-12">
        {state === "loading" ? <Spinner /> : <Outlet />}
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: () => fetch("Data.json"),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
