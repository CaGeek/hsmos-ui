import { buildProps, definePropType } from '@hsmos-ui/utils'
import type { StyleValue } from 'vue'

export const visualHiddenProps = buildProps({
  style: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: () => ({}),
  },
} as const)
