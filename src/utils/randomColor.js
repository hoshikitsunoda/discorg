export const randomColor = () => {
  const letters = '0123456789ABCDEF'.split('')
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
