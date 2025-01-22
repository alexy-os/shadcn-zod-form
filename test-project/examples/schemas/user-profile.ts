import { z } from "zod";

export const userProfileSchema = z.object({
  // Text inputs
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),
  email: z.string().email("Invalid email address"),
  
  // Number input
  age: z.number()
    .min(13, "Must be at least 13 years old")
    .max(120, "Invalid age"),
  
  // Select input
  role: z.enum(["user", "admin", "moderator"]),
  
  // Checkbox
  newsletter: z.boolean().default(false),
  
  // Textarea
  bio: z.string()
    .min(10, "Bio must be at least 10 characters")
    .max(500, "Bio must be at most 500 characters")
    .optional(),
  
  // Date input
  birthDate: z.date(),
  
  // Array of strings
  interests: z.array(z.string())
    .min(1, "Select at least one interest")
    .max(5, "You can select up to 5 interests"),
}); 