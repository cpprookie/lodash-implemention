let num = 0
export default prefix => (prefix ? prefix + (num += 1) : (num += 1))
