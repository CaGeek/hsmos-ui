<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <picture-filled v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@hsmos-ui/hooks'
import { PictureFilled } from '@hsmos-ui/icons-vue'
import { skeletonItemProps } from './skeleton-item'

defineOptions({
  name: 'ElSkeletonItem',
})
defineProps(skeletonItemProps)
const ns = useNamespace('skeleton')
</script>
