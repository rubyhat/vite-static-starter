import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true, // Удаление лишних пробелов
        removeComments: true, // Удаление комментариев
        removeRedundantAttributes: true, // Удаление ненужных атрибутов (например, type="text" у script)
        useShortDoctype: true, // Использование короткого DOCTYPE
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "src/pages/about.html"), // Добавляем новую страницу
      },
    },
  },
});
