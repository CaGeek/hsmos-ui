import { withInstallFunction } from '@hsmos-ui/utils'

import Notify from './src/notify'

export const ElNotification = withInstallFunction(Notify, '$notify')
export default ElNotification

export * from './src/notification'
