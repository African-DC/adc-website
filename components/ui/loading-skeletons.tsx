"use client";

import { Footer } from "@/components/sections/footer";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NavigationMenuDemo } from "@/components/ui/navigation-menu-demo";

const BaseLayoutLight = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#f2f2f2] flex flex-col">
    <NavigationMenuDemo />
    <main className="pt-24 pb-16 px-4 flex-grow">
      <div className="mt-8">
        <div className="h-12 bg-white/50 backdrop-blur-sm rounded-lg animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="h-16 w-64 bg-white/50 backdrop-blur-sm rounded-lg animate-pulse mx-auto" />
          <div className="h-8 w-96 bg-white/50 backdrop-blur-sm rounded-lg animate-pulse mx-auto" />
        </div>
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

const BaseLayoutDark = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-black flex flex-col relative">
    <div className="absolute inset-0 z-0">
      <FlickeringGrid
        className="size-full"
        squareSize={4}
        gridGap={6}
        color="#ff942b"
        maxOpacity={0.3}
        flickerChance={0.1}
      />
    </div>
    <NavigationMenuDemo />
    <main className="pt-24 pb-16 px-4 flex-grow relative z-10">
      <div className="mt-8">
        <div className="h-12 bg-white/50 backdrop-blur-sm rounded-lg animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="h-16 w-64 bg-white/50 backdrop-blur-sm rounded-lg animate-pulse mx-auto" />
          <div className="h-8 w-96 bg-white/50 backdrop-blur-sm rounded-lg animate-pulse mx-auto" />
        </div>
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export function AboutSkeleton() {
  return (
    <BaseLayoutLight>
      <div className="space-y-8">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse p-8 h-[200px]" />
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse h-[300px]" />
      </div>
    </BaseLayoutLight>
  );
}

export function ExpertiseSkeleton() {
  return (
    <BaseLayoutLight>
      <div className="grid auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2 bg-white/50 backdrop-blur-sm rounded-xl animate-pulse" />
        <div className="bg-white/50 backdrop-blur-sm rounded-xl animate-pulse" />
        <div className="md:col-span-3 bg-white/50 backdrop-blur-sm rounded-xl animate-pulse" />
      </div>
      <div className="mt-16">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse h-[300px]" />
      </div>
    </BaseLayoutLight>
  );
}

export function RealisationsSkeleton() {
  return (
    <BaseLayoutLight>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse h-[300px]"
          />
        ))}
      </div>
      <div className="mt-16">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse h-[300px]" />
      </div>
    </BaseLayoutLight>
  );
}

export function BlogSkeleton() {
  return (
    <BaseLayoutLight>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse h-[350px]"
          />
        ))}
      </div>
      <div className="mt-16">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse h-[250px]" />
      </div>
    </BaseLayoutLight>
  );
}

export function ContactSkeleton() {
  return (
    <BaseLayoutDark>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse h-[400px]" />
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse h-[400px]" />
      </div>
      <div className="h-[400px] bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse" />
    </BaseLayoutDark>
  );
}
