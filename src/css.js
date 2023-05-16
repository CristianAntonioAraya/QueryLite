/**
 *
 * @param {string | object} elements
 * @param  {string | object} args Receive css values [property, value] or objects of values
 * @returns
 */

const css = (elements, ...args) => {
  const [property, value] = args
  const isString = typeof property === 'string'
  console.log(isString)
  elements.forEach(el => {
    if (isString) {
      el.style[property] = value
      console.log('property', property)
      console.log('value', value)
    } else {
      const entriesProperties = Object.entries(property)
      entriesProperties.forEach(([property, value]) => {
        el.style[property] = value
      })
    }
  })
  return elements
}

export default css
