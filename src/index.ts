import plugin from "tailwindcss/plugin";

const safeAreasPlugin = plugin(({ addUtilities, theme }) => {
  const spacing = theme("spacing");

  if (!spacing) {
    console.warn("[Tailwind Safe Areas] You have to add a configuration for spacing in your project");
    return;
  }

  const safeMargins = Object.fromEntries(
    Object.entries(spacing).flatMap(([key, value]) => [
      [
        `.mt-safe-\\[${key}\\]`,
        { marginTop: `calc(${value} + env(safe-area-inset-top))` },
      ],
      [
        `.mb-safe-\\[${key}\\]`,
        { marginBottom: `calc(${value} + env(safe-area-inset-bottom))` },
      ],
    ])
  );

  const safePaddings = Object.fromEntries(
    Object.entries(spacing).flatMap(([key, value]) => [
      [
        `.pt-safe-\\[${key}\\]`,
        { paddingTop: `calc(${value} + env(safe-area-inset-top))` },
      ],
      [
        `.pb-safe-\\[${key}\\]`,
        { paddingBottom: `calc(${value} + env(safe-area-inset-bottom))` },
      ],
    ])
  );

  const safePositions = Object.fromEntries(
    Object.entries(spacing).flatMap(([key, value]) => [
      [
        `.top-safe-\\[${key}\\]`,
        { top: `calc(${value} + env(safe-area-inset-top))` },
      ],
      [
        `.bottom-safe-\\[${key}\\]`,
        { bottom: `calc(${value} + env(safe-area-inset-bottom))` },
      ],
    ])
  );

  addUtilities(safeMargins);
  addUtilities(safePaddings);
  addUtilities(safePositions);
});

export default safeAreasPlugin;
