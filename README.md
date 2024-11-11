# tailwind-safe-areas 🎯
A Tailwind CSS plugin that adds safe-area padding, margin, and position utilities for iOS devices using `env(safe-area-inset-*)`.

<br />

## Installation
You can install `tailwind-safe-areas` using your preferred package manager:

```sh
$ npm install tailwind-safe-areas
# yarn add tailwind-safe-areas
```

<br />

## Usage
1. Add the plugin to your Tailwind CSS configuration in `tailwind.config.js`:

```JavaScript
// tailwind.config.js
const tailwindSafeAreasPlugin = require("tailwind-safe-areas");

module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    tailwindSafeAreasPlugin,
  ],
};
```

<br />

2. Use the custom safe-area classes in your HTML or JSX:

```HTML
<div class="pt-safe-1 pb-safe-2 m-safe-1 bottom-safe-4">
  <!-- Content with safe-area padding and position adjustments -->
</div>
```

<br />

## How It Works
The plugin uses iOS-specific CSS environment variables like `env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`, etc., to ensure padding, margin, and height values account for device safe areas.

<br />

## License
This project is licensed under the [ISC](https://github.com/sttatusx/vue-share-modal/blob/master/LICENSE) License.
