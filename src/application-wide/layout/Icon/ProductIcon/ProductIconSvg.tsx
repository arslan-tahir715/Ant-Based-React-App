import * as React from "react"
import "antd/es/style/themes/default.less";
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.5 9c1.383 0 2.5 1.117 2.5 2.5S15.883 17 14.5 17a2.497 2.497 0 0 1-2.5-2.5c0-1.383 1.117-2.5 2.5-2.5zM11 13v4H7v-4h4zm.89-6.895 2.828 2.828-2.829 2.829-2.828-2.829 2.828-2.828z"
        fill={props.fill ? props.fill : "var(--ant-info-color)"}
      />
    </g>
  </svg>
)

export default SvgComponent
