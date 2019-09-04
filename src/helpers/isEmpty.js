/**
 * @param {*} value
 * @return {Boolean} true if object is empty
 *                     null
 *                     undefined
 *                     blank string
 *                     zero length array
 *                     [""] as result of "".split(" ")
 *                     Object without any members
 *                   Note: Object with null values not treated as empty
 */
export default function isEmpty(value) {
  if (value == null) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  if (Array.isArray(value)) {
    if (value.length === 0) return true;
    if (value.length === 1 && value[0] === "") return true;
  } 
  if (typeof value === "object") {
    if (value.constructor.name === 'ObservableMap') {
      // mobx can't track .size changes, when used indirectly
      throw new Error('isEmpty() shouln\'t be used with ObservableMap!');
    }

    if (value.isEmpty != null) {
      if (typeof value.isEmpty === 'function') return value.isEmpty();
      if (value.isEmpty === true)  return true;
      if (value.isEmpty === false) return false;
    }

    if (value instanceof Map) return value.size === 0;
    if (value instanceof Set) return value.size === 0;

    if (value.constructor.name === 'File') {
      return false;
    }

    if (Object.keys(value).length === 0) {
      if (typeof value.length === 'number') return !(value.length > 0);
      return true;
    }
  }
  return false;
}


