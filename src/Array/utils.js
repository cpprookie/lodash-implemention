const isObjEqual = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false
  }
  return true
}

exports.isObjEqual = isObjEqual