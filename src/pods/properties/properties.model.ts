import { IconInfo, OtherProps } from '@/core/model';

export const multiSelectEnabledProperties: (keyof OtherProps)[] = [
  'stroke',
  'backgroundColor',
  'textColor',
  'selectedBackgroundColor',
];

export type PropsValueTypes =
  | string
  | number
  | boolean
  | number[]
  | IconInfo
  | undefined;

export interface CommonSelectedPropsAndValues {
  [key: string]: PropsValueTypes;
}
