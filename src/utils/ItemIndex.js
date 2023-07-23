const IndexItem = (arr, item) => {
  const itemIndexArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      itemIndexArr.push(i);
    }
  }
  return itemIndexArr;
};

// const testArr = [0, 1, 2, 3, 4, 0, 6, 7, 0, 9, 0, 11];

// console.log(IndexItem(testArr,0))

export default IndexItem;
