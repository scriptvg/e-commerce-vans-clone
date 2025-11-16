import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Stars, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationSheet } from "@/components/navigation-sheet";
import SubscribeSheet from "./SubscribeSheet";
import SheetSearch from "./SheetSearch";

const Navbar = ({ isScrolled = false, isProductPage = false, staticMode = false }) => {
  const showDarkIcons = staticMode || isScrolled || isProductPage;
  const navBg = staticMode
    ? "bg-background"
    : isScrolled
      ? "bg-background/95 backdrop-blur-md border-b border-border/40"
      : isProductPage
        ? "bg-foreground/5"
        : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 inset-x-0 h-16 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="h-full px-4 grid grid-cols-3 items-center">
        <div className="flex items-center justify-start">
          <NavigationSheet isScrolling={showDarkIcons} isProductPage={isProductPage} />
        </div>

        <Link to='/' className="flex items-center justify-center">
          <Logo className='absolute hover:-rotate-4' />
        </Link>

        <div className="flex items-center justify-end gap-3">
          <SubscribeSheet isScrolled={showDarkIcons} isProductPage={isProductPage} />
          <Button variant="ghost" size="icon">
            <Stars className={`h-[1.2rem] w-[1.2rem] transition-colors ${showDarkIcons ? "text-black dark:text-white" : "text-white"}`} />
          </Button>
          <SheetSearch isScrolled={showDarkIcons} isProductPage={isProductPage} />
          <Button variant="ghost" size="icon" asChild>
            <Link to='/cart'>
              <ShoppingCart className={`h-[1.2rem] w-[1.2rem] transition-colors ${showDarkIcons ? "text-black dark:text-white" : "text-white"}`} />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
