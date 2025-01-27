"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export const Menu = ({ setActive, children }: MenuProps) => {
  return (
    <nav className="relative rounded-full border border-orange-500/30 bg-black shadow-input flex justify-center space-x-8 px-8 py-4">
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...props }: any) => {
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
