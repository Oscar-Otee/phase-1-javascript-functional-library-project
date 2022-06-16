const toStandardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  //call back parameter here is a callback function not a parameter.
  const myEach = function(collection, callback) {
    const newCollection = toStandardizeInput(collection);
  
    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
  
    return collection;
  }
  
  const myMap = function(collection, callback) {
    const newCollection = toStandardizeInput(collection);
  
    const newArray = [];
  
    for (let j = 0; j < newCollection.length; j++) {
      newArray.push(callback(newCollection[j]));
    }
  
    return newArray;
  }
  
  const myReduce = function(collection, callback, acc) {
    let newCollection = toStandardizeInput(collection);
  
    // The if statement below handles the case where no start value is passed in 
    // for the accumulator
    // If acc is null, it is set equal to the first value in newCollection
    // That first value is then sliced out of newCollection since it has already
    // been accounted for
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const newCollectionlength = newCollection.length;
  
    for (let i = 0; i < newCollectionlength; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
  const myFind = function(collection, predicate) {
    const newCollection = toStandardizeInput(collection);
  
    for (let n = 0; n < newCollection.length; n++) {
      if (predicate(newCollection[n])) return newCollection[n];
    }
  
    return undefined;
  }
  
  const myFilter = function(collection, predicate) {
    const newCollection = toStandardizeInput(collection);
  
    const newArray = [];
  
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) newArray.push(newCollection[i]);
    }
  
    return newArray;
  }
  
  const mySize = function(collection) {
    const newCollection = toStandardizeInput(collection);
    return newCollection.length;
  }
  
  // Array Functions
  
  const myFirst = function(array, stop=false) {
    return (stop) ? array.slice(0, stop) : array[0];
  }
  
  const myLast = function(array, start=false) {
    return (start) ? array.slice(array.length-start, array.length) : array[array.length-1];
  }
  
  const mySortBy = function(array, callback) {
    const newArray = [...array];
    return newArray.sort(function(x, y) {
      if (callback(x) > callback(y)) {
        return 1;
      } else if (callback(y) > callback(x)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  



  const unpack = function(receiver, array) {
    for (let element of array) {
      receiver.push(element);
    }
  }
  
  // myFlatten handles two separate cases: shallow=true and shallow=false
  // For the true case, the top-level elements are simply pushed into newArr using
  // the unpack helper function
  // For the false case, myFlatten is called recursively for each element
  const myFlatten = function(collection, shallow, newArray=[]) {
    if (shallow) {
      for (let element of collection) {
        Array.isArray(element) ? unpack(newArray, element) : newArray.push(element);
      }
    } else {
      // shallow = false (recursive case)
      for (let element of collection) {
        if (Array.isArray(element)) {
          // Below, we pass newArr as an argument when we call myFlatten recursively 
          // because we need to retain the values that were pushed in previous calls
          myFlatten(element, false, newArray);
        } else {
          newArray.push(element);
        }
      }
    }
    return newArray;
  }
  
  // Object Functions
  
  const myKeys = function(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
  
  const myValues = function(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }