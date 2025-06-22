# @shxlab/ui-utils

Tiny utility functions for UI development. Currently includes smart Tailwind CSS class merging.

## Installation

```bash
npm install @shxlab/ui-utils
# or
pnpm add @shxlab/ui-utils
# or
yarn add @shxlab/ui-utils
```

## Usage

### `cn()` - Smart Tailwind CSS Class Merging

Combines the power of `clsx` for conditional classes with `tailwind-merge` for intelligent deduplication.

```typescript
import { cn } from "@shxlab/ui-utils";

// Basic usage
cn("px-2 py-1", "text-red-500");
// → 'px-2 py-1 text-red-500'

// Conditional classes
cn("px-2", isError && "text-red-500", isDisabled && "opacity-50");

// Smart deduplication (tailwind-merge)
cn("px-2 py-1", "px-4");
// → 'py-1 px-4' (px-2 is overridden by px-4)

// Complex example
cn(
  "base-class",
  {
    "text-red-500": hasError,
    "text-green-500": isSuccess,
  },
  size === "large" && "px-4 py-2",
  size === "small" && "px-2 py-1"
);
```

### Direct import

You can also import the function directly:

```typescript
import { cn } from "@shxlab/ui-utils/cn";
```

## API

### `cn(...inputs: ClassValue[]): string`

Merges class names intelligently.

**Parameters:**

- `inputs` - Any number of class values (strings, objects, arrays, etc.)

**Returns:**

- A merged and deduplicated class string

## Dependencies

- [`clsx`](https://github.com/lukeed/clsx) - For conditional class handling
- [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) - For intelligent Tailwind CSS class deduplication
