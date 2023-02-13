import AppLayout from "Layouts/App";
import { useRoutes } from "react-router-dom";
import Application from "Pages/Application";
import Explore from "Pages/Explore";
import Messages from "Pages/Messages";
import Notifications from "Pages/Notification";
import ba from "assets/img/ba.png";

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
  return (
    <>
      {" "}
      <img
        src={ba}
        alt="background"
        style={{
          width: "100%",
          height: "100vh",
        }}
      />
    </>
  );
};

export default Routes;
