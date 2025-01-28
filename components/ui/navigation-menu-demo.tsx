"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu-base";
import * as React from "react";
import { MobileMenu } from "./mobile-menu";

export function NavigationMenuDemo() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-4 left-0 right-0 z-[100]">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-black hover:text-[#ff942b] font-semibold transition-all px-4 py-2"
                  href="/"
                >
                  Accueil
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-black hover:text-[#ff942b] font-semibold transition-all px-4 py-2"
                  href="/a-propos"
                >
                  À propos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-black hover:text-[#ff942b] font-semibold transition-all px-4 py-2"
                  href="/notre-expertise"
                >
                  Notre expertise
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-black hover:text-[#ff942b] font-semibold transition-all px-4 py-2"
                  href="/nos-realisations"
                >
                  Nos réalisations
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-black hover:text-[#ff942b] font-semibold transition-all px-4 py-2"
                  href="/blog"
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-black hover:text-[#ff942b] font-semibold transition-all px-4 py-2"
                  href="/contact"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileMenu isVisible={isVisible} />
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: string }
>(({ title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="group block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-[#ff942b]/5 hover:scale-[1.02] hover:shadow-lg"
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-xl">{icon}</span>}
            <div className="text-base font-semibold leading-none text-black group-hover:text-[#ff942b] transition-colors">
              {title}
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 group-hover:text-gray-700">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
