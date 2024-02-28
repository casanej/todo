const availableIcons = {
  search: 'search',
  close: 'close',
} as const

export type IconsAvailable = keyof typeof availableIcons;

export interface IconProps {
  type: IconsAvailable;
}