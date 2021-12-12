function isPrime(num) {
    for ( var n = 2; n < num; n++ ) {
        if ( num % n === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var j = 3; j < n; j+=2 ) {
        if ( isPrime(j) ) {
            arr.push(j);
        }
    }
  return arr;
}

display(100);
