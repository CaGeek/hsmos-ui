import { ElInfiniteScroll } from '@hsmos-ui/components/infinite-scroll'
import { ElLoading } from '@hsmos-ui/components/loading'
import { ElMessage } from '@hsmos-ui/components/message'
import { ElMessageBox } from '@hsmos-ui/components/message-box'
import { ElNotification } from '@hsmos-ui/components/notification'
import { ElPopoverDirective } from '@hsmos-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
