import React from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Footer } from "@/components/footer.tsx";

export const RootLayout = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <main
        className="flex-1 overflow-y-auto overscroll-contain px-3 pb-2.5 select-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};
