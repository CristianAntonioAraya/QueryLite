import css from './src/css.js'
import onEvents from './src/onEvents.js'

/**
 *  Manage all the queries
 * @param { function | string | object | array} arg
 * @returns mutated elements, with the required methods
 */

const $ = (arg) => {
  let elements

  // DomContentLoaded
  if (typeof arg === 'function') {
    document.addEventListener('DOMContentLoaded', arg)
    return
  }
  // Selector de CSS
  if (typeof arg === 'string') {
    elements = document.querySelectorAll(arg)
  }

  elements.css = (...args) => css(elements, ...args)
  elements.on = (...args) => onEvents(elements, ...args)

  return elements
}

export default $
