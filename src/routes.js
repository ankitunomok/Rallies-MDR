import { Navigate, useRoutes } from "react-router-dom";
import Home from "./view/Home";
import Mobile from "./view/Mobile";
import Otp from "./view/Otp";
import Placeholder from "./view/Placeholder";
import PlaceholderIVR from "./view/PlaceholderIVR";
import Register from "./view/Register";
import TermConditions from "./view/TermConditions";

export const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <Mobile /> },
    {
      path: "/",
      children: [
        { path: "mobile", element: <Mobile /> },
        { path: "otp", element: <Otp /> },
        { path: "home", element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "termcondition", element: <TermConditions /> },
        { path: "placeholder", element: <Placeholder /> },
        { path: "placeholderivr", element: <PlaceholderIVR /> },
        
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
