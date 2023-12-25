import { defineConfig } from 'vite'
// import { internalIpV4 } from 'internal-ip'
import react from "@vitejs/plugin-react";
export default defineConfig(async () => {
    //   const host = await internalIpV4()
    /** @type {import('vite').UserConfig} */
    const config = {
        plugins: [react()],
        // esbuild: {
        //     loader: {
        //       '.js': '.jsx',
        //     },
        //   },
        // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
        // prevent vite from obscuring rust errors
        clearScreen: false,
        server: {
            host: '0.0.0.0', // listen on all addresses
            port: 5173,
            strictPort: true,
            hmr: {
                protocol: 'ws',
                host: "localhost",
                port: 5183,
            },
        },
        // to make use of `TAURI_DEBUG` and other env variables
        // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
        envPrefix: ["VITE_", "TAURI_"],
        build: {
            // Tauri supports es2021
            target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
            // don't minify for debug builds
            minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
            // produce sourcemaps for debug builds
            sourcemap: !!process.env.TAURI_DEBUG,
        },
    }
    return config
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// async function getHost() {
//     const internalIp = await import('internal-ip');
//     return await internalIp.v4();
//   }

// export default defineConfig(async () => {
//     const host = await getHost();
//     // Use the appropriate method from internalIp
//   /** @type {import('vite').UserConfig} */
//   const config = {
//     plugins: [react()],
//     // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
//     // prevent vite from obscuring rust errors
//     clearScreen: false,
//     server: {
//       host: '0.0.0.0', // listen on all addresses
//       port: 5173,
//       strictPort: true,
//       hmr: {
//         protocol: 'ws',
//         host: host, // Use the host obtained from internalIp
//         port: 5183,
//       },
//     },
//     // to make use of `TAURI_DEBUG` and other env variables
//     // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
//     envPrefix: ["VITE_", "TAURI_"],
//     build: {
//       // Tauri supports es2021
//       target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
//       // don't minify for debug builds
//       minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
//       // produce sourcemaps for debug builds
//       sourcemap: !!process.env.TAURI_DEBUG,
//     },
//   };
//   return config;
// });
