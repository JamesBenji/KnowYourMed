import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '160px',
        md: '540px',
        lg: '1024px',
        },
      backgroundImage: {
        'sm-bg': 'url(/img-1-pill.jpg) 0px 0px',
      },
      backdropBlur: {
        'sm-blur': 'blur(1px)',
      },
    },
  },
  plugins: [],
}
export default config
