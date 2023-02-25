function withVariable(variableName) {
    return `hsl(var(${variableName}))`
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
            base: withVariable("--dark-blue"),
            white: withVariable("--white"),
            "light-gray": withVariable("--light-gray"),
            "grayish-blue": withVariable("--grayish-blue"),
        },
        backgroundColor: {
            base: withVariable("--dark-blue"),
            white: withVariable("--white"),
            "light-gray": withVariable("--light-gray"),
            "grayish-blue": withVariable("--grayish-blue"),
        },
        outlineColor: {
            base: withVariable("--dark-blue"),
            white: withVariable("--white"),
            "light-gray": withVariable("--light-gray"),
            "grayish-blue": withVariable("--grayish-blue"),
        },
        borderColor: {
            base: withVariable("--dark-blue"),
            white: withVariable("--white"),
            "light-gray": withVariable("--light-gray"),
            "grayish-blue": withVariable("--grayish-blue"),
        },
        fill: {
            base: withVariable("--dark-blue"),
            white: withVariable("--white"),
            "light-gray": withVariable("--light-gray"),
            "grayish-blue": withVariable("--grayish-blue"),
            transparent: "transparent",
        },
        fontFamily: {
            sans: ["Manrope"],
        },
    },
    plugins: [],
}
