import React from "react";
import Component from "./../../pages/components/dashboard-page/Index";

// const Dashboard = React.lazy(() => import("./../../pages/components/dashboard-page/Index"));

export const DASHBOARD_ROUTE = {
  label: "Dashboard",
  to: "/dashboard",
  route: "/dashboard",
  component: Component,
  icon: null,
  hasHeader: true,
  hasSideNavigation: true,
};

export default [DASHBOARD_ROUTE];
