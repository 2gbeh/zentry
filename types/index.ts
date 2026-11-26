export type OptionType = {
  label: string;
  value: string;
  disabled?: boolean;
  meta?: unknown;
};

export type MenuItemType<T> = {
  label: string;
  path: string;
  badgeText?: string | number;
  Icon?: T;
};
