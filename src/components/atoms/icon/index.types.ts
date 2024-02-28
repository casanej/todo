const availableIcons = {
  search: 'search',
  close: 'close',
  add: 'add',
} as const

export type IconsAvailable = keyof typeof availableIcons;

export interface IconProps {
  type: IconsAvailable;
}