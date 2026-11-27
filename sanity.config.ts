"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { literaturePiece, literatureSection } from "./src/sanity/schemaTypes";

export default defineConfig({
    name: "splitting-rabbits",
    title: "Splitting Rabbits Literature",
    basePath: "/studio",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    plugins: [structureTool()],
    schema: {
        types: [literaturePiece, literatureSection],
    },
});
