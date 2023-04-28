import { buildProps } from '@hsmos-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const emptyProps = buildProps({
  image: {
    type: String,
    default: '',
  },
  imageSize: Number,
  description: {
    type: String,
    default: '',
  },
} as const)

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
