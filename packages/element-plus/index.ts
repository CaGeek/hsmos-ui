import installer from './defaults'
export * from '@hsmos-ui/components'
export * from '@hsmos-ui/constants'
export * from '@hsmos-ui/directives'
export * from '@hsmos-ui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
