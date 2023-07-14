import { Navigate, createBrowserRouter } from "react-router-dom";
import { LayoutPage } from "../style/LayoutPage";
import {
  PageError,
  LandingPage,
  Birthdate,
  Age,
  Carousel,
  FullScreenContent,
} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: "*", element: <Navigate to="/" /> },
      { path: "Birthdate", element: <Birthdate /> },
      { path: "Age", element: <Age /> },
      { path: "Planets", element: <Carousel /> },
      { path: "Planets/:id", element: <FullScreenContent /> },
    ],
  },
]);

//   {
//     path: "Current-Season",
//     element: <CurrentSeason />,
//     children: [
//       { path: "Drivers", element: <DriversSeason /> },
//       { path: "Drivers/:id", element: <ProfileId type="drivers" /> },
//       { path: "Teams", element: <TeamsSeason /> },
//       { path: "Teams/:id", element: <ProfileId type="teams" /> },
//     ],
//   },
//   { path: "News", element: <News /> },
//   { path: "History", element: <History /> },
