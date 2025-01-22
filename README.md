# Shadcn UI Zod Form Builder (Development Package)

> ⚠️ **Note**: This package is currently in development and not yet published to npm. Use with caution in production environments.

A CLI tool to automatically generate [shadcn/ui](https://ui.shadcn.com/) forms from Zod schemas.

## Features

- Generate shadcn/ui forms from Zod schemas
- Automatically map Zod types to appropriate form components
- Easy-to-use CLI interface
- Built with Bun.js for improved performance

## Installation

Since this package is not yet published to npm, you'll need to install it directly from GitHub:

```json
{
  "dependencies": {
    "shadcn-zod-form-builder": "github:alexy-os/shadcn-zod-form-builder#dist"
  }
}
```

Or using package managers:

```bash
# Using npm
npm install github:alexy-os/shadcn-zod-form-builder#dist

# Using yarn
yarn add github:alexy-os/shadcn-zod-form-builder#dist

# Using pnpm
pnpm add github:alexy-os/shadcn-zod-form-builder#dist

# Using bun
bun add github:alexy-os/shadcn-zod-form-builder#dist
```

## Usage

1. Initialize components:
```bash
npx shadcn-zod-form-builder@latest init
```

2. Generate a form from your Zod schema:
```bash
npx shadcn-zod-form-builder@latest generate ./path/to/schema.ts
```

### Example Schema

```typescript
import { z } from "zod";

export const testSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  
  email: z.string()
    .email("Invalid email address"),
  
  age: z.number()
    .min(18, "Must be at least 18 years old")
    .max(100, "Invalid age"),
  
  role: z.enum(["user", "admin"])
    .default("user"),
  
  bio: z.string()
    .min(10, "Bio must be at least 10 characters")
    .optional(),
  
  newsletter: z.boolean()
    .default(false),
});
```

## Development

The project uses modern tooling for development:

- **Bun.js** for runtime and package management
- **tsup** for bundling
- **Biome** for linting and formatting
- **TypeScript** for type safety

```bash
# Install dependencies
bun install

# Development mode
bun run dev

# Run tests
bun run test:examples

# Build package
bun run build
```

## License

MIT