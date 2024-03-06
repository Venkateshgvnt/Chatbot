import { defineConfig } from "vite";
import path from "path";
import dotenv from "dotenv";
import dts from "vite-plugin-dts";

dotenv.config();

const enableHttps = process.env.ENABLE_HTTPS === "true";

let configuration = {
    outDir: "dist",

    sourcemap: true,


    server: {
        port: 3001,
        open: false,

        static: {
            directory: "impl",
            watch: true,
        },
    },

    build: {
        outDir: "dist",
        lib: {
            entry: path.resolve(__dirname, "src/main.ts"),
            name: "chatbot",
            fileName: (format) => `chatbot.${format}.js`,
        },
    },

    // Configure the plugins
    plugins: [
        dts({
            outputDir: "dist",
            outputAsModuleFolder: true,
        }),
    ],
};

if (enableHttps) {
    console.log("Enabling HTTPS");
    configuration.server.https = {
        key: path.resolve(__dirname, process.env.HTTPS_KEY_PATH),
        cert: path.resolve(__dirname, process.env.HTTPS_CERT_PATH),
        ca: path.resolve(__dirname, process.env.HTTPS_CA_PATH),
    };

    // change port to 3001.
    configuration.server.port = 3001;
}

export default defineConfig(configuration);