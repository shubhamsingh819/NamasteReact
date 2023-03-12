import React, { lazy, Suspense } from "react"; // core package
import ReactDOM from "react-dom/client"; // packege which is importing dom
// Default Import
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Error from "../components/Error";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import RestauRentMenu from "../components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import ShimmerUi from "../components/ShimmerUi";

const InstaMart = lazy(() => import("../components/InstaMart")); // onDemand Loading / lazy loading

const About =  lazy(() => import("../components/About"))

const AppLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense> ,
        children: [
          {
            path: "profile", // parentPath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:id",
        element: <RestauRentMenu />,
      },
      {
        path: "/instaMart",
        element: <Suspense fallback={<ShimmerUi />}> 
        <InstaMart />
        </Suspense>,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
