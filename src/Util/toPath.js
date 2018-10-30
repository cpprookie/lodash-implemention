import isNil from '../Lang/isNil'

export default val => {
  if (isNil(val)) {
    return []
  } else if (typeof val === 'object') {
    return [val.toString().slice(1, -1)]
  } else {
    const str = val.toString()
    return str
      .replace(/\[/g, '.')
      .replace(/\]/g, '')
      .split('.')
  }
}
