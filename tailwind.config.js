const defaultConfig = require('tailwindcss/defaultConfig');

module.exports = {
  theme: {
    // Some useful comment
    fontFamily: {
      ...defaultConfig.theme.fontFamily,
      sans: ['Proxima Nova', ...defaultConfig.theme.fontFamily.sans],
    },
    fill: {
      ...defaultConfig.theme.fill,
      'gray-100': defaultConfig.theme.colors.gray['100'],
      'gray-600': defaultConfig.theme.colors.gray['600'],
      'gray-800': defaultConfig.theme.colors.gray['800'],
      'green-200': '#8EEDC7',
      'red-200': '#F29B9B',
      'blue-200': '#84C5F4',
    },
    borderRadius: {
      ...defaultConfig.theme.borderRadius,
      wide: '.9rem',
    },
    colors: {
      ...defaultConfig.theme.colors,
      'blue-gray': {
        secondary: '#616E7B',
        primary: '#1F2933',
        background: '#F5F7FA',
      },
      'another-blue': {
        primary: '#4098D7',
        background: '#F0F4F8',
        text: '#839AB0',
        subtle: '#243B53',
        dark: '#1F2933',
      },
      green: {
        100: '#EFFCF6',
        200: '#8EEDC7',
        300: '#3EBD93',
      },
      red: {
        100: '#FFEEEE',
        200: '#F29B9B',
        300: '#D64545',
      },
      blue: {
        100: '#DCEEFB',
        200: '#84C5F4',
        300: '#4098D7',
        500: '#496580',
      },
      yellow: {
        100: '#FFFAEC',
        300: '#F6CF77',
      },

      smokeLight: {
        100: 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
};
