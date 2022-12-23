import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={14} height={25} {...props}>
    <path
      d="M8.173 24h5.108V0H8.173v24zM5.38 17.667c0 1.185.76 1.467 1.361 1.467h.411v4.21c-.506.344-1.265.656-2.31.656C1.995 24 0 22.471 0 17.917v-5.833C0 7.529 1.994 6 4.842 6c1.075 0 1.803.312 2.31.686v4.18H6.74c-.601 0-1.36.282-1.36 1.467v5.334z"
      fill="#231F20"
      fillRule="evenodd"
    />
  </svg>
)

export default SvgComponent
