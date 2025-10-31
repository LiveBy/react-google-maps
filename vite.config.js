import react from "@vitejs/plugin-react"
import { glob } from "glob"
import { fileURLToPath } from "node:url"
import { extname, relative, resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        main: resolve(__dirname, "lib/main.ts"),
        "components/addons/index": resolve(
          __dirname,
          "lib/components/addons/index.ts"
        ),
        withGoogleMap: resolve(__dirname, "lib/withGoogleMap.jsx"),
        withScriptjs: resolve(__dirname, "lib/withScriptjs.jsx"),
        constants: resolve(__dirname, "lib/constants.js"),
      },
      fileName: (format, entryName) => `${entryName}.${format}.js`, // Customize output file names
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts"],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
})
