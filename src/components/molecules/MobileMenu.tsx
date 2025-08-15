import clsx from "clsx";

// import assets
import appIcon from "../../assets/icons/app-icon.png";

// import components
import MenuItems from "./MenuItems";

// importing data
import { mainMenus, supportAndLanguage } from "../../constants/menu";

const MobileMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <div
      className={clsx(
        isMenuOpen
          ? "mx-auto block h-auto bg-white pb-8 transition-colors"
          : "hidden"
      )}
    >
      <div className="mx-auto w-[302px] py-5 pr-4">
        <h3 className="text-xl font-bold text-[#020812]">Welcome to OLX!</h3>
        <p className="text-sm font-light text-nowrap text-[#8d9094]">
          Take charge of your buying and selling journey.
        </p>
        <div className="py-4">
          <button className="h-11 w-full rounded-sm bg-[#004896] py-2 font-semibold text-white">
            Login
          </button>
        </div>
      </div>
      <div>
        <MenuItems items={mainMenus} />
        <MenuItems items={supportAndLanguage} />
      </div>
      <div className="mx-4 mt-8 flex max-w-lg items-center justify-between rounded-lg border border-[#9cbbff] bg-[#ebf1ff] p-3.5">
        <div className="flex items-center gap-2">
          <img className="h-[35px]" src={appIcon} alt="app icon" />
          <p className="text-sm font-semibold">
            For a better buying and selling experience!
          </p>
        </div>
        <button className="h-8 rounded-md bg-[#3a77ff] px-2.5 text-xs font-semibold text-nowrap text-white">
          Download app
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
