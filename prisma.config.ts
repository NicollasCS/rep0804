import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "./prisma/schema.prisma",
    migrations: {
        path: "./prisma/migrations",
    },
    
    datasource: {
        url: 'postgresql://postgres:senai@localhost:5433/prisma_db'
    }
});