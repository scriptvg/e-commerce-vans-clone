import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { User, Stars, Search, ShoppingCart } from "lucide-react";
import { NavigationSheet } from "@/components/navigation-sheet";
import SubscribeSheet from "./SubscribeSheet";
import SheetSearch from "./SheetSearch";

const Navbar = ({ isScrolled = false }) => {
  return (
    <nav
      className={`fixed top-0 inset-x-0 h-16 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
        }`}
    >
      <div className="h-full flex items-center justify-between mx-auto p-2">
        <div>
          <NavigationSheet isScrolling={isScrolled} />
        </div>

        <Logo />

        <div className="flex items-center gap-3 ">
          <SubscribeSheet isScrolled={isScrolled} />
          <Button variant="ghost" size="icon">
            <Stars className={`h-[1.2rem] w-[1.2rem] transition-colors ${isScrolled ? "text-black dark:text-white" : "text-white"}`} />
          </Button>
          <SheetSearch isScrolled={isScrolled} />
          <Button variant="ghost" size="icon">
            <ShoppingCart className={`h-[1.2rem] w-[1.2rem] transition-colors ${isScrolled ? "text-black dark:text-white" : "text-white"}`} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
