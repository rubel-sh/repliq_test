import { createBrowserRouter } from "react-router-dom";
import CustomerLists from "../components/CustomerLists/CustomerLists";
import Home from "../Components/Home/Home";
import ManageOrders from "../components/ManageOrders/ManageOrders";
import OnlinePayments from "../components/OnlinePayments/OnlinePayments";
import UnlimitedProducts from "../components/UnlimitedProducts/UnlimitedProducts";
import MainLayout from "../layout/MainLayout";

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
        element: <ManageOrders />,
      },
      {
        path: "/customerlists",
        element: <CustomerLists />,
      },
      {
        path: "/onlinepayments",
        element: <OnlinePayments />,
      },
      {
        path: "/unlimitedproducts",
        element: <UnlimitedProducts />,
      },
    ],
  },
]);

export default router;
