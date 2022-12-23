import React, { FunctionComponent } from "react";

export interface IDisplayTitleProps {
  label?: string;
}

const DisplayTitle: FunctionComponent<IDisplayTitleProps> = ({ label }) => {
  return (
    <div style={{color: 'var(--ant-info-color)'}}>
      Components to be Rendered
    </div>);
};

export default DisplayTitle;
