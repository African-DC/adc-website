"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  const breadcrumbVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  if (pathname === "/") return null;

  return (
    <nav className="flex px-4 py-3 bg-white backdrop-blur-sm rounded-lg shadow-sm mb-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2">
        <motion.li
          variants={breadcrumbVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Link
            href="/"
            className="text-gray-500 hover:text-[#ff942b] transition-colors flex items-center"
          >
            <Home className="h-4 w-4" />
          </Link>
        </motion.li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const formattedPath = path
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <motion.li
              key={path}
              className="flex items-center space-x-2"
              variants={breadcrumbVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link
                href={href}
                className={cn(
                  "font-['Open_Sans']",
                  isLast
                    ? "text-[#ff942b] font-semibold"
                    : "text-gray-500 hover:text-[#ff942b] transition-colors"
                )}
              >
                {formattedPath}
              </Link>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}
