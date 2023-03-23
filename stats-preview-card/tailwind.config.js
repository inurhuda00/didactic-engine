function withVariable(variableName) {
    return `hsl(var(${variableName}))`
}

const colors = {
    "dark-blue": withVariable("--derk-blue"),
    "dark-desaturated-blue": withVariable("--dark-desaturated-blue"),
    "soft-violet": withVariable("--soft-violet"),
    white: withVariable("--white"),
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{html,js}", "./index.html"],
    theme: {
        screens: {
            mobile: "375px",
            desktop: "1440px",
        },
        textColor: {
            ...colors,
        },
        backgroundColor: {
            ...colors,
        },
        outlineColor: {
            ...colors,
        },
        borderColor: {
            ...colors,
        },
        fill: {
            ...colors,
            transparent: "transparent",
        },
        fontFamily: {
            sans: ["Inter", "Lexend Deca"],
        },
    },
    plugins: [],
}
