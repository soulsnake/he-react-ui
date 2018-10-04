export type NavItem = {
  key: string;
  label?: string;
  title?: string;
  icon?: string; // TODO: only required at top level
  route?: string;
  exact?: boolean;
  badge?: 'NEW' | 'FREE';
  notifications?: number;
  // eslint-disable-next-line no-use-before-define
  items?: NavItem[];
};

export default NavItem;
