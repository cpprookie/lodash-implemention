import isMatch from '../Lang/isMatch'
import get from '../Object/get'

export default (p, val) => obj => isMatch(get(obj, p), val)
