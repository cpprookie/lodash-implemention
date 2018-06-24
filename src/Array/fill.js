function fill(arr, value, start = 0, end = arr.length) {
  if(!Array.isArray(arr)) {
    throw new Error('You can only use fill for arrays!')
  }
  const l = arr.length
  if(!arr.length) return []
  if(end > l) { 
    end = l
  } else if (end <= start) {
    end = start
  }
  if(start < 0) start = 0
  for (let i = start; i < end; i++) {
    arr[i] = value
  }
  return arr
}

module.exports = fill