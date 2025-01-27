"use client";

import { Footer } from "@/components/sections/footer";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NavigationMenuDemo } from "@/components/ui/navigation-menu-demo";

export function LoadingSkeleton() {
  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="h-[400px] bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse" />
            <div className="h-[400px] bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse" />
          </div>
          <div className="h-[400px] bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
