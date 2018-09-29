const charArr = ['&', '<', '>', '"', "'"]
const htmlArr = ['&amp;', '&lt;', '&gt;', '&quot;', '&#39;']

const getDictionary = mode =>
  mode === 'escape' ? [charArr, htmlArr] : [htmlArr, charArr]
export default getDictionary
