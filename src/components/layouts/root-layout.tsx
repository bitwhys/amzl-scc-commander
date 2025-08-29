import React from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Footer } from "@/components/footer.tsx";

export const RootLayout = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="h-svh w-svw overflow-hidden relative">
        <main className="h-full px-3 pt-4 pb-2.5">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
