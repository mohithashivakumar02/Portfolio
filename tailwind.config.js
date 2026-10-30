/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: '#0d1117',
          deep: '#070a0e',
          surface: '#161b22',
          card: '#121720',
          border: '#30363d',
          borderSubtle: '#21262d',
        },
        cyber: {
          emerald: '#10b981',
          emeraldLight: '#34d399',
          emeraldDark: '#047857',
          lime: '#a3e635',
          limeBright: '#bef264',
          limeGlow: '#84cc16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radar 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 28px rgba(163, 230, 53, 0.5))' },
        }
      },
      boxShadow: {
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'emerald-lg': '0 0 40px -5px rgba(16, 185, 129, 0.45)',
        'lime-glow': '0 0 25px -5px rgba(163, 230, 53, 0.35)',
        'glass-panel': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

