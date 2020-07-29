import { PLATFORM_NAME } from '../settings'

export type UPNPCapability =
  | `GetMute`
  | `SetMute`
  | `GetVolume`
  | `SetVolume`
  | `GetBrightness`
  | `SetBrightness`
  | string

export interface DeviceConfig {
  name: string
  modelName: string
  mac: string
  lastKnownLocation: string
  lastKnownIp: string
  usn: string
  delay: number
  ignore?: boolean
  remoteControlPort?: number
  token?: string
  inputs?: Array<{
    name: string
    keys: string
  }>
  disableUpnpSetters?: boolean
  discovered?: boolean
  capabilities: Array<UPNPCapability>
}

export interface SamsungPlatformConfig {
  platform: typeof PLATFORM_NAME
  devices: Array<DeviceConfig>
}
