import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mob':'400px', //custom extra breakpoint
        'sm': '640px',  // Default small breakpoint
        'md': '768px',  // Default medium breakpoint
        'lg': '1024px', // Default large breakpoint
        
      },
      fontFamily:{
        "custom":["custom","sans"],
        "custom-bold":["custom-bold","sans"],
        "netflix":["netflix","sans"],
        "mySignature":["mySignature","sans"]
      }
    },
  },
  plugins: [],
};
export default config;
