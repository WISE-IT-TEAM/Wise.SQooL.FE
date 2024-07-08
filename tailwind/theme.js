import colors from "./colors";
import fonts from "./fonts";

export const extend = {
    extend: {
        fonts: fonts,
        colors: colors, // colors 추가
        ...theme, // theme 확장
    },
    backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },

    maxWidth: {
        custom: "1400px",
    },
    container: {
        center: true,
        padding: "1rem",
        screens: {
            sm: "100%",
            md: "100%",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1400px",
        },
    },
};