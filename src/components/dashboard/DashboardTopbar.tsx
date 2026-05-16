import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

export function DashboardTopbar({
  openSidebar,
}: {
  openSidebar: () => void;
}) {

  return (
    <div className="relative z-20 w-full h-[120px] backdrop-blur-md px-4 lg:px-10 flex items-center justify-between">

      {/* MOBILE HAMBURGER */}
      <button
        onClick={openSidebar}
        className="lg:hidden w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center"
      >
        <Menu size={24} className="text-white" />
      </button>

      <div className="hidden lg:block" />

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-2 lg:gap-6 ml-auto">

  {/* USE MOBILE APP */}
  <Link
    to="/mobile-app"
    className="
      h-[38px]
      lg:h-[44px]
      px-3
      lg:px-5
      rounded-full
      bg-white/10
      backdrop-blur-xl
      text-white
      text-[12px]
      lg:text-[16px]
      font-[400]
      flex
      items-center
      justify-center
      hover:bg-white/15
      transition-all
      duration-300
    "
  >
    <span className="lg:hidden">App</span>
    <span className="hidden lg:inline">Use Mobile App</span>
  </Link>

  {/* TRY FREE */}
  <Link
    to="/pricing"
    className="
      h-[38px]
      lg:h-[44px]
      px-4
      lg:px-5
      rounded-full
      bg-white
      text-[#123B72]
      text-[12px]
      lg:text-[16px]
      font-[500]
      flex
      items-center
      justify-center
      hover:scale-[1.02]
      transition-all
      duration-300
    "
  >
    <span className="lg:hidden">Try Free</span>

    <span className="hidden lg:inline">
      Try StillMind For Free
    </span>
  </Link>

</div>
    </div>
  );
}