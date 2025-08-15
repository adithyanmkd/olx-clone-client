// types importing
import { Link } from "react-router-dom";
import clsx from "clsx";

import type { NavItem } from "../../types/index";

type MenuItemsProps = { items: NavItem[] };

const MenuItems = ({ items }: MenuItemsProps) => {
  return (
    <>
      <div className="border-t border-[#cfcdcd]">
        {items.map(
          (item, index) =>
            typeof item.link === "string" && (
              <Link key={index} to={item.link}>
                <div
                  className={clsx(
                    "flex h-12 items-center space-x-4 px-4 hover:bg-[#d9ebfe]",
                    item.isNew &&
                      "bg-linear-to-r from-[#d9ebfe] to-white to-70%"
                  )}
                >
                  <img
                    className="w-6"
                    src={item.icon.src}
                    alt={item.icon.alt}
                  />
                  <p className="text-[#020812]">{item.name}</p>
                  {item.isNew && (
                    <p className="rounded-md bg-[#bf2600] px-4 py-px text-xs font-semibold text-white">
                      New
                    </p>
                  )}
                </div>
              </Link>
            )
        )}
      </div>
    </>
  );
};

export default MenuItems;
