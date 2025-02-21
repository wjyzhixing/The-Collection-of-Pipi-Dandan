import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StoryCollection from "./pages/StoryCollection/StoryCollection";
import Poem from "./pages/Poem/Poem";
import StoryDetails from "./pages/StoryDetails/StoryDetails";
import PoemDetails from "./pages/PoemDetails/PoemDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/stories",
    element: <StoryCollection />,
  },
  {
    path: "/stories/:id",
    element: <StoryDetails />,
  },
  {
    path: "/poems",
    element: <Poem />,
  },
  {
    path: "/poems/:id",
    element: <PoemDetails />,
  },
]);