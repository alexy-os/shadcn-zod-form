import { Command } from "commander";
import path from "path";
import { generate } from "../../src/commands/generate";
import { initCommand } from "../../src/commands/init";

async function test() {
  try {
    // Test init command
    console.log("Testing init command...");
    await initCommand.parseAsync(["node", "test.ts", "init"]);
    
    // Test generate command with user profile schema
    console.log("\nTesting generate command with user profile schema...");
    const userProfilePath = path.join(__dirname, "schemas", "user-profile.ts");
    await generate.parseAsync(["node", "test.ts", "generate", userProfilePath]);
    
    // Test generate command with product schema
    console.log("\nTesting generate command with product schema...");
    const productPath = path.join(__dirname, "schemas", "product.ts");
    await generate.parseAsync(["node", "test.ts", "generate", productPath]);
    
  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  }
}

test(); 