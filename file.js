function printAndReturn(arr){
    console.log(arr[arr.length-2]);
    for (var i=0;i<arr.length;i++){
      if(arr[i] % 2 !==0){
        return arr[i];
      }
    }
  }
  
  var z = [2,8,6,3,5,9];
  console.log(printAndReturn(z));



  function makeItBig(arr){
    for (var i=0;i<arr.length;i++){
      if(arr[i] > 0){
        arr[i] = 'big';
      }
    }
    return arr;
  }
  
  var x = [-1,3,5,-5];
  console.log(makeItBig(x));
  


  function printAndReturn(arr){
    console.log(arr[arr.length-2]);
    for (var i=0;i<arr.length;i++){
      if(arr[i] % 2 !==0){
        return arr[i];
      }
    }
  }
  
  var z = [2,8,6,3,5,9];
  console.log(printAndReturn(z));



  function printLowReturnHigh(arr){
    var lowest = arr[0];
    var highest = arr[0];
    for (var i=0;i<arr.length;i++){
      if (arr[i] < lowest){
        lowest = arr[i];
      }
      if (arr[i] > highest){
        highest = arr[i]
      }
    }
    console.log(lowest);
    return highest;
  }
  
  var y = [-4, -7, 3, 6];
  console.log(printLowReturnHigh(y));



  
  function double(arr){
    for (var i=0;i<arr.length;i++){
      arr[i] = arr[i]*2;
    }
    return arr;
  }
  
  var x = [1,2,3];
  console.log(double(x));



  function countPositives(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++){
      if (arr[i] > 0){
        sum++;
      }
    }
    arr[arr.length-1] = sum;
    return arr;
  }
  
  var x = [-1,1,1,1];
  console.log(countPositives(x));