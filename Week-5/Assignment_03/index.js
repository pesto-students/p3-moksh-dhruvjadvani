const hasDuplicates = (array) => {
    return new Set(array).size !== array.length;
  };

console.log(hasDuplicates([1, 2, 3, 3])); // true

console.log(hasDuplicates([5, 9, 56, 23])); // false
