import CassetteIcon from '../images/icons/cassette.png'
import RecordIcon from '../images/icons/record.png'

export const shortenString = (string, maxLength) =>
  string?.length > maxLength ? string?.substring(0, maxLength) + '...' : string

export const randomColor = () => {
  const letters = '0123456789ABCDEF'.split('')
  let color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const mediaIcon = (format) => {
  let icon

  switch (format) {
    case 'LP':
      icon = RecordIcon
      break
    case '2 x LP':
      icon = RecordIcon
      break
    case '3 x LP':
      icon = RecordIcon
      break
    case 'Cassette':
      icon = CassetteIcon
      break
    default:
      icon = ''
  }

  return icon
}

export const flatten = (json, id, newObj, uid) => {
  Object.keys(json).forEach((key) => {
    const path = `/user/${uid}/records/${id}/${key}`
    if (typeof json[key] === 'object') {
      flatten(json[key], path)
    } else {
      newObj[path] = json[key]
    }
  })
}
