import { z } from "zod";

const PriceSchema = z.object({
  amount: z.number()
    .min(0, "Price cannot be negative"),
  currency: z.enum(["USD", "EUR", "GBP"]),
});

const InventorySchema = z.object({
  inStock: z.boolean(),
  quantity: z.number()
    .min(0, "Quantity cannot be negative"),
  warehouse: z.string(),
});

export const productSchema = z.object({
  name: z.string()
    .min(2, "Product name must be at least 2 characters"),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be at most 1000 characters"),
  
  // Nested price object
  price: PriceSchema,
  
  // Nested inventory object
  inventory: InventorySchema,
  
  // Array of strings
  categories: z.array(z.string())
    .min(1, "Select at least one category"),
  
  // Optional fields
  tags: z.array(z.string()).optional(),
  
  // Date fields
  createdAt: z.date(),
  updatedAt: z.date(),
}); 