30 Javascript questions I find very useful in the Interviews.
================================================================================================================================================================================
Code 1: Implement a function that converts a Javascript value into a JSON string.
    
function convertToJSON(input){
  try{
    return JSON.stringify(input)
  }catch(err){
    console.error("Error converting to JSON:", error);
    return null;
  }
}

const obj = {name:'vaibhav',age:25, designation :'software engineer'}
console.log(convertToJSON(obj))
================================================================================================================================================================================
Code 2: Implement a function that performs a deep copy of a value, but also handles circular references.
================================================================================================================================================================================
Code 3: Implement a function to construct a table of contents from an HTML document.
================================================================================================================================================================================
Code 4: Implement a function to filter rows of data matching a specified requirement.
================================================================================================================================================================================
Code 5: Implement a function that performs insertion sort.
================================================================================================================================================================================
Code 6: Implement a function that returns a memoized version of a function which accepts any number of arguments.
================================================================================================================================================================================
Code 7:  Implement a function that acts like setInterval but returns a function to cancel the Interval.
================================================================================================================================================================================
Code 8: Implement a function that merges two objects together.
================================================================================================================================================================================
Code 9: Implement a function to highlight text if searched terms appear within it.
================================================================================================================================================================================
Code 10: Implement a function to recursively transform values.

function recursiveTransform(input, transFormFunction) {
    if (Array.isArray(input)) {
        return input.map(inp => recursiveTransform(inp, transFormFunction))
    } else if (typeof input === 'object' && input !== null) {
        const tranformObject = {}
        for (let key in input) {
            tranformObject[key] = recursiveTransform(input[key], transFormFunction)
        }
        return tranformObject
    } else {
        return transFormFunction(input)
    }
}

const transFormFunction = (value) => {
    if (typeof value === 'number') {
        return value * 2
    } else {
        return value
    }
}

// Example usage:
const data = {
    a: 1,
    b: [2, 3, [4, 5]],
    c: {
        d: 6,
        e: [7, 8],
        f: {
            g: {
                h: {
                    o: 3
                }
            },
            k: [2, 3, [4, 5]],
        }
    },
};
console.log(recursiveTransform(data, transFormFunction))
================================================================================================================================================================================
Code 11:Implement a function that determines if two values are deep equal.
================================================================================================================================================================================
Code 12: Implement a function to highlight text if a searched term appears within it.
================================================================================================================================================================================
Code 13: Implement a function that returns a new object after squashing the input object.
================================================================================================================================================================================
Code 14: Implement a function that creates a resumable interval object.
================================================================================================================================================================================
Code 15: Implement the functionality behaviour of Promise.any()
================================================================================================================================================================================
Code 16: Implement the functionality behaviour of Promise.allSettled()
================================================================================================================================================================================
Code 17: Implement a function that returns a memoized version of a function which accepts a single argument.
================================================================================================================================================================================
Code 18: Implement a function that formats a list of items into a single readable string.
================================================================================================================================================================================
Code 19: Implement a function that converts a JavaScript value into a JSON string.
================================================================================================================================================================================
Code 20: Implement a class that can subscribe to and emit events that trigger attached callback functions.
================================================================================================================================================================================
Code 21: Implement a debounce function that comes with a cancel method to cancel delayed invocations.
================================================================================================================================================================================
Code 22: Implement a function to merge rows of data from the same user.
================================================================================================================================================================================
Code 23: Implement a function that recursively flattens an array into a single level deep.
================================================================================================================================================================================
Code 24: Implement a function that returns an object with all falsey values removed.
================================================================================================================================================================================
Code 25: Implement a function to resolve a given value to a Promise.
================================================================================================================================================================================
Code 26: Implement a Turtle class that moves a turtle on a 2D plane.
================================================================================================================================================================================
Code 27: Implement a function to execute N async tasks in series.
================================================================================================================================================================================
Code 28: Implement a promisify function that allows the original function to override the return value.
================================================================================================================================================================================
Code 29: Implement a function to deserialize a JSON string.
================================================================================================================================================================================
Code 30: Implement a function to convert all the keys in an object to camel case.
================================================================================================================================================================================


