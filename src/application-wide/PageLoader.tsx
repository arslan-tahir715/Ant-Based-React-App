import React, { FunctionComponent } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const PageLoader: FunctionComponent = () => <Spin indicator={antIcon} />;

export default PageLoader;
