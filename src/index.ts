import plugin from "tailwindcss/plugin";

const safeAreaPlugin = plugin(({ addUtilities, theme }) => {
  const spacing = theme("spacing");

  if (!spacing) {
    console.warn("[Tailwind Safe Areas] You have to add a configuration for spacing in your project");
    return;
  }

  const entries = Object.entries(spacing).flatMap(([key, value]) => {
    // NOTE: Escape the dot so 0.5 → 0\.5
    const escaped = key.replace(/\./g, "\\.");

    return [
      [`.mt-safe-${escaped}`, { marginTop: `calc(${value} + env(safe-area-inset-top))` }],
      [`.mb-safe-${escaped}`, { marginBottom: `calc(${value} + env(safe-area-inset-bottom))` }],
      [`.pt-safe-${escaped}`, { paddingTop: `calc(${value} + env(safe-area-inset-top))` }],
      [`.pb-safe-${escaped}`, { paddingBottom: `calc(${value} + env(safe-area-inset-bottom))` }],
      [`.top-safe-${escaped}`, { top: `calc(${value} + env(safe-area-inset-top))` }],
      [`.bottom-safe-${escaped}`, { bottom: `calc(${value} + env(safe-area-inset-bottom))` }],
    ];
  });

  addUtilities(Object.fromEntries(entries));
}) as any;

export default safeAreaPlugin;
