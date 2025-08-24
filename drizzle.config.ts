// import "dotenv/config";
// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   out: "./drizzle",
//   schema: "./src/db/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle", // migration folder
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
