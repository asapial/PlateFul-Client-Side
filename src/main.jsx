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
import ResetPassword from './Pages/Auth/ResetPassword.jsx';
import NotFound from './Pages/NotFound.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import CopyRightNotice from './Pages/Footer/CopyRightNotice.jsx';
import ContactInformation from './Pages/Footer/ContactInformation.jsx';
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
        path:'resetPassword',
        Component: ResetPassword
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
        element:<AllRecipes></AllRecipes>

      },
      {
        path:'myRecipes',
        element:<PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>

      },
      {
        path:'recipeDetails/:id',
        element:<PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment10-server-seven-delta.vercel.app/recipeDetails/${params.id}`)

      },
      {
        path:'copyRightInformation',
        Component: CopyRightNotice,

      },
      {
        path:'contact',
        Component: ContactInformation,

      },
      
    ]
  },
  {
    path:"*",
    Component: NotFound
  }
]);

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </ThemeProvider>


)
