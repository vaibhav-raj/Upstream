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
function filterData(input, fitlerFunc) {
    return input.filter(inp => fitlerFunc(inp))
}
// Example data array
const data = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 35 },
  { name: 'David', age: 40 },
];
const fitlerFunc = (row) => {
    return row.age > 30
}
console.log(filterData(data, fitlerFunc))
================================================================================================================================================================================
Code 5: Implement a function that performs insertion sort.
function insertionSort(arr) {
  const length = arr.length;
  
  for (let i = 1; i < length; i++) {
    // Store the current element to be inserted
    const currentElement = arr[i];
    let j = i - 1;
    
    // Find the correct position for the current element in the sorted part of the array
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]; // Shift elements to the right
      j--;
    }
    // Insert the current element into its correct position
    arr[j + 1] = currentElement;
  }
  
  return arr;
}
// Example usage:
const unsortedArray = [4, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]

================================================================================================================================================================================
Code 6: Implement a function that returns a memoized version of a function which accepts any number of arguments.
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  };
}
// Example function to be memoized
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

const memoizedSum = memoize(sum);

console.log(memoizedSum(1, 2, 3)); // Calculates and caches the result
console.log(memoizedSum(1, 2, 3)); // Returns the cached result without re-computation
================================================================================================================================================================================
Code 7:  Implement a function that acts like setInterval but returns a function to cancel the Interval.
function customSetInterval(callback, delay) {
  const intervalId = setInterval(callback, delay);
  // Return a function to cancel the interval
  function cancel() {
    clearInterval(intervalId);
  }
  return cancel;
}
// Example usage:
const cancelInterval  = customSetInterval(() => {
  console.log('Interval callback');
}, 1000);

// After 5 seconds, cancel the interval
setTimeout(() => {
  cancelInterval();
  console.log('Interval canceled,,,');
}, 5000);

================================================================================================================================================================================
Code 8: Implement a function that merges two objects together.
function mergeObjects(obj1, obj2) {
   return { ...obj1, ...obj2 };
}
// Example usage:
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);

console.log(mergedObject);  // Output: { a: 1, b: 3, c: 4 }
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
function squashObject(inputObject, separator = '.') {
  const result = {};

  function recurse(current, prop) {
    if (Object(current) !== current || Array.isArray(current)) {
      result[prop] = current;
    } else {
      for (const key in current) {
        if (current.hasOwnProperty(key)) {
          if (prop === '') {
            recurse(current[key], key);
          } else {
            recurse(current[key], prop + separator + key);
          }
        }
      }
    }
  }

  recurse(inputObject, '');
  return result;
}

// Example usage:
const nestedObject = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
  },
  e: [3, 4],
};

console.log(squashObject(nestedObject));
================================================================================================================================================================================
Code 14: Implement a function that creates a resumable interval object.
================================================================================================================================================================================
Code 15: Implement the functionality behaviour of Promise.any()
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises) || promises.length === 0) {
      reject(new TypeError('promises must be a non-empty array'));
      return;
    }

    let resolved = false;
    let errors = [];

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          if (!resolved) {
            resolved = true;
            resolve(value);
          }
        })
        .catch((error) => {
          errors.push(error);
          if (errors.length === promises.length) {
            reject(errors);
          }
        });
    });
  });
}

// Example usage:
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Promise 1 resolved'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Promise 2 rejected'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 300, 'Promise 3 resolved'));

promiseAny([promise1, promise2, promise3])
  .then((result) => console.log('Resolved:', result))
  .catch((errors) => console.log('Rejected:', errors));

================================================================================================================================================================================
Code 16: Implement the functionality behaviour of Promise.allSettled()
function promiseAllSettled(promises) {
  return Promise.all(
    promises.map((promise) =>
      Promise.resolve(promise)
        .then((value) => ({
          status: 'fulfilled',
          value,
        }))
        .catch((reason) => ({
          status: 'rejected',
          reason,
        }))
    )
  );
}

// Example usage:
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Promise 1 resolved'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'Promise 2 rejected'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 300, 'Promise 3 resolved'));

promiseAllSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log('All Settled Results:', results);
  });

================================================================================================================================================================================
Code 17: Implement a function that returns a memoized version of a function which accepts a single argument.
function memoize(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    } else {
      const result = fn(arg);
      cache.set(arg, result);
      return result;
    }
  };
}

// Example usage:

// Function to be memoized
function expensiveOperation(n) {
  console.log(`Performing expensive operation for ${n}`);
  return n * 2;
}

const memoizedExpensiveOperation = memoize(expensiveOperation);

console.log(memoizedExpensiveOperation(5)); // Logs and returns 10
console.log(memoizedExpensiveOperation(5)); // Returns 10 (result is cached)
console.log(memoizedExpensiveOperation(10)); // Logs and returns 20
console.log(memoizedExpensiveOperation(10)); // Returns 20 (result is cached)

================================================================================================================================================================================
Code 18: Implement a function that formats a list of items into a single readable string.
function formatItemList(items, delimiter = ', ', lastDelimiter = ' and ') {
  if (items.length === 0) {
    return '';
  } else if (items.length === 1) {
    return items[0];
  } else if (items.length === 2) {
    return items.join(lastDelimiter);
  } else {
    const lastItem = items.pop();
    return items.join(delimiter) + lastDelimiter + lastItem;
  }
}

// Example usage:
const fruits = ['apple', 'banana', 'cherry'];
const formattedList = formatItemList(fruits);

console.log(formattedList); // Output: "apple, banana, and cherry"

================================================================================================================================================================================
Code 19: Implement a function that converts a JavaScript value into a JSON string.
function convertToJsonString(value) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    console.error('Error converting to JSON:', error);
    return null;
  }
}

// Example usage:
const data = { name: 'John', age: 30, hobbies: ['reading', 'swimming'] };
const jsonString = convertToJsonString(data);

console.log(jsonString);
================================================================================================================================================================================
Code 20: Implement a class that can subscribe to and emit events that trigger attached callback functions.
================================================================================================================================================================================
Code 21: Implement a debounce function that comes with a cancel method to cancel delayed invocations.
================================================================================================================================================================================
Code 22: Implement a function to merge rows of data from the same user.
function mergeUserData(data) {
  const mergedData = {};

  // Iterate through the data array
  data.forEach((row) => {
    const userId = row.userId; // Change this to the actual property that identifies the user
    if (!mergedData[userId]) {
      // If the user doesn't exist in the mergedData, create an entry
      mergedData[userId] = { ...row };
    } else {
      // If the user exists, merge the data
      Object.assign(mergedData[userId], row);
    }
  });

  // Convert the merged data into an array
  const mergedDataArray = Object.values(mergedData);

  return mergedDataArray;
}

// Example usage:
const data = [
  { userId: 1, name: 'Alice', age: 25 },
  { userId: 2, name: 'Bob', gender: 'Male' },
  { userId: 1, job: 'Engineer' },
];

const mergedData = mergeUserData(data);
console.log(mergedData);

================================================================================================================================================================================
Code 23: Implement a function that recursively flattens an array into a single level deep.
function recursiveFlatten(arr) {
  const result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      // If the item is an array, recursively flatten it
      result.push(...recursiveFlatten(item));
    } else {
      // If the item is not an array, add it to the result
      result.push(item);
    }
  });

  return result;
}

// Example usage:
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = recursiveFlatten(nestedArray);
console.log(flattenedArray);

================================================================================================================================================================================
Code 24: Implement a function that returns an object with all falsey values removed.
function removeFalseyValues(obj) {
  const result = {};

  for (const key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}
// Example usage:
const data = {
  name: 'John',
  age: 30,
  email: '',
  address: null,
  isStudent: false,
};

const cleanedData = removeFalseyValues(data);
console.log(cleanedData);

================================================================================================================================================================================
Code 25: Implement a function to resolve a given value to a Promise.
function resolveToPromise(value) {
  return Promise.resolve(value);
}

// Example usage:
const resolvedPromise = resolveToPromise("Resolved Value");

resolvedPromise.then((result) => {
  console.log("Resolved:", result);
});

================================================================================================================================================================================
Code 26: Implement a Turtle class that moves a turtle on a 2D plane.
================================================================================================================================================================================
Code 27: Implement a function to execute N async tasks in series.
async function executeTasksInSeries(tasks) {
  for (const task of tasks) {
    await task(); // Await the completion of the current task before moving to the next one.
  }
}

// Example usage:
async function task1() {
  console.log("Task 1 started");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate an async task
  console.log("Task 1 completed");
}

async function task2() {
  console.log("Task 2 started");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate an async task
  console.log("Task 2 completed");
}

async function task3() {
  console.log("Task 3 started");
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate an async task
  console.log("Task 3 completed");
}

const tasks = [task1, task2, task3];

executeTasksInSeries(tasks)
  .then(() => {
    console.log("All tasks completed.");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

================================================================================================================================================================================
Code 28: Implement a promisify function that allows the original function to override the return value.
================================================================================================================================================================================
Code 29: Implement a function to deserialize a JSON string.
function deserializeJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error deserializing JSON:', error);
    return null;
  }
}

// Example usage:
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

const deserializedObject = deserializeJson(jsonString);
console.log(deserializedObject);

================================================================================================================================================================================
Code 30: Implement a function to convert all the keys in an object to camel case.
function keysToCamelCase(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj; // Return as is if not an object
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => keysToCamelCase(item)); // Recursively process array items
  }

  const camelCaseObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      camelCaseObj[camelCaseKey] = keysToCamelCase(obj[key]);
    }
  }

  return camelCaseObj;
}

// Example usage:
const inputObject = {
  first_name: 'John',
  last_name: 'Doe',
  address_info: {
    street_name: '123 Main St',
    postal_code: '10001',
  },
  hobbies: ['reading_books', 'playing_games'],
};

const camelCaseObject = keysToCamelCase(inputObject);
console.log(camelCaseObject);

================================================================================================================================================================================


