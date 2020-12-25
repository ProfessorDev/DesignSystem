import '../src/cssImport';
import { addParameters } from '@storybook/client-api';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../src/tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

const customViewports = {
    sm: {
        name: 'Small Screen',
        styles: {
            width: fullConfig.theme.screens.sm,
            height: '963px',
        },
    },
    md: {
        name: 'Medium Screen',
        styles: {
            width: fullConfig.theme.screens.md,
            height: '963px',
        },
    },
    lg: {
        name: 'Large Screen',
        styles: {
            width: fullConfig.theme.screens.lg,
            height: '963px',
        },
    },
    xl: {
        name: 'ExtraLarge Screen',
        styles: {
            width: fullConfig.theme.screens.xl,
            height: '963px',
        },
    },
};

addParameters({
    viewport: { viewports: customViewports },
});

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};