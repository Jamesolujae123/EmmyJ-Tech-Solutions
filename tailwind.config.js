/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ai-design": "url('/src/assets/ai-design.jpg')",
        "data-analysis": "url('/src/assets/data-analysis.jpg')",
        "mobile-app-dev": "url('/src/assets/mobile-dev.jpg')",
        "uiux-bg": "url('/src/assets/uiux-design.jpg')",
        "web-development": "/src/assets/website-design.jpg",
        "web-scraping": "web-scraping.jpg",
      },
      textColor: {
        myspecial: "#fff",
        foodname: "#615b54",
        pricetag: "#e7ad48",
        cartbg: "#f3f3f3",
      },
      borderColor: {
        cartbg: "#f1f1f1",
      },
      fontFamily: {
        roboto: "Roboto",
        NanumGothic: "Nanum Gothic",
        Satisfy: "Satisfy",
      },
    },
  },
  plugins: [],
};
