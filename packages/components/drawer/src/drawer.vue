<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      :name="ns.b('fade')"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <el-overlay
        v-show="visible"
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
        @click="onModalClick"
      >
        <el-focus-trap
          loop
          :trapped="visible"
          :focus-trap-el="drawerRef"
          :focus-start-el="focusStartRef"
          @release-requested="onCloseRequested"
        >
          <div
            ref="drawerRef"
            aria-modal="true"
            :aria-label="title || undefined"
            :aria-labelledby="!title ? titleId : undefined"
            :aria-describedby="bodyId"
            v-bind="$attrs"
            :class="[ns.b(), direction, visible && 'open', customClass]"
            :style="
              isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize
            "
            role="dialog"
            @click.stop
          >
            <span ref="focusStartRef" :class="ns.e('sr-focus')" tabindex="-1" />
            <header v-if="withHeader" :class="ns.e('header')">
              <slot
                v-if="!$slots.title"
                name="header"
                :close="handleClose"
                :title-id="titleId"
                :title-class="ns.e('title')"
              >
                <span
                  v-if="!$slots.title"
                  :id="titleId"
                  role="heading"
                  :class="ns.e('title')"
                >
                  {{ title }}
                </span>
              </slot>
              <slot v-else name="title">
                <!-- DEPRECATED SLOT -->
              </slot>
              <button
                v-if="showClose"
                :aria-label="t('el.drawer.close')"
                :class="ns.e('close-btn')"
                type="button"
                @click="handleClose"
              >
                <el-icon :class="ns.e('close')"><close /></el-icon>
              </button>
            </header>
            <template v-if="rendered">
              <div :id="bodyId" :class="ns.e('body')">
                <slot />
              </div>
            </template>
            <div v-if="$slots.footer" :class="ns.e('footer')">
              <slot name="footer" />
            </div>
          </div>
        </el-focus-trap>
      </el-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Close } from '@hsmos-ui/icons-vue'

import { ElOverlay } from '@hsmos-ui/components/overlay'
import ElFocusTrap from '@hsmos-ui/components/focus-trap'
import { useDialog } from '@hsmos-ui/components/dialog'
import { addUnit } from '@hsmos-ui/utils'
import ElIcon from '@hsmos-ui/components/icon'
import { useDeprecated, useLocale, useNamespace } from '@hsmos-ui/hooks'
import { drawerEmits, drawerProps } from './drawer'

export default defineComponent({
  name: 'ElDrawer',
  components: {
    ElOverlay,
    ElFocusTrap,
    ElIcon,
    Close,
  },
  inheritAttrs: false,
  props: drawerProps,
  emits: drawerEmits,

  setup(props, { slots }) {
    useDeprecated(
      {
        scope: 'el-drawer',
        from: 'the title slot',
        replacement: 'the header slot',
        version: '3.0.0',
        ref: 'https://hsmos-ui.org/en-US/component/drawer.html#slots',
      },
      computed(() => !!slots.title)
    )
    useDeprecated(
      {
        scope: 'el-drawer',
        from: 'custom-class',
        replacement: 'class',
        version: '2.3.0',
        ref: 'https://hsmos-ui.org/en-US/component/drawer.html#attributes',
        type: 'Attribute',
      },
      computed(() => !!props.customClass)
    )

    const drawerRef = ref<HTMLElement>()
    const focusStartRef = ref<HTMLElement>()
    const ns = useNamespace('drawer')
    const { t } = useLocale()

    const isHorizontal = computed(
      () => props.direction === 'rtl' || props.direction === 'ltr'
    )
    const drawerSize = computed(() => addUnit(props.size))

    return {
      ...useDialog(props, drawerRef),
      drawerRef,
      focusStartRef,
      isHorizontal,
      drawerSize,
      ns,
      t,
    }
  },
})
</script>
