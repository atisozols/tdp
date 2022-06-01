module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        stadions: {
          blue: "#16556c",
          lightblue: "#88c9f2",
          green: "#8c862e",
          red: "#401212",
        },
        kemer:{
          red:"#F28963",
          darkred:"#F2785C",
          brightred:"#F2B988"
        },
        sloken:{
          card:"#557544",
          header:"#1F2517",
          bg:"#22361B"
        },
        lielup:{
          card:"#A0BED9",
          header:"#023859",
          bg:"#4590BF"
        },
        laci:{
          card:"#B8C6D9",
          header:"#A62139",
          bg:"#8FB6D9"
        },
        zinatn:{
          card:"#EEF4F8",
          header:"#592246",
          bg:"#7EA1BF"
        },
        oatis:{
          card:"#F2F2F2",
          header:"#262626",
          bg:"#BFBFBF"
        }
        
      },
      height:{
        custom:'26rem',
        custom1:'22rem'
      }
    },
    plugins: [],
  },
};
