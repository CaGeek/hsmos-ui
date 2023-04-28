import { componentSizeMap } from '@hsmos-ui/constants'

import type { ComponentSize } from '@hsmos-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
