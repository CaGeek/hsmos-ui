import { buildProps } from '@hsmos-ui/utils'

export const descriptionsRowProps = buildProps({
  row: {
    type: Array,
    default: () => [],
  },
} as const)
