import { timePickerDefaultProps } from '@hsmos-ui/components/time-picker'
import { buildProps, definePropType } from '@hsmos-ui/utils'

import type { ExtractPropTypes } from 'vue'
import type { IDatePickerType } from '../date-picker.type'

export const datePickerProps = buildProps({
  ...timePickerDefaultProps,
  type: {
    type: definePropType<IDatePickerType>(String),
    default: 'date',
  },
} as const)

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>
