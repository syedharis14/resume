import babelEslintParser from "@babel/eslint-parser";
import vuePlugin from "eslint-plugin-vue";
import vueEslintParser from "vue-eslint-parser";

export default [
    // Base configuration for all .js and .vue files
    {
        files: ["**/*.{js,vue}"],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                process: "readonly",
                module: "writable",
                require: "readonly",
                console: "readonly",
                window: "readonly",
                document: "readonly"
            }
        },
        rules: {
            "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
            "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
        }
    },
    // Override configuration for Vue files
    {
        files: ["**/*.vue"],
        languageOptions: {
            // Use vue-eslint-parser for .vue files
            parser: vueEslintParser,
            parserOptions: {
                // Delegate parsing of the <script> blocks to @babel/eslint-parser
                parser: babelEslintParser,
                ecmaVersion: 2020,
                sourceType: "module",
                requireConfigFile: false // disable Babel config requirement
            }
        },
        plugins: {
            vue: vuePlugin
        },
        rules: {
            // Add or override Vue-specific rules here if needed.
            // e.g., 'vue/multi-word-component-names': 'off'
        }
    }
];
