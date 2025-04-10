import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://me.reynoldsjoshua.com',
    build: {
        format: 'directory',
        output: 'dist'
    }
}); 