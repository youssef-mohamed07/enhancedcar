module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',      // Gold color
        darkGold: '#FFA500',  // Darker gold/orange color
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to bottom right, #FFD700, #FFA500)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
