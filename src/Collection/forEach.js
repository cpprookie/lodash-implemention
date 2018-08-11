export default (colletion, iteratee = () => {}) => {
  if (typeof colletion === 'object') {
    if (Array.isArray(colletion)) {
      colletion.forEach(iteratee)
    } else {
      for (let key in colletion) {
        iteratee(colletion[key])
      }
    }
  }
}
