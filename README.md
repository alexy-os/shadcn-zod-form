# Shadcn UI Zod Form Builder (Package)

> Forked from [ilyichv/shadcn-zod-form](https://github.com/ilyichv/shadcn-zod-form)

This fork includes the following enhancements:
- Migration to Bun.js runtime for improved performance
- Added examples directory with test schemas
- Enhanced testing capabilities with `bun run test:examples`

## Changes from Original

### Bun.js Migration
- Replaced Node.js build system with Bun's built-in bundler
- Updated build scripts for Bun compatibility
- Optimized package for Bun's runtime environment

### New Examples & Testing
- Added `examples/schemas/` directory with sample schemas:
  - User profile schema with various field types
  - Product schema with nested objects
- Introduced `test:examples` command for local testing
- Added automated test script to validate form generation

### Usage with Bun

```bash
# Install dependencies
bun install

# Run tests
bun run test:examples

# Development mode
bun run dev

# Build package
bun run build
```

# Origin Author CLI NPM Package

## Features

- Generate shadcn/ui forms from Zod schemas
- Automatically map Zod types to appropriate form components
- Easy-to-use CLI interface

## Installation

```bash
npx shadcn-zod-form@latest init
```

## Usage

```bash
npx shadcn-zod-form@latest generate ./path/to/zod/schema.ts
```

## License

MIT

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.
