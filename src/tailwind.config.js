const { colors } = require('tailwindcss/defaultTheme');

const onColors = {
    100: "#000000",
    200: "#000000",
    300: "#000000",
    400: "#000000",
    500: "#FFFFFF",
    600: "#FFFFFF",
    700: "#FFFFFF",
    800: "#FFFFFF",
    900: "#FFFFFF",
};

module.exports = {
    purge: [],
    theme: {
        extend: {
            colors: {
                primary: colors.indigo,
                secondary: colors.teal,
                neutral: colors.gray,
                error: colors.red,
                warning: colors.orange,
                background: colors.black,
                surface: colors.black,
                on_primary: onColors,
                on_secondary: onColors,
                on_neutral: onColors,
                on_background: colors.white,
                on_surface: colors.white,
                on_error: onColors,
                on_warning: onColors,
            },
            keyframes: {
                scaleX: {
                    '0%': { transform: 'scaleX(0)' },
                    '100%': { transform: 'scaleX(1)' },
                },
                scaleY: {
                    '0%': { transform: 'scaleY(0)' },
                    '100%': { transform: 'scaleY(1)' },
                },
                background: {
                    '0%': { 'background-color': 'var(--tw-gradient-from)' },
                    '100%': { 'background-color': 'var(--tw-gradient-to)' }
                },
                border: {
                    '0%': { 'border-color': 'var(--tw-gradient-from)' },
                    '100%': { 'border-color': 'var(--tw-gradient-to)' }
                },
                ping: {
                    '0%': { 'transform': 'scale(1)', 'opacity': '1' },
                    '75%, 100%': { 'transform': 'scale(2)', 'opacity': '0' },
                },
                circleLoading: {
                    "0%": { transform: 'rotate(0deg)' },
                    "100%": { transform: 'rotate(360deg)' },
                },
                barLoading: {
                    "0%": { transform: 'scaleX(0)'},
                    "25%": { transform: 'scaleX(1)'},
                    "75%, 100%": { transform: 'scaleX(0)', transformOrigin: "top right"},
                }
            },
            animation: {
                scaleX: 'scaleX 1s ease-in-out 1 forwards',
                scaleY: 'scaleY 1s ease-in-out 1 forwards',
                background: 'background 300ms ease-in-out 1 forwards',
                border: 'border 300ms ease-in-out 1 forwards',
                circleLoading: 'circleLoading 500ms ease-in-out infinite forwards',
                barLoading: 'barLoading 2000ms ease-in-out infinite forwards',
            },
        },
    },
    variants: {
        borderColor: ['responsive', 'dark', 'group-hover', 'hover', 'focus-within', 'focus'],
    },
    plugins: [],
};
