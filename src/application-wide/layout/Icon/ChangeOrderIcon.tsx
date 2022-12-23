import * as React from "react"
import { SVGProps } from "react"
import "antd/es/style/themes/default.less";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path fill={props.fill ? props.fill : "var(--ant-info-color)"} d="M12 4 3 20h18z" />
    </g>
  </svg>
)

export default SvgComponent
