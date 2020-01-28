const ziplist = (list1, list2) => {
  const alternating = [];

  list1.forEach((item, i) => {
    alternating.push(item);
    alternating.push(list2[i]);
  });

  return alternating;
};

const zipListTheSimpleWay = (list1, list2) => {
  const alternating = [];

  _.each(list1, (item, i) => {
    alternating.push(item);
    alternating.push(list2[i]);
  });

  return alternating;
};

console.log(ziplist(['a','b','c'], [1,2,3]));
console.log(zipListTheSimpleWay(['a','b','c'], [1,2,3]));
