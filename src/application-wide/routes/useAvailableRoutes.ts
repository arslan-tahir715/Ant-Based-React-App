import CHANGE_ORDERS_ROUTES from "./change-orders-routes";
import COMPONENTS_ROUTES from "./component-routes";
import DASHBOARD_ROUTE from "./dashboard-routes";
import PRODUCTS_ROUTE from "./product-routes";
import EXPORT_ROUTE from "./export-routes";


const useAvailableRoutes = () => {
  return [...PRODUCTS_ROUTE, ...EXPORT_ROUTE, ...DASHBOARD_ROUTE, ...CHANGE_ORDERS_ROUTES, ...COMPONENTS_ROUTES];
};

export default useAvailableRoutes;
