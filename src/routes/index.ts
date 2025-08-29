import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/components/layouts";
import { SavedItems, savedItemsLoader } from "@/routes/saved-items.tsx";
import { SearchItems, searchItemsLoader } from "@/routes/search-items.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "saved",
        loader: savedItemsLoader,
        Component: SavedItems,
      },
      {
        path: "search",
        loader: searchItemsLoader,
        Component: SearchItems,
      },
    ],
  },
]);
