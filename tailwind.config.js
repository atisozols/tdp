module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        purp: {
          verydark: "#1d0224",
          darkpale: "#38233d",
          dark: "#5f2a6b",
        },
        stadions: {
          blue: "#16556c",
          lightblue: "#88c9f2",
          green: "#8c862e",
          red: "#401212",
        },
      },
    },
    plugins: [],
  },
};
