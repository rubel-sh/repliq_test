import { createBrowserRouter } from "react-router-dom";
import CustomerLists from "../components/CustomerLists/CustomerLists";
import Home from "../Components/Home/Home";
import Login from "../components/Login/Login";
import ManageOrders from "../components/ManageOrders/ManageOrders";
import OnlinePayments from "../components/OnlinePayments/OnlinePayments";
import Register from "../components/Register/Register";
import UnlimitedProducts from "../components/UnlimitedProducts/UnlimitedProducts";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manageorders",
        element: (
          <PrivateRoute>
            <ManageOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/customerlists",
        element: (
          <PrivateRoute>
            <CustomerLists />
          </PrivateRoute>
        ),
      },
      {
        path: "/onlinepayments",
        element: (
          <PrivateRoute>
            <OnlinePayments />
          </PrivateRoute>
        ),
      },
      {
        path: "/unlimitedproducts",
        element: (
          <PrivateRoute>
            <UnlimitedProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
