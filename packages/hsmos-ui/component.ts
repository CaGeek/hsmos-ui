import { ElAffix } from '@hsmos-ui/components/affix'
import { ElAlert } from '@hsmos-ui/components/alert'
import { ElAutocomplete } from '@hsmos-ui/components/autocomplete'
import { ElAvatar } from '@hsmos-ui/components/avatar'
import { ElBacktop } from '@hsmos-ui/components/backtop'
import { ElBadge } from '@hsmos-ui/components/badge'
import { ElBreadcrumb, ElBreadcrumbItem } from '@hsmos-ui/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@hsmos-ui/components/button'
import { ElCalendar } from '@hsmos-ui/components/calendar'
import { ElCard } from '@hsmos-ui/components/card'
import { ElCarousel, ElCarouselItem } from '@hsmos-ui/components/carousel'
import { ElCascader } from '@hsmos-ui/components/cascader'
import { ElCascaderPanel } from '@hsmos-ui/components/cascader-panel'
import { ElCheckTag } from '@hsmos-ui/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@hsmos-ui/components/checkbox'
import { ElCol } from '@hsmos-ui/components/col'
import { ElCollapse, ElCollapseItem } from '@hsmos-ui/components/collapse'
import { ElCollapseTransition } from '@hsmos-ui/components/collapse-transition'
import { ElColorPicker } from '@hsmos-ui/components/color-picker'
import { ElConfigProvider } from '@hsmos-ui/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@hsmos-ui/components/container'
import { ElDatePicker } from '@hsmos-ui/components/date-picker'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@hsmos-ui/components/descriptions'
import { ElDialog } from '@hsmos-ui/components/dialog'
import { ElDivider } from '@hsmos-ui/components/divider'
import { ElDrawer } from '@hsmos-ui/components/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@hsmos-ui/components/dropdown'
import { ElEmpty } from '@hsmos-ui/components/empty'
import { ElForm, ElFormItem } from '@hsmos-ui/components/form'
import { ElIcon } from '@hsmos-ui/components/icon'
import { ElImage } from '@hsmos-ui/components/image'
import { ElImageViewer } from '@hsmos-ui/components/image-viewer'
import { ElInput } from '@hsmos-ui/components/input'
import { ElInputNumber } from '@hsmos-ui/components/input-number'
import { ElLink } from '@hsmos-ui/components/link'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from '@hsmos-ui/components/menu'
import { ElPageHeader } from '@hsmos-ui/components/page-header'
import { ElPagination } from '@hsmos-ui/components/pagination'
import { ElPopconfirm } from '@hsmos-ui/components/popconfirm'
import { ElPopover } from '@hsmos-ui/components/popover'
import { ElPopper } from '@hsmos-ui/components/popper'
import { ElProgress } from '@hsmos-ui/components/progress'
import {
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
} from '@hsmos-ui/components/radio'
import { ElRate } from '@hsmos-ui/components/rate'
import { ElResult } from '@hsmos-ui/components/result'
import { ElRow } from '@hsmos-ui/components/row'
import { ElScrollbar } from '@hsmos-ui/components/scrollbar'
import { ElOption, ElOptionGroup, ElSelect } from '@hsmos-ui/components/select'
import { ElSelectV2 } from '@hsmos-ui/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@hsmos-ui/components/skeleton'
import { ElSlider } from '@hsmos-ui/components/slider'
import { ElSpace } from '@hsmos-ui/components/space'
import { ElStatistic } from '@hsmos-ui/components/statistic'
import { ElCountdown } from '@hsmos-ui/components/countdown'
import { ElStep, ElSteps } from '@hsmos-ui/components/steps'
import { ElSwitch } from '@hsmos-ui/components/switch'
import { ElTable, ElTableColumn } from '@hsmos-ui/components/table'
import { ElAutoResizer, ElTableV2 } from '@hsmos-ui/components/table-v2'
import { ElTabPane, ElTabs } from '@hsmos-ui/components/tabs'
import { ElTag } from '@hsmos-ui/components/tag'
import { ElText } from '@hsmos-ui/components/text'
import { ElTimePicker } from '@hsmos-ui/components/time-picker'
import { ElTimeSelect } from '@hsmos-ui/components/time-select'
import { ElTimeline, ElTimelineItem } from '@hsmos-ui/components/timeline'
import { ElTooltip } from '@hsmos-ui/components/tooltip'
import { ElTooltipV2 } from '@hsmos-ui/components/tooltip-v2'
import { ElTransfer } from '@hsmos-ui/components/transfer'
import { ElTree } from '@hsmos-ui/components/tree'
import { ElTreeSelect } from '@hsmos-ui/components/tree-select'
import { ElTreeV2 } from '@hsmos-ui/components/tree-v2'
import { ElUpload } from '@hsmos-ui/components/upload'

import type { Plugin } from 'vue'

export default [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElStatistic,
  ElCountdown,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElText,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTooltipV2,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
] as Plugin[]
