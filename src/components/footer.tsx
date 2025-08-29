import { FloppyDiskIcon, GearSixIcon, ListMagnifyingGlassIcon } from "@phosphor-icons/react";
import { Link, type LinkProps, useMatch, useResolvedPath } from "react-router";
import { cx } from "@/lib/utils.ts";

function CustomLink({ children, to, className, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={cx(
          "[--current-background-color:var(--color-black-a12)]",
          "[--current-text-color:var(--color-gray-10)] text-(--current-text-color)",
          {
            "[--current-background-color:var(--color-accent-9)] [--current-text-color:var(--color-accent-11)]":
              match,
          },
          className,
        )}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export const Footer = () => {
  return (
    <nav className="absolute bottom-0 inset-x-0 px-3 py-1.5 bg-background">
      <div className="flex items-center justify-between">
        <CustomLink to="/saved" className={`flex flex-col items-center space-y-1 py-2 px-3`}>
          <FloppyDiskIcon className="text-current" size={28} weight="fill" />
          <span className={`text-xs font-bold uppercase`}>saved</span>
        </CustomLink>
        <CustomLink
          to="/search"
          className="w-14 h-14 bg-(--current-background-color) rounded-full flex items-center justify-center"
        >
          <ListMagnifyingGlassIcon weight="bold" size={32} className="text-white" />
        </CustomLink>

        <button
          className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors`}
        >
          <GearSixIcon size={28} weight="fill" className="text-gray-9" />
        </button>
      </div>
    </nav>
  );
};
