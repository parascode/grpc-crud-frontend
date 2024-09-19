import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CompanyForm from "./components/form.jsx";
import Company from "./components/Company.jsx";
import NavBar from "./components/NavBar.jsx";
import Companies from "./components/Companies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CompanyForm />,
  },
  {
    path: "/add-company",
    element: <CompanyForm />,
  },
  {
    path: "/company",
    element: <Company />,
  },
  {
    path: "/companies",
    element: <Companies />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <NavBar />
    <RouterProvider router={router} />
  </StrictMode>
);
