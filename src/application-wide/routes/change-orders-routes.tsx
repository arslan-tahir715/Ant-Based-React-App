import React, { FunctionComponent } from "react";
import Component from "./../../pages/components/change-order/Index";

// const Component = React.lazy(() => import());

export const CHANGE_ORDERS_ROUTE = {
  label: "Change Orders",
  to: "/change-orders",
  route: "/change-orders",
  component: Component,
  icon: null,
  hasHeader: true,
  hasSideNavigation: true,
};

export default [CHANGE_ORDERS_ROUTE];
