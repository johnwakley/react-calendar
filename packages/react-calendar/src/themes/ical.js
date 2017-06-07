const colors = {
  greyDarker: '#363636',
  greyDark: '#4a4a4a',
  grey: '#7a7a7a',
  greyLight: '#b5b5b5',
  orange: '#ff470f',
  red: '#ff3860',
  white: '#ffffff'
}

const theme = {
  typography: {
    familySansSerif:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;',
    size1: '3rem',
    size2: '2.5rem',
    size3: '2rem',
    size4: '1.5rem',
    size5: '1.25rem',
    size6: '1rem',
    size7: '0.75rem',
    size8: '0.5rem'
  },
  textColors: {
    text: colors.greyDarker,
    textLight: colors.grey,
    textLighter: colors.greyLight,
    textInvert: colors.white
  },
  colors
}

export default theme
