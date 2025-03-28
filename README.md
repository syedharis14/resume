# Resume Project

This is a Vue 3 + Vite-based resume project. It uses modern tooling to ensure code quality and consistent formatting with ESLint, Prettier, Husky, and lint-staged. The project includes a custom export script to generate a PDF version of your resume.

## Features

- **Vue 3 Single File Components** for building your resume.
- **Vite** for fast development and efficient production builds.
- **ESLint** configured with the new flat config system using `vue-eslint-parser` and `@babel/eslint-parser` for Vue files.
- **Prettier** for automatic code formatting.
- **Husky & lint-staged** to run linters and formatters on staged files before commits.
- Custom scripts for development, building, previewing, exporting (to PDF), and formatting.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd resume
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Project Structure

```
resume/
├── package.json
├── vite.config.js
├── index.html
├── public/
│   └── assets/
│       ├── fonts/
│           ├── FiraCode-Regular.woff
│           └── FiraCode-Regular.woff2
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── style.css
│   ├── page/
│   │   └── ResumePage.vue
│   └── components/
│       ├── HeaderSection.vue
│       ├── ProfileSection.vue
│       ├── TechnicalSkillsSection.vue
│       ├── ExperienceSection.vue
│       ├── ProjectsSection.vue
│       ├── EducationSection.vue
│       ├── AwardsSection.vue
│       └── FooterSection.vue
```

## Available Scripts

- **`npm run dev`**  
  Starts the development server (usually at [http://localhost:5173](http://localhost:5173)).

- **`npm run build`**  
  Builds the project for production.

- **`npm run preview`**  
  Previews the production build.

- **`npm run export`**  
  Builds the project and generates a PDF version of the resume (requires your custom script at `scripts/generate-pdf.js`).

- **`npm run format`**  
  Formats all source files in `src/` using Prettier.

- **`npm test`**  
  A placeholder test script.

## Linting & Formatting

### ESLint

This project uses ESLint with the new flat configuration. Your ESLint configuration (in `eslint.config.js` or `eslint.config.mjs`) uses:
- `vue-eslint-parser` for Vue Single File Components.
- `@babel/eslint-parser` for parsing JavaScript within Vue files.
- Custom rules and globals for both Node and browser environments.

### Prettier

Prettier is configured via a `.prettierrc` file in the project root. Example configuration:

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### Husky & lint-staged

- **Husky** is set up with the `"prepare": "husky install"` script in your `package.json`. After running `npm install`, initialize Husky with:

  ```bash
  npx husky add .husky/pre-commit "npx lint-staged"
  ```

- **lint-staged** is configured to run both Prettier and ESLint auto‑fix. In your `package.json`:

  ```json
  "lint-staged": {
    "*.{js,vue,css,html}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
  ```

This ensures that on each commit, staged files are formatted with Prettier and then linted/fixed with ESLint.

## Usage

### Development

Start the development server:

```bash
npm run dev
```

Open your browser at the provided local URL (e.g., [http://localhost:5173](http://localhost:5173)).

### Production Build & Preview

To build the project for production:

```bash
npm run build
```

Then preview the production build:

```bash
npm run preview
```

### Exporting to PDF

If you have set up a custom script (e.g., `scripts/generate-pdf.js`), you can export your resume to PDF by running:

```bash
npm run export
```

### Code Formatting

Format your code with Prettier by running:

```bash
npm run format
```

## Troubleshooting

- **ESLint Issues:**  
  If ESLint reports parsing errors in your Vue files, ensure your ESLint configuration is using `vue-eslint-parser` and that `@babel/eslint-parser` has `requireConfigFile: false` set in its options.

- **Husky Pre-commit Errors:**  
  If you encounter errors about missing scripts (e.g., `npm test`), add a placeholder test script in your `package.json` or adjust your Husky hook to remove the test step.

## License

This project is licensed under the [MIT License](LICENSE).

---