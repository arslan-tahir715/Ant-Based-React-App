import "../../../../node_modules/antd/es/style/themes/default.less";
import React, { FunctionComponent } from "react";
import ExportIcon from "../../../application-wide/layout/Icon/ExportIcon"

export interface IDisplayTitleProps {
  label?: string;
}

const DisplayTitle: FunctionComponent<IDisplayTitleProps> = ({ label }) => {
  return (
    <div style={{color: 'var(--ant-info-color)'}}>
        <div style={{display: 'flex', width: "100%", minHeight: "3rem"}}>
            <ExportIcon fill={"#3CD1B5"}/> Export /
        </div>
        <div style={{fontWeight: 700, fontSize: "1.5rem"}}>
            Exports
        </div>
    </div>);
};

export default DisplayTitle;
