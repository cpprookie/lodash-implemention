function chunk(arr, size = 1) {
  if (!Array.isArray(arr)) {
    throw new Error('You can only use chunk for array!')
  }
  const l = arr.length;
  if (!arr.length || size < 1 || l < size) return arr;
  const result = [];
  let start = 0,
        end = size;
  do {
    result.push(arr.slice(start, end));
    start = end;
    end = start + size;
  }  while (start < l)
  return result;
}

module.exports = chunk;