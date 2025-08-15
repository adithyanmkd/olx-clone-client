// icons importing
import cameraIcon from "../assets/icons/camera-icon.svg";
import listIcon from "../assets/icons/list-icon.svg";
import wishlistIcon from "../assets/icons/wishlist-icon.svg";
import chatIcon from "../assets/icons/chat-icon.svg";
import helpIcon from "../assets/icons/help-icon.svg";
import worldIcon from "../assets/icons/world-icon.svg";
import eliteIcon from "../assets/icons/elite-pkg-icon.svg";

// importing types
import type { NavItem } from "../types";

export const mainMenus: NavItem[] = [
  {
    name: "Start selling",
    icon: {
      src: cameraIcon,
      alt: "camera icon",
    },
    link: "/",
  },
  {
    name: "My ADS",
    icon: {
      src: listIcon,
      alt: "my ads icon",
    },
    link: "/",
  },
  {
    name: "Wishlist",
    icon: {
      src: wishlistIcon,
      alt: "wishlist icon",
    },
    link: "/",
  },
  {
    name: "Elite packages for Buyers",
    icon: {
      src: eliteIcon,
      alt: "my ads icon",
    },
    isNew: true,
    link: "/",
  },
  {
    name: "Chat",
    icon: {
      src: chatIcon,
      alt: "chat icon",
    },
    link: "/",
  },
];

export const supportAndLanguage: NavItem[] = [
  {
    name: "Help",
    icon: {
      src: helpIcon,
      alt: "help icon",
    },
    link: "/",
  },
  {
    name: "Select language",
    icon: {
      src: worldIcon,
      alt: "world icon",
    },
    link: "/",
  },
];
