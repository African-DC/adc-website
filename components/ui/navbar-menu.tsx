"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type MenuItemWithSubMenuProps = {
  item: string;
  setActive: (item: string | null) => void;
  active: string | null;
  children: React.ReactNode;
};

export const MenuItem = ({
  item,
  setActive,
  active,
  children,
}: MenuItemWithSubMenuProps) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <motion.p
        animate={{
          color: active === item ? "#ff8303" : "#fff",
        }}
        className="cursor-pointer text-white"
      >
        {item}
      </motion.p>
      {active === item && (
        <div className="absolute top-[calc(100%+1rem)] left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-black border border-orange-500/20 rounded-lg shadow-xl p-4"
          >
            {children}
          </motion.div>
        </div>
      )}
    </div>
  );
};

type MenuProps = {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
};

export const Menu = ({ children }: MenuProps) => {
  return (
    <nav className="relative rounded-full border border-orange-500/30 bg-black shadow-input flex justify-center space-x-8 px-8 py-4">
      {children}
    </nav>
  );
};

interface HoveredLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const HoveredLink = ({ children, ...props }: HoveredLinkProps) => {
  return (
    <Link
      {...props}
      className="text-neutral-200 hover:text-orange-500 transition-colors"
    >
      {children}
    </Link>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md object-cover"
      />
      <div>
        <h4 className="text-neutral-200 font-medium mb-1">{title}</h4>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </Link>
  );
};

interface MenuItem {
  name: string;
  link: string;
}

export const NavbarMenu = () => {
  const [isOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: "À propos",
      link: "/a-propos",
    },
    {
      name: "Notre expertise",
      link: "/notre-expertise",
    },
    {
      name: "Nos réalisations",
      link: "/nos-realisations",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    window.location.href = href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#ff942b]">
            ADC
          </Link>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={handleItemClick}
                className="text-gray-600 hover:text-[#ff942b] transition-colors font-['Open_Sans']"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-600 hover:text-[#ff942b] transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};
