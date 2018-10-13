export default (prototype, ...properties) => {
  if (prototype !== null && typeof prototype !== 'object') {
    throw new Error('create can only take null or object as first parameter!')
  }
  const object = prototype === null ? {} : new prototype.constructor()
  return properties.length ? Object.assign(object, ...properties) : object
}
