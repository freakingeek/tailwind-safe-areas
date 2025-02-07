import plugin from "tailwindcss/plugin";
import { formatClassName } from "./utils/format";

const safeAreasPlugin = plugin(({ addUtilities, theme }) => {
  const spacing = theme("spacing");

  if (!spacing) {
    console.warn("[Tailwind Safe Areas] You have to add a configuration for spacing in your project");
    return;
  }

  const safeMargins = Object.fromEntries(
    Object.entries(spacing).flatMap(([key, value]) => [
      [
        `.mt-safe-${formatClassName(key)}`,
        { marginTop: `calc(${value} + env(safe-area-inset-top))` },
      ],
      [
        `.mb-safe-${formatClassName(key)}`,
        { marginBottom: `calc(${value} + env(safe-area-inset-bottom))` },
      ],
    ])
  );

  const safePaddings = Object.fromEntries(
    Object.entries(spacing).flatMap(([key, value]) => [
      [
        `.pt-safe-${formatClassName(key)}`,
        { paddingTop: `calc(${value} + env(safe-area-inset-top))` },
      ],
      [
        `.pb-safe-${formatClassName(key)}`,
        { paddingBottom: `calc(${value} + env(safe-area-inset-bottom))` },
      ],
    ])
  );

  const safePositions = Object.fromEntries(
    Object.entries(spacing).flatMap(([key, value]) => [
      [
        `.top-safe-${formatClassName(key)}`,
        { top: `calc(${value} + env(safe-area-inset-top))` },
      ],
      [
        `.bottom-safe-${formatClassName(key)}`,
        { bottom: `calc(${value} + env(safe-area-inset-bottom))` },
      ],
    ])
  );

  addUtilities(safeMargins);
  addUtilities(safePaddings);
  addUtilities(safePositions);
});

export default safeAreasPlugin;
