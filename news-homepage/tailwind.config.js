function withVariable(variableName) {
    return `hsl(var(${variableName}))`
}

const colors = {
    "soft-orange": withVariable("--soft-orange"),
    "soft-red": withVariable("--soft-red"),
    "off-white": withVariable("--off-white"),
    "grayish-blue": withVariable("--grayish-blue"),
    "dark-grayish-blue": withVariable("--dark-grayish-blue"),
    "very-dark-blue": withVariable("--very-dark-blue"),
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
            sans: ["Inter"],
        },
    },
    plugins: [],
}
