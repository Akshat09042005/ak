/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-1": "#fff",
        "main-blue": "#122b49",
        bisque: "#f5dbc2",
        "border-grey": "#d6d6d6",
        slategray: "#455e7d",
        "grey-text": "#424242",
        black: "#000",
        snow: "#fdfaf7",
        "neutral-5": "#d9d9d9",
        "cream-dark": "#f6efe6",
        lightgray: "#ded6cc",
        red: "#d40303",
        "grey-text-2": "#7a7a7a",
        cornflowerblue: "#44a0fc",
        gray: {
          "100": "#878787",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(18, 18, 18, 0.87)",
        },
        silver: "#c4c4c4",
        cream: "#fcf8f4",
        peru: "#b0854c",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e3dedb",
          "300": "rgba(230, 230, 230, 0.09)",
        },
        "character-disabled-placeholder-25": "rgba(0, 0, 0, 0.25)",
        "dust-red-5": "#ff4d4f",
        "character-title-85": "rgba(0, 0, 0, 0.85)",
        lavender: "#e0ecff",
        aliceblue: "#edf2f8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "merriweather-sans": "'Merriweather Sans'",
        merriweather: "Merriweather",
        poppins: "Poppins",
        "body-regular": "Roboto",
      },
      borderRadius: {
        "10xl": "29px",
        lg: "18px",
        "11xl": "30px",
        xl: "20px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      xl: "20px",
      "15xl-6": "34.6px",
      "2xl": "21px",
      "9xl": "28px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xs: "12px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
