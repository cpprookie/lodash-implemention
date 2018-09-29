import isString from '../Lang/isString'
export default (str, opt = {}) => {
  if (!isString(str)) {
    throw new Error('truncate must take string as first param!')
  }
  const option = Object.assign(
    {
      length: 30,
      omission: '...'
    },
    opt
  )
  if (str.length <= option.length) return str

  if (!option.separator) {
    return (
      str
        .slice(0, option.length)
        .slice(0, option.length - option.omission.length) + option.omission
    )
  }
  return str.split(option.separator).reduce((substr, word) => {
    const temp = substr + option.separator + word
    if (temp.length < option.length) {
      return temp
    }
    return substr + option.omission
  })
}
