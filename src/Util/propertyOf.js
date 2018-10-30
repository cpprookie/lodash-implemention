import get from '../Object/get'

export default obj => paths => {
  return get(obj, paths)
}
