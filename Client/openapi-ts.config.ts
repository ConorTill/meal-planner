import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "../Server/wwwroot/swagger/v1/swagger.json",
  output: {
    format: "prettier",
    lint: "eslint",
    path: "src/api/",
    clean: false,
  },
  plugins: ["@hey-api/typescript"],
});
