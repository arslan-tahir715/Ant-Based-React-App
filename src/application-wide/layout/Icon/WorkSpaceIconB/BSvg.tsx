import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={25}
    {...props}
  >
    <defs>
      <path id="a" d="M.62 0h13.282v24H.62z" />
    </defs>
    <g transform="translate(.393)" fill="none" fillRule="evenodd">
      <path
        d="M8.59 12.312c0-1.187-.75-1.469-1.345-1.469H6.84V6.656c.5-.375 1.219-.687 2.282-.687 2.812 0 4.78 1.531 4.78 6.093v5.844c0 4.563-1.968 6.094-4.78 6.094-1.032 0-1.782-.313-2.282-.657v-4.218h.406c.594 0 1.344-.282 1.344-1.47v-5.343zM.62 23.718h5.282V0H.62v23.718z"
        fill="#231F20"
        mask="url(#b)"
      />
    </g>
  </svg>
)

export default SvgComponent
