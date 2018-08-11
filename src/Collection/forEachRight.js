export default (colletion, iteratee = () => {}) => {
  if (typeof colletion === 'object') {
    if (Array.isArray(colletion)) {
      for (let i = colletion.length - 1; i >= 0; i--) {
        iteratee(colletion[i], i)
      }
    } else {
      const keys = Object.keys(colletion).reverse()
      keys.forEach(key => {
        iteratee(colletion[key])
      })
    }
  }
}
