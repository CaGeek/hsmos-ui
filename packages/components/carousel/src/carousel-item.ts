import { buildProps } from '@hsmos-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const carouselItemProps = buildProps({
  name: { type: String, default: '' },
  label: {
    type: [String, Number],
    default: '',
  },
} as const)

export type CarouselItemProps = ExtractPropTypes<typeof carouselItemProps>
