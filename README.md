# Shadcn UI Zod Form Builder (Package)

> Forked from [ilyichv/shadcn-zod-form](https://github.com/ilyichv/shadcn-zod-form)

This fork includes the following enhancements:
- Migration to Bun.js runtime for improved performance
- Added examples directory with test schemas
- Enhanced testing capabilities with `bun run test:examples`
- Universal package manager support (npm, yarn, pnpm, bun)
- Optimized bundle with tsup

## Installation

### Via Package Managers

```bash
# Using npm
npm install shadcn-zod-form-builder

# Using yarn
yarn add shadcn-zod-form-builder

# Using pnpm
pnpm add shadcn-zod-form-builder

# Using bun
bun add shadcn-zod-form-builder
```

### Direct from GitHub

You can install the package directly from the GitHub repository:

```json
{
  "dependencies": {
    "shadcn-zod-form-builder": "github:alexy-os/shadcn-zod-form-builder#bunjs"
  }
}
```

Or using package managers:

```bash
npm install alexy-os/shadcn-zod-form-builder#bunjs
# or
yarn add alexy-os/shadcn-zod-form-builder#bunjs
# or
pnpm add alexy-os/shadcn-zod-form-builder#bunjs
# or
bun add alexy-os/shadcn-zod-form-builder#bunjs
```

## Features

- Generate shadcn/ui forms from Zod schemas
- Automatically map Zod types to appropriate form components
- Easy-to-use CLI interface
- Universal compatibility (Node.js and Bun.js)
- ESM and CommonJS support
- TypeScript types included
- Minified and optimized bundle

## Usage

1. Initialize components:
```bash
npx shadcn-zod-form-builder init
```

2. Generate a form from your Zod schema:
```bash
npx shadcn-zod-form-builder generate ./path/to/schema.ts
```

## Development

The project uses modern tooling for development:

- **tsup** for bundling (faster than rollup/webpack)
- **Biome** for linting and formatting (faster than eslint)
- **TypeScript** for type safety
- **Bun** for testing and development

```bash
# Install dependencies
bun install

# Development mode
bun run dev

# Run tests
bun run test:examples

# Build package
bun run build

# Lint code
bun run lint

# Format code
bun run format
```

## Testing

The package includes example schemas in the `examples/` directory:
- User profile schema with various field types
- Product schema with nested objects

To test locally:
```bash
# Clone the repository
git clone https://github.com/alexy-os/shadcn-zod-form-builder.git
cd shadcn-zod-form-builder

# Install dependencies
bun install

# Run tests
bun run test:examples
```

## Bundle Information

The package is built using tsup, which provides:
- Smaller bundle size
- Tree shaking
- Source maps
- TypeScript declarations
- ESM and CommonJS support

Output files in `dist/`:
- `index.js` - ESM module
- `index.cjs` - CommonJS module
- `index.d.ts` - TypeScript declarations
- Source maps for debugging

## License

MIT