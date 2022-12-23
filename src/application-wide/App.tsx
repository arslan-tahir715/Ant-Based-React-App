import { ApolloProvider } from "@apollo/client";
import React, { FunctionComponent, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import createApolloClient from "./createApolloClient";
import PageLoader from "./PageLoader";
import MainRoutes from "./MainRoutes";
import { Layout, ConfigProvider } from "antd";
import { withSuccess } from "antd/lib/modal/confirm";

const { Header, Content, Footer } = Layout;

export interface IAppProps {
  basename: string;
}

const APOLLO_CLIENT = createApolloClient("/gra");

const App: FunctionComponent<IAppProps> = ({ basename }: IAppProps) => {
  ConfigProvider.config({
    theme: {
      primaryColor: "#353540",
      infoColor: '#bfbfca',
      warningColor: '#282c34',
      successColor: '#18171d'
     }  
  });

  return (
    <ConfigProvider>
      <Router basename={basename}>
        <ApolloProvider client={APOLLO_CLIENT}>
          <div id="main-app">
            <Suspense fallback={<PageLoader />}>
              <MainRoutes />
            </Suspense>
          </div>
        </ApolloProvider>
      </Router>
    </ConfigProvider>
  );
};

export default App;
