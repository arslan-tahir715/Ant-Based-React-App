import "../../../../node_modules/antd/es/style/themes/default.less";
import React, { FunctionComponent } from "react";
import ProductIcon from "../../../application-wide/layout/Icon/ProductIcon/ProductIconSvg"

export interface IDisplayTitleProps {
  label?: string;
}

const DisplayTitle: FunctionComponent<IDisplayTitleProps> = ({ label }) => {
  return (
    <div style={{color: 'var(--ant-info-color)'}}>
        <div style={{display: 'flex', width: "100%", minHeight: "3rem"}}>
            <ProductIcon fill={"#3CD1B5"}/> Product /
        </div>
        <div style={{fontWeight: 700, fontSize: "1.5rem"}}>
            Products
        </div>
    </div>);
};

export default DisplayTitle;
