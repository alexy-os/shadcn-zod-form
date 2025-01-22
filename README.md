# Shadcn UI Zod Form Builder (Development Package)

> ⚠️ **Note**: This package is currently in development. Built with Bun.js.

A CLI tool to automatically generate [shadcn/ui](https://ui.shadcn.com/) forms from Zod schemas.

## Features

- Generate shadcn/ui forms from Zod schemas
- Automatically map Zod types to appropriate form components
- Easy-to-use CLI interface
- Built with Bun.js for improved performance

## See example Application

[Example Application](https://github.com/alexy-os/bunjs-monorepo-next-zod-forms)

Allows you to generate forms from zod schemas and use them in your application.

## Installation

```bash
bun add shadcn-zod-form-builder
```

## Usage

1. Initialize the form builder (this will update your components.json):
```bash
bun x shadcn-zod-form-builder init
```

2. Generate a form from your Zod schema:
```bash
bun x shadcn-zod-form-builder generate ./path/to/schema.ts
```

When prompted, enter the name for your form (e.g., "user-form", "contact-form").

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

### Using Generated Form

Import and use the generated form in your components:

```tsx
import { TestForm } from "@/components/form/test-form";

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Form Example</h1>
        <TestForm />
      </div>
    </div>
  );
}
```

## Development

```bash
# Install dependencies
bun install

# Development mode
bun run dev

# Build package
bun run build
```

## License

MIT