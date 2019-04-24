function dummy() {
  return 1
}
/**
 * Reverse an array
 *
 * @example
 *
 * reverse([1,2,3]) returns [3,2,1]
 *
 * @param {array} array
 * @returns {array}
 */
function reverse(array) {
  return array.reverse()
}

/**
 * Reverse a string
 *
 * @example
 *
 * stringReverse('hello') returns 'olleh'
 *
 * @param {string} text
 * @returns {string}
 *
 */
function stringReverse(text) {
  const textArray = text.split('')
  const reversedArray = textArray.reverse()
  return reversedArray.join('')
}

/**
 * return a fixed length fibonacci list
 *
 * @example
 *
 * fibonacci(5) returns [1,1,2,3,5]
 *
 * @param {number} length
 * @returns {array}
 */
function fibonacci(length) {
  if (length < 3) {
    return [1, 1]
  } else {
    const fibList = fibonacci(length - 1)
    const fibListLength = fibList.length
    fibList.push(fibList[fibListLength - 1] + fibList[fibListLength - 2])
    return fibList
  }
}

/**
 * return the biggest number in the array
 *
 * @example
 *
 * biggest([1,3,5,7,9]) returns 9
 *
 * @param {array} array
 * @returns {number}
 */
function biggest(array) {
  const sortedArray = array.sort((a, b) => a - b)
  return sortedArray.pop()
}

/**
 * Creates an array of numbers progressing from
 * start up to, but not including, end
 *
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 *
 * @example
 *
 * range(0,4) returns [0,1,2,3]
 *
 * @param {number} start
 * @param {number} end
 * @returns {array}
 */
function range(start, end) {
  let rangedArray = []

  const myFunction = newStart => {
    if (newStart < end) {
      rangedArray.push(newStart)
      myFunction(newStart + 1)
    }
  }

  myFunction(start)
  return rangedArray
}

/**
 * Recursively flattens array.
 *
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 *
 * @example
 *
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 *
 * @param {array} array
 * @returns {array}
 */
function flatten(array) {
  let flattenedArray = []
  const iterateIfArray = arr => {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; ++i) {
        iterateIfArray(arr[i])
      }
    } else {
      flattenedArray.push(arr)
    }
  }

  iterateIfArray(array)
  return flattenedArray
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  biggest,
  flatten,
  stringReverse,
  range
}
