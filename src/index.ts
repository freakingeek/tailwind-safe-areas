import plugin from "tailwindcss/plugin";

const safeAreaPlugin: ReturnType<typeof plugin> = plugin(({ addUtilities, theme }) => {
  const spacing = theme("spacing") || {};

  if (Object.keys(spacing).length === 0) {
    console.warn("[Tailwind Safe Areas] Spacing configuration is empty.");
  }

  const entries = Object.entries(spacing).flatMap(([key, value]) => {
    // NOTE: Escape decimal numbers → 0.5
    const hasDecimal = key.includes(".");

    if (hasDecimal) return []

    return [
      [`.mt-safe-${key}`, { marginTop: `calc(${value} + env(safe-area-inset-top))` }],
      [`.mb-safe-${key}`, { marginBottom: `calc(${value} + env(safe-area-inset-bottom))` }],
      [`.pt-safe-${key}`, { paddingTop: `calc(${value} + env(safe-area-inset-top))` }],
      [`.pb-safe-${key}`, { paddingBottom: `calc(${value} + env(safe-area-inset-bottom))` }],
      [`.top-safe-${key}`, { top: `calc(${value} + env(safe-area-inset-top))` }],
      [`.bottom-safe-${key}`, { bottom: `calc(${value} + env(safe-area-inset-bottom))` }],
    ];
  });

  addUtilities(Object.fromEntries(entries));
});

export default safeAreaPlugin;
