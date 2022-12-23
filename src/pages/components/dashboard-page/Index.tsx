import "../../../../node_modules/antd/es/style/themes/default.less";
import React, { FunctionComponent } from "react";
import DashboardIcon from "../../../application-wide/layout/Icon/DashboardIcon/DashboardIconSvg"

export interface IDisplayTitleProps {
  label?: string;
}

const DisplayTitle: FunctionComponent<IDisplayTitleProps> = ({ label }) => {
  return (
    <div style={{color: 'var(--ant-info-color)'}}>
        <div style={{display: 'flex', width: "100%", minHeight: "3rem"}}>
            <DashboardIcon fill={"#3CD1B5"}/> Dashboard /
        </div>
        <div style={{fontWeight: 700, fontSize: "1.5rem"}}>
            Dashboard
        </div>
    </div>);
};

export default DisplayTitle;
