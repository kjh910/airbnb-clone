import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Root from "./components/Root";
import NotFound from "./components/templetes/not-found/not-found";
import RoomDetail from "./components/templetes/room-detail/room-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "rooms/:roomPk",
        element: <RoomDetail />,
      },
    ],
  },
]);

export default router;