# Practice
Output random array with size of x(input), within range of [2, 32]. 

## 1.0 (Initial Construct)
```javascript
function getRandom(x){
  var y = 0;
  var array=[];
  for (var i=0; i <x;i++){
    y= Math.floor((Math.random() * 32) + 2);
    array.push(y);
  }
  console.log(array);
}
getRandom(2);
```
## 1.1 Doability (Basic)
* to check if there's repeat in the list
```javascript
function getRandom(x){
  var y = 0;
  var array=[];
  for (var i=0; i <x;i++){
    y= Math.floor((Math.random() * 32) + 2); 
    if(array.includes(y)) i--; 
    else array.push(y);
  }
  return (array);
}
getRandom(3);
```
## 2.0 Strong
* Dealing with edge case 
* Case 1: input is not a number 
```javascript
function getRandom(x){
  if (isNaN(x))return false;
  var y = 0;
  var array=[];
  for (var i=0; i <x;i++){
    y= Math.floor((Math.random() * 32) + 2); 
    if(array.includes(y)) i--;
    else array.push(y);
  }
  return (array);
}
getRandom([1,2]);
```
* Case 2: input does not exist
## 3.0 Reliability
* Considering the returned value format
* eg.1. check if the array is in range 2,32; 
* eg.2. if input not valid, return to empty array[]
```javascript
function getRandom(x){
  if (isNaN(x))return [];
  var y = 0;
  var array=[];
  for (var i=0; i <x;i++){
    y= Math.floor((Math.random() * 32) + 2); 
    if(array.includes(y)) i--;
    else array.push(y);
  }
  return (array);
}
getRandom();
```
## 4.0 Tolerance
* if input is float(3.2) not integer, should we process?
```javascript
function getRandom(x){
  if (isNaN(x))return [];
  var y = 0;
  var array=[];
  for (var i=0; i <Math.floor(x);i++){
    y= Math.floor((Math.random() * 32) + 2); 
    if(array.includes(y)) i--;
    else array.push(y);
  }
  return (array);
}
getRandom(3.2);
```
* Do I have enough clear explanation? 
* if the range is changed, could I adjust accordingly with ONLY few changes? 
