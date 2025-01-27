"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu-base";
import * as React from "react";

const components: {
  title: string;
  href: string;
  description: string;
  icon?: string;
}[] = [
  {
    title: "Développement Web",
    href: "/web-development",
    description: "Solutions web sur mesure pour votre entreprise.",
    icon: "🌐",
  },
  {
    title: "Marketing Digital",
    href: "/digital-marketing",
    description: "Stratégies marketing innovantes pour votre croissance.",
    icon: "📈",
  },
  {
    title: "Design UX/UI",
    href: "/ux-ui-design",
    description: "Interfaces utilisateur modernes et intuitives.",
    icon: "🎨",
  },
  {
    title: "Consulting Digital",
    href: "/digital-consulting",
    description: "Expertise et conseils pour votre transformation digitale.",
    icon: "💡",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-[#ff942b] font-semibold transition-all">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur-md rounded-xl shadow-2xl">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-[#ff942b] font-semibold transition-all">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-br from-[#ff942b] via-orange-500 to-orange-600 p-4 no-underline outline-none focus:shadow-md transition-all hover:shadow-xl hover:scale-[1.02]"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-bold text-white">
                      Africa Digit Consulting
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Votre partenaire pour la transformation digitale en
                      Afrique.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/expertise" title="Notre Expertise" icon="⭐">
                Découvrez nos domaines d&apos;expertise et nos réalisations.
              </ListItem>
              <ListItem
                href="/methodologie"
                title="Notre Méthodologie"
                icon="📋"
              >
                Une approche structurée pour des résultats garantis.
              </ListItem>
              <ListItem href="/technologies" title="Nos Technologies" icon="🚀">
                Les dernières technologies au service de vos projets.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-[#ff942b] font-semibold transition-all">
            À Propos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur-md rounded-xl shadow-2xl">
              <ListItem href="/notre-equipe" title="Notre Équipe" icon="👥">
                Une équipe d&apos;experts passionnés par le digital.
              </ListItem>
              <ListItem href="/notre-mission" title="Notre Mission" icon="🎯">
                Accompagner la transformation digitale en Afrique.
              </ListItem>
              <ListItem href="/nos-valeurs" title="Nos Valeurs" icon="✨">
                Excellence, Innovation et Engagement.
              </ListItem>
              <ListItem href="/contact" title="Contact" icon="📞">
                Discutons de votre projet digital.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
