import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetHeader } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "@/components/logo";
import ThemeButton from "@/components/kromm-ui/ThemeButton";

const menuCategories = [
  { name: "Featured", active: true },
  { name: "Women" },
  { name: "Men" },
  { name: "Kids" },
  { name: "Sale" },
];

const menuItems = [
  { name: "Holiday Gifts", hasArrow: true },
  { name: "New Arrivals" },
  { name: "Best Sellers" },
  { name: "All Shoes" },
  { name: "Icons", hasArrow: true },
  { name: "Trending", hasArrow: true },
  { name: "Shop by Sport", hasArrow: true },
  { name: "Customize Our Shoes" },
  { name: "Reworked: Waffle Shop" },
  { name: "Coming Soon" },
  { name: "Shop All" },
];

const bottomLinks = [
  { name: "Sign In / Sign Up" },
  { name: "Favorites" },
  { name: "Order Status" },
  { name: "Gift Cards" },
  { name: "Find a Store" },
  { name: "Help Center" },
  { name: "Live Chat" },
];

export const NavigationSheet = ({ isScrolling }) => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={`transition-colors ${!isScrolling ? "hover:bg-white/20" : ""}`}
        >
          <Menu className={`h-[1.2rem] w-[1.2rem] transition-colors ${isScrolling ? "text-black dark:text-white" : "text-white"}`} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-md p-0 bg-background backdrop-blur-md border-none">
        <ScrollArea className="h-full">
          <div className="flex flex-col">
            <SheetHeader className=''>
              <Logo />
              <ThemeButton />
            </SheetHeader>

{/*             <div className="px-6 py-4 flex items-center justify-between">
              <Logo />
              <ThemeButton />
            </div> */}

            {/* Categories */}
            <div className="flex gap-2 px-6 py-4 border-b border-border">
              {menuCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "outline" : "ghost"}
                  size="sm"
                  className={`rounded-none ${category.active ? "border-border hover:bg-accent" : "hover:bg-accent"}`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Menu Items */}
            <nav className="px-6 py-4">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-between hover:bg-accent py-3 h-auto"
                  asChild
                >
                  <Link to="#">
                    <span className="font-medium">{item.name}</span>
                    {item.hasArrow && <ChevronRight className="h-5 w-5" />}
                  </Link>
                </Button>
              ))}
            </nav>

            <Separator />

            {/* Bottom Links */}
            <div className="px-6 py-4">
              {bottomLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent py-2 h-auto"
                  asChild
                >
                  <Link to="#">{link.name}</Link>
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
