import React from "react";
import Component from "../../pages/components/component-page/Index";
// const Component = React.lazy(() => import("../../pages/components/component-page/Index"));

export const COMPONENTS_ROUTE = {
  label: "Components",
  to: "/components",
  route: "/components",
  component: Component,
  icon: null,
  hasHeader: true,
  hasSideNavigation: true,
};

export default [COMPONENTS_ROUTE];
