import {
  buildProps,
  definePropType,
  isNumber,
  isString,
  mutable,
} from '@hsmos-ui/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@hsmos-ui/constants'
import type { ExtractPropTypes } from 'vue'
import type { Arrayable } from '@hsmos-ui/utils'

export type CollapseActiveName = string | number
export type CollapseModelValue = Arrayable<CollapseActiveName>

export const emitChangeFn = (value: CollapseModelValue) =>
  typeof isNumber(value) || isString(value) || Array.isArray(value)

export const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType<CollapseModelValue>([Array, String, Number]),
    default: () => mutable([] as const),
  },
} as const)
export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
}
export type CollapseEmits = typeof collapseEmits
