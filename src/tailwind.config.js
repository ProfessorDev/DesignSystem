const {colors} = require('tailwindcss/defaultTheme');

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
            }
        },
    },
    variants: {},
    plugins: [],
};
