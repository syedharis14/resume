import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/",
    plugins: [vue()],
    resolve: {
        alias: {
            "#components": resolve(__dirname, "src/components"),
            "#page": resolve(__dirname, "src/page")
        }
    }
});
