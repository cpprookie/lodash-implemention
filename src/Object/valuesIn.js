import keysIn from './keysIn'

export default obj => keysIn(obj).map(k => obj[k])
