import React, { FunctionComponent } from "react";
import { Switch } from "react-router-dom";
import useAvailableRoutes from "./routes/useAvailableRoutes";
import PrivateRoute from "./navigation/PrivateRoute";
import DuroHeader from "./layout/DuroHeader/DuroHeader";
import { ConfigProvider } from "antd";

const MainRoutes: FunctionComponent = () => {
  const routes = useAvailableRoutes();

  console.log("here");
  return (
    <>
      <DuroHeader />
      <Switch>
        {routes.map((route) => (
          <PrivateRoute
            key={route.route}
            exact={false}
            hasHeader={route.hasHeader}
            path={route.route}
            component={route.component}
            route={route}
            hasSideNavigation={route.hasSideNavigation}
          />
        ))}
      </Switch>
    </>
  );
};

export default MainRoutes;
