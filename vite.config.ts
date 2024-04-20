import {vitePlugin as remix} from "@remix-run/dev";
import {installGlobals} from "@remix-run/node";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import routes from "./routes";

installGlobals();

export default defineConfig({
    plugins: [
        remix({
            appDirectory: 'src',
            routes
        }),
        tsconfigPaths()
    ],
});
