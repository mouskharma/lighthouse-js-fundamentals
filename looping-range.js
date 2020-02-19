function range (x, y, z){
  let rangeArr = [];
  if ((x !== undefined || y !== undefined || z !== undefined) && (y > x) && (z > 0)){
    for (let i = x; i <= y; i += z){
      rangeArr.push(i);
    }
  } else{
    rangeArr = [];
  }
  return rangeArr;
}

console.log(range(-9,3,3));

