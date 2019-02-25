//Print 1 to x
function printUpTo(x){
  // your code here
  if(x>0){
    for(var i=1;i<=x;i++){
      console.log(i);
    }
  }else{
    return false;
  }
}
printUpTo(1000); // should print all the integers from 1 to 1000
y = printUpTo(-10); // should return false
console.log(y); // should print false

//PrintSum
function printSum(x){
  var sum = 0;
  //your code here
  
  for(var i=0;i<=x;i++){
    sum += i;
    console.log(sum);
  }
  
  return sum
}
y = printSum(255); // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y); // should print 32640

//PrintSumArray
function printSumArray(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    //your code here
    sum+= x[i];
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6


//LargestElement
function largestElement(arr){
  var largest = 0;
  
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  largest = arr[arr.length-1];
  return largest;
}

console.log(largestElement( [1,30,5,7] ));