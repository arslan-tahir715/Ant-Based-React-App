import "../../../../node_modules/antd/es/style/themes/default.less";
import React, { FunctionComponent } from "react";
import ChangeOrderIcon from "../../../application-wide/layout/Icon/ChangeOrderIcon"

export interface IDisplayTitleProps {
  label?: string;
}

const DisplayTitle: FunctionComponent<IDisplayTitleProps> = ({ label }) => {
  return (
    <div style={{color: 'var(--ant-info-color)'}}>
        <div style={{display: 'flex', width: "100%", minHeight: "3rem"}}>
            <ChangeOrderIcon fill={"#3CD1B5"}/> Change Order /
        </div>
        <div style={{fontWeight: 700, fontSize: "1.5rem"}}>
            Change Orders
        </div>
    </div>);
};

export default DisplayTitle;
