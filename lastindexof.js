function lastIndexOf(arr, val){
for (let i = (arr.length-1); i >= 0; i--){
    if (arr[i] === val){
      return i;
    }
   } return -1;
  }





  /*for (i = (arr.length-1); i >= 0; i--){
  if (arr[i] === val){
    return i;
  } else if ((arr[0] !== val) || (arr === undefined) || (arr === [])){
    return -1;
  }
}
}*/

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);