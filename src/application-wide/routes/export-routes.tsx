import React from "react";
import Component from "../../pages/components/Export";
// const Component = React.lazy(() => import("../../pages/components/Export"));

export const EXPORT_ROUTE = {
  label: "Export",
  to: "/Export",
  route: "/Export",
  component: Component,
  icon: null,
  hasHeader: true,
  hasSideNavigation: true,
};

export default [EXPORT_ROUTE];
