
function leastCommonMultiple(n1,n2) {
  
  let lar = Math.max(n1, n2);
  let small = Math.min(n1, n2);
  
  //Loop till you find a number by adding the largest number which is divisble by the smallest number
  let i = lar;
  while(i % small !== 0){
    i += lar;
  }
  
  return i;
}

console.log(leastCommonMultiple(4, 6));


