import * as React from "react"
import "antd/es/style/themes/default.less";
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="m8 7 1.41 1.41L11 6.83V15h2V6.83l1.58 1.58L16 7l-4-4-4 4zm1 10v-5H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-6v5H9z"
        fill={props.fill ? props.fill : "var(--ant-info-color)"}
      />
    </g>
  </svg>
)

export default SvgComponent
