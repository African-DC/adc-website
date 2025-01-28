"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu-base";
import { Menu } from "lucide-react";
import * as React from "react";

interface MobileMenuProps {
  isVisible: boolean;
}

export function MobileMenu({ isVisible }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-4 left-0 right-0 z-[100] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Bouton menu burger */}
        <div className="w-full flex justify-end py-4">
          <button
            onClick={toggleMenu}
            className="p-2 text-black hover:text-[#ff942b] transition-colors bg-white/80 backdrop-blur-md rounded-full shadow-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Menu déroulant */}
        {isMenuOpen && (
          <div className="fixed left-1/2 transform  w-[calc(100%-2rem)] top-20 bg-white/95 backdrop-blur-md rounded-lg shadow-lg text-center">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="py-4 flex flex-col w-full">
                <NavigationMenuItem className="w-full">
                  <a
                    className="text-black hover:text-[#ff942b] hover:bg-gray-100 font-semibold transition-all px-6 py-4 flex items-center justify-center"
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accueil
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <a
                    className="text-black hover:text-[#ff942b] hover:bg-gray-100 font-semibold transition-all px-6 py-4 flex items-center justify-center"
                    href="/a-propos"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    À propos
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <a
                    className="text-black hover:text-[#ff942b] hover:bg-gray-100 font-semibold transition-all px-6 py-4 flex items-center justify-center"
                    href="/notre-expertise"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Notre expertise
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <a
                    className="text-black hover:text-[#ff942b] hover:bg-gray-100 font-semibold transition-all px-6 py-4 flex items-center justify-center"
                    href="/nos-realisations"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nos réalisations
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <a
                    className="text-black hover:text-[#ff942b] hover:bg-gray-100 font-semibold transition-all px-6 py-4 flex items-center justify-center"
                    href="/blog"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <a
                    className="text-black hover:text-[#ff942b] hover:bg-gray-100 font-semibold transition-all px-6 py-4 flex items-center justify-center"
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </div>
  );
}
