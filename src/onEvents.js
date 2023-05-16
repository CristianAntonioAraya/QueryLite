/**
 *
 * @param {string | object } elements
 * @param  {string | object } args
 */
const onEvents = (elements, ...args) => {
  const [event, callback] = args
  const isString = typeof event === 'string'
  elements.forEach(el => {
    if (isString) {
      el.addEventListener(event, callback)
    } else {
      const entriesProperties = Object.entries(event)
      entriesProperties.forEach(([event, callback]) => {
        el.addEventListener(event, callback)
        console.log(el)
      })
    }
  })
}

export default onEvents
