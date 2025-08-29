import React from "react";
import { RouterProvider } from "react-router";
import "@/assets/css/globals.css";
import "@fontsource-variable/plus-jakarta-sans";

import { router } from "@/routes";

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function App() {
  return <RouterProvider router={router} />;
}
