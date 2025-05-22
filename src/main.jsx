import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../Root.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Home from './Pages/Home/Home.jsx';
import PrivateRoute from './ProtectedRoute/PrivateRoute.jsx';
import Login from './Pages/Auth/Login.jsx';
import Register from './Pages/Auth/Register.jsx';
import AddRecipe from './Pages/Recipes/AddRecipe.jsx';
import RecipeDetails from './Pages/Recipes/RecipeDetails.jsx';
import AllRecipes from './Pages/Recipes/AllRecipes.jsx';
import MyRecipes from './Pages/Recipes/MyRecipes.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import MyProfile from './Pages/Auth/MyProfile.jsx';
export const AuthContext=createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
{
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'myProfile',
        Component: MyProfile,
      },
      {
        path:'addRecipe',
        element:<PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>

      },
      {
        path:'allRecipes',
        element:<PrivateRoute><AllRecipes></AllRecipes></PrivateRoute>

      },
      {
        path:'myRecipes',
        element:<PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>

      },
      {
        path:'recipeDetails/:id',
        element:<PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/recipeDetails/${params.id}`)

      },
      // {
      //   path:"faq",
      //   element:<PrivateRoute><Faq></Faq></PrivateRoute>
      // },
      // {
      //   path:"resetPassword",
      //   element:<PrivateRoute><ResetPassword></ResetPassword></PrivateRoute>
      // },
      // {
      //   path:"termsAndCondition",
      //   element:<TermsAndConditionPage></TermsAndConditionPage>
      // },
      // {
      //   path:"privacyPolicy",
      //   element:<PrivacyPolicy></PrivacyPolicy>
      // },
      
    ]
  },
  {
    path:"*",
    Component: ErrorPage
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)
