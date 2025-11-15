import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetHeader } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "@/components/logo";
import ThemeButton from "@/components/kromm-ui/ThemeButton";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const menuCategories = [
  { id: "featured", name: "Featured" },
  { id: "women", name: "Women" },
  { id: "men", name: "Men" },
  { id: "kids", name: "Kids" },
  { id: "sale", name: "Sale" },
];

const categoryMenuItems = {
  featured: [
    {
      name: "Holiday Gifts",
      hasArrow: true,
      subItems: [
        { name: "Gift Guide", link: "/gift-guide" },
        { name: "Gifts for Her", link: "/gifts-her" },
        { name: "Gifts for Him", link: "/gifts-him" },
        { name: "Gifts for Kids", link: "/gifts-kids" },
        { name: "Gifts for the Fam", link: "/gifts-fam" },
        { name: "Epic Gifts", link: "/epic-gifts" }
      ]
    },
    { name: "New Arrivals", link: "/new-arrivals" },
    { name: "Best Sellers", link: "/best-sellers" },
    { name: "All Shoes", link: "/shoes" },
    {
      name: "Icons",
      hasArrow: true,
      subItems: [
        "View All",
        "Old Skool",
        "Authentic",
        "Classic Slip-On",
        "Half Cab",
        "Sk8-Hi",
      ]
    },
    {
      name: "Trending",
      hasArrow: true,
      subItems: [
        "View All",
        "Cold Weather Gear",
        "Embellishment & Charms",
        "Premiun",
        "Snowboard Boots",
        "Super Lowpro"
      ]
    },
    {
      name: "Shop by Sport",
      hasArrow: true,
      subItems: [
        "View All",
        "Snowboarding",
        "Skateboarding",
        "BMX",
        "Surfing",
      ]
    },
    { name: "Customize Our Shoes" },
    { name: "Reworked: Waffle Shop" },
    { name: "Shop All", link: "/shop-all" },
  ],
  women: [
    { name: "Gifts for Her" },
    { name: "New Arrivals" },
    { name: "Best Sellers" },
    {
      name: "Shoes",
      hasArrow: true,
      subItems: [
        "View All",
        "New Arrivals",
        "Best Sellers",
        "Icons",
        "Low Tops",
        "High Tops",
        "Cold Weather",
        "Loafers & Mules",
        "Mary Janes",
        "Premiun",
        "Wide Width"
      ]
    },
    {
      name: "Clothing",
      hasArrow: true,
      subItems: [
        "View All",
        "Graphics",
        "Hoddies & Jackets",
        "T-Shirts & Tops",
        "Pants & Shots",
        "Dresses & Skirts"
      ]
    },
    {
      name: "Accessories",
      hasArrow: true,
      subItems: [
        "View All",
        "Backpacks & Bags",
        "Hats & Beanies",
        "Socks",
        "Sunglasses",
        "Wallets & Belts",
        "Laces & Shoecare"
      ]
    },
    {
      name: "Shop by Sport",
      hasArrow: true,
      subItems: [
        "View All",
        "Snowboarding",
        "Skateboarding",
        "BMX",
        "Surfing",
      ]
    },
    {
      name: "Sale",
      hasArrow: true,
      subItems: [
        "View All",
        "Shoes",
        "Clothing",
        "Accessories",
        "Final Sale",
      ]
    },
    { name: "All Women's" },
  ],
  men: [
    { name: "Gifts for Him" },
    { name: "New Arrivals" },
    { name: "Best Sellers" },
    {
      name: "Shoes",
      hasArrow: true,
      subItems: [
        "View All",
        "New Arrivals",
        "Best Sellers",
        "Icons",
        "Low Tops",
        "High Tops",
        "Cold Weather",
        "Loafers & Mules",
        "Mary Janes",
        "Premiun",
        "Wide Width"
      ]
    },
    {
      name: "Clothing",
      hasArrow: true,
      subItems: [
        "View All",
        "Graphics",
        "Hoddies & Jackets",
        "T-Shirts & Tops",
        "Pants & Sweetpants",
        "Shorts & Boardshorts"
      ]
    },
    {
      name: "Accessories",
      hasArrow: true,
      subItems: [
        "View All",
        "Backpacks & Bags",
        "Hats & Beanies",
        "Socks",
        "Sunglasses",
        "Wallets & Belts",
        "Laces & Shoecare"
      ]
    },
    {
      name: "Shop by Sport",
      hasArrow: true,
      subItems: [
        "View All",
        "Snowboarding",
        "Skateboarding",
        "BMX",
        "Surfing",
      ]
    },
    {
      name: "Sale",
      hasArrow: true,
      subItems: [
        "View All",
        "Shoes",
        "Clothing",
        "Accessories",
        "Final Sale",
      ]
    },
    { name: "All Men's" },
  ],
  kids: [
    { name: "Gifts for Her" },
    { name: "New Arrivals" },
    { name: "Best Sellers" },
    {
      name: "Shoes",
      hasArrow: true,
      subItems: [
        "View All",
        "New Arrivals",
        "Best Sellers",
        "Big Kids (S-XL)",
        "Little Kids (10.5C-3Y)",
        "Toddler (2-10C)",
        "Infant & Baby",
        "All Girls Shoes",
        "All Boys Shoes",
      ]
    },
    {
      name: "Clothing",
      hasArrow: true,
      subItems: [
        "View All",
        "Big Kids (S-XL)",
        "Toddler & Little Kids (2T-7)",
        "All Girls Clothing",
        "All Boys Clothing"
      ]
    },
    {
      name: "Accessories",
      hasArrow: true,
      subItems: [
        "View All",
        "Backpacks & Bags",
        "Hats & Beanies",
        "Socks",
      ]
    },
    {
      name: "Sale",
      hasArrow: true,
      subItems: [
        "View All",
        "Shoes",
        "Clothing",
        "Accessories",
        "All Girls Sale",
        "All Boys Sale"
      ]
    },
    { name: "All Kid's" },
  ],
  sale: [
    { name: "Shoes" },
    { name: "Clothing" },
    { name: "Accessories" },
    { name: "Men" },
    { name: "Women" },
    { name: "Kids" },
    { name: "Final Sale" },
    { name: "All Sale" },
  ],
};

const bottomLinks = [
  { name: "Sign In / Sign Up" },
  { name: "Favorites" },
  { name: "Order Status" },
  { name: "Gift Cards" },
  { name: "Find a Store" },
  { name: "Help Center" },
  { name: "Live Chat" },
];

// Collapsible Menu Item Component
const CollapsibleMenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="link"
          className="w-full justify-between group py-3 h-auto"
          asChild
        >
          <Link to={item.link || "#"}>
            <span className="font-medium group-hover:-rotate-4">{item.name}</span>
            {isOpen ? (
              <ChevronDown className="h-5 w-5 transition-transform" />
            ) : (
              <ChevronRight className="h-5 w-5 transition-transform" />
            )}
          </Link>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 space-y-1 mt-1">
        {item.subItems.map((subItem, subIndex) => (
          <Button
            key={`${typeof subItem === 'string' ? subItem : subItem.name}-${subIndex}`}
            variant="link"
            className="w-full justify-start group py-2 h-auto text-sm text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link to={typeof subItem === 'string' ? "#" : subItem.link || "#"}>
              <span className="font-medium group-hover:-rotate-4">
                {typeof subItem === 'string' ? subItem : subItem.name}
              </span>
            </Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export const NavigationSheet = ({ isScrolling, isProductPage }) => {
  const [activeCategory, setActiveCategory] = useState("featured");

  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`transition-colors ${!isScrolling && !isProductPage ? "hover:bg-white/20" : ""}`}
        >
          <Menu className={`h-[1.2rem] w-[1.2rem] transition-colors ${isScrolling || isProductPage ? "text-black dark:text-white" : "text-white"}`} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-md p-0 bg-background backdrop-blur-md border-none">
        <ScrollArea className="h-full">
          <div className="flex flex-col">
            <SheetHeader className=''>
              <Logo />
              <ThemeButton />
            </SheetHeader>

            {/* Categories Tabs */}
            <div className="flex gap-2 px-6 py-4 border-b border-border overflow-x-auto">
              {menuCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "outline" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-none whitespace-nowrap ${activeCategory === category.id
                    ? "border-border hover:bg-accent"
                    : "hover:bg-accent"
                    }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Menu Items - Dynamic based on active category */}
            <nav className="px-6 py-4 space-y-1">
              {categoryMenuItems[activeCategory].map((item, index) => {
                if (item.hasArrow && item.subItems) {
                  return (
                    <CollapsibleMenuItem
                      key={`${item.name}-${index}`}
                      item={item}
                    />
                  );
                }

                return (
                  <Button
                    key={`${item.name}-${index}`}
                    variant="link"
                    className="w-full justify-start group py-3 h-auto"
                    asChild
                  >
                    <Link to={item.link}>
                      <span className="font-medium group-hover:-rotate-4">{item.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </nav>

            <Separator />

            {/* Bottom Links */}
            <div className="px-6 py-4">
              {bottomLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="link"
                  className="w-full justify-start text-muted-foreground hover:text-foreground group py-2 h-auto"
                  asChild
                >
                  <Link to="#">
                    <span className="group-hover:-rotate-4">{link.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
