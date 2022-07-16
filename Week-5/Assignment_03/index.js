const hasDuplicates = (array) => {
    return new Set(array).size !== array.length;
  };

hasDuplicates([1, 2, 3, 3]); // true

// hasDuplicates([5, 9, 56, 23]); // false
