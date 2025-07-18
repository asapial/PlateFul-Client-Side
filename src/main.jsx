import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Home from "./Pages/Home/Home.jsx";
import PrivateRoute from "./ProtectedRoute/PrivateRoute.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Register from "./Pages/Auth/Register.jsx";
import AddRecipe from "./Pages/Recipes/AddRecipe.jsx";
import RecipeDetails from "./Pages/Recipes/RecipeDetails.jsx";
import AllRecipes from "./Pages/Recipes/AllRecipes.jsx";
import MyRecipes from "./Pages/Recipes/MyRecipes.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import MyProfile from "./Pages/Auth/MyProfile.jsx";
import ResetPassword from "./Pages/Auth/ResetPassword.jsx";
import NotFound from "./Pages/NotFound.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import CopyRightNotice from "./Pages/Footer/CopyRightNotice.jsx";
import ContactInformation from "./Pages/Footer/ContactInformation.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";
import DashboardLayout from "./Layout/DashboardLayout.jsx";
import AboutUs from "./Pages/Others/AboutUs.jsx";
import Support from "./Pages/Others/Support.jsx";
import BlogDetails from "./Pages/Recipes/BlogDetails.jsx";
import DashBoardOverview from "./Pages/Recipes/DashBoardOverview.jsx";
export const AuthContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "allRecipes",
        element: <AllRecipes></AllRecipes>,
      },
      {
        path: "recipeDetails/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-seven-delta.vercel.app/recipeDetails/${params.id}`
          ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "resetPassword",
        Component: ResetPassword,
      },
      {
        path: "copyRightInformation",
        Component: CopyRightNotice,
      },
      {
        path: "contact",
        Component: ContactInformation,
      },
      {
        path: "aboutUs",
        Component: AboutUs,
      },
      {
        path: "support",
        Component: Support,
      },
      {
        path: "blog/:id",
        Component: BlogDetails,
      },
    ],
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashBoardOverview></DashBoardOverview>
          </PrivateRoute>
        ),
      },
      {
        path: "myRecipe",
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "addRecipe",
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "myProfile",
        Component: MyProfile,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ThemeProvider>
);
