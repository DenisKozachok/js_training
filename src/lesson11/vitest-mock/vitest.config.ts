import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        exclude: [],
        include: ['./tests/**/?(*.)+(spec|test).[t]s?(x)'],
        setupFiles: './src/hooks/vitest-global-setup.ts'
    }
});
