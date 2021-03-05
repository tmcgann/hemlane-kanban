export function generateRandomHex(power = 2) {
  return Math.round(Math.random() * (16**power - 1)).toString(16).padStart(2, '0')
}

export function generateRandomHexColor() {
  const hexValues = ['','',''].map(() => generateRandomHex()).join('')
  return '#' + hexValues
}