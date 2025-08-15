import { Link } from "react-router-dom";
import { useState } from "react";

// import icons
import logo from "../../assets/icons/logo.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import wishlistIcon from "../../assets/icons/wishlist-icon.svg";
import chatIcon from "../../assets/icons/chat-icon.svg";
import bellIcon from "../../assets/icons/bell-icon.svg";
import sellIcon from "../../assets/icons/sell-button.svg";
// import userIcon from "../../assets/icons/user-icon.svg";

// importing component
import MobileMenu from "../molecules/MobileMenu";

// import types
import type { AuthToken, NavItem, User } from "../../types/index";

// import hooks
import useLoginModal from "../../hooks/useLoginModal";

const navItems: NavItem[] = [
  {
    name: "Chat",
    icon: {
      src: chatIcon,
      alt: "chat icon",
    },
    link: "/",
  },
  {
    name: "Notification",
    icon: {
      src: bellIcon,
      alt: "bell icon",
    },
    link: "/",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openLoginModal } = useLoginModal();

  const token = localStorage.getItem("token") as AuthToken | null;
  const storedUser = localStorage.getItem("user");
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;

  return (
    <>
      <div className="mx-auto bg-[#eff1f3] py-1 lg:flex lg:px-4">
        <div className="sticky flex items-center px-2">
          <div className="flex size-10 items-center justify-center lg:hidden">
            {isMenuOpen ? (
              <img
                onClick={() => setIsMenuOpen(false)}
                src={closeIcon}
                alt="close icon"
              />
            ) : (
              <img
                onClick={() => setIsMenuOpen(true)}
                src={hamburger}
                alt="menu icon"
              />
            )}
          </div>
          <Link to={"/"} className="">
            <img className="w-16" src={logo} alt="olx logo" />
          </Link>
        </div>

        <MobileMenu isMenuOpen={isMenuOpen} />

        {/* search bar and wishlist */}
        <div className="flex w-full items-center justify-between gap-x-2 pr-2">
          <div className="w-full pl-4">
            <label
              className="flex h-10 justify-between rounded-sm border-2 lg:h-12"
              htmlFor="searchInput"
            >
              <div className="flex gap-x-4 px-4 py-2">
                <img src={searchIcon} alt="search icon" />
                <input
                  id="searchInput"
                  className="focus:outline-none"
                  type="search"
                  placeholder="Search"
                />
              </div>
              <button className="w-12 bg-black hover:cursor-pointer">
                {/* search icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  className="mx-auto my-auto"
                  fillRule="evenodd"
                >
                  <path
                    className="rui-w4DG7"
                    fill="white"
                    d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
                  />
                </svg>
              </button>
            </label>
          </div>
          <button className="flex size-12 cursor-pointer items-center justify-center">
            <img className="w-6" src={wishlistIcon} alt="wishlist icon" />
          </button>
        </div>

        {/* lg screen menus */}
        <div className="hidden items-center gap-x-4 lg:flex">
          {navItems.map(
            (item, index) =>
              typeof item.link === "string" && (
                <Link
                  className="flex h-12 items-center justify-center"
                  key={index}
                  to={item.link}
                >
                  <img
                    className="h-8"
                    src={item.icon.src}
                    alt={item.icon.src}
                  />
                </Link>
              )
          )}

          {/* profile or login button area */}
          {token && user ? (
            <p>profile icon</p>
          ) : (
            <p
              onClick={openLoginModal}
              className="font-semibold underline underline-offset-4 hover:cursor-pointer"
            >
              Login
            </p>
          )}
          {/* sell btn */}
          <Link to={"/sell"}>
            <img className="h-[70px]" src={sellIcon} alt="sell icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
