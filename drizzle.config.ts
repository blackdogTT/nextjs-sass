import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: './src/server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "123456",
    ssl: false,
    database: "postgres"
  },
  strict: true,
  verbose: true
})