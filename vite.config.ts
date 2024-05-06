/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: "/shoppingcart/",
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
    },
});
