import AppLayout from "Layouts/App";
import { useRoutes } from "react-router-dom";
import Application from "Pages/Application";
import Explore from "Pages/Explore";
import Messages from "Pages/Messages";
import Notifications from "Pages/Notification";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Application />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
      ],
    },
  ]);
  return <>{routes}</>;
};

export default Routes;
