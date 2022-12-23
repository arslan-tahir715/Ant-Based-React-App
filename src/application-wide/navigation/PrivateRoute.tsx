import React, { FunctionComponent, LazyExoticComponent } from "react";
import { Route } from "react-router-dom";
import "./PrivateRoute.less";
import "antd/es/style/themes/default.less";
import DuroContent from "../layout/DuroContent/DuroContent";

export interface IPrivateRouteProps {
  exact: boolean;
  path: string;
  component: FunctionComponent;
  hasHeader: boolean;
  hasSideNavigation: boolean;
  route: object;
}

const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({
  exact,
  path,
  component: Component,
  hasHeader,
  hasSideNavigation,
}) => {

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
          <>
            <DuroContent Component={Component}/>
          </>
        );
      }}
    />
  );
};

export default PrivateRoute;
