export default collection => {
  switch (Object.prototype.toString.call(collection)) {
    case '[object String]':
    case '[object Array]':
      return collection.length
    case '[object Object]':
      return Object.keys(collection).length
    default:
      return 0
  }
}
