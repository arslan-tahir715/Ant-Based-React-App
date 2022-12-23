import React from "react";
import Component from "../../pages/components/Product-page";
// const Component = React.lazy(() => import("../../pages/components/Product-page"));

export const PRODUCTS_ROUTE = {
  label: "Products",
  to: "/Products",
  route: "/Products",
  component: Component,
  icon: null,
  hasHeader: true,
  hasSideNavigation: true,
};

export default [PRODUCTS_ROUTE];
