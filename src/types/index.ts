// navbar types
type BaseNavItem = {
  name: string;
  icon: {
    src: string;
    alt: string;
  };
  isNew?: boolean;
};

type LinkNavItem = BaseNavItem & {
  link: string;
  onClick?: never;
};

type ActionNavItem = BaseNavItem & {
  link?: never;
  onClick: () => void;
};

export type NavItem = LinkNavItem | ActionNavItem;

// user types
export type User = {
  _id: string;
  name?: string;
  phone?: string;
  googleId?: string;
  email?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AuthToken = string;
