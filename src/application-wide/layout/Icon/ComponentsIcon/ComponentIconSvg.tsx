import * as React from "react"
import "antd/es/style/themes/default.less";
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19 3c1.05 0 1.918.82 1.994 1.851L21 5v14c0 1.05-.82 1.918-1.851 1.994L19 21H5c-1.05 0-1.918-.82-1.994-1.851L3 19V5c0-1.05.82-1.918 1.851-1.994L5 3h14zm-2 12H7v2h10v-2zm-3.333-4H7v2h6.667v-2zm0-4H7v2h6.667V7z"
        fill={props.fill ? props.fill : "var(--ant-info-color)"}
      />
    </g>
  </svg>
)

export default SvgComponent
