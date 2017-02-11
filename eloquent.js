//minimum
function min (a,b){
  if(a<b) {return a}
  else {
    return (b)
   }
}

console.log (min (6,4));

//recursive
function isEven(num) {
  if(num<0){
      num*= -1; //multiplying two negatives to make a positive so it doesn't run out of stack space
  }
  if(num == 0){
    return true;
  }
  else if(num == 1){
      return false;
  }
  else {
     return isEven(num - 2);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//COUNT   B 'S
function countBs(string){
    var count = 0;
    for(var i=0; i<string.length; i++) {
       if(string.charAt(i)== "B") { //IF character is B then add to the count
           count++; //continue count
       };
    };
    return count; //return count
};
//log funtion countBs
console.log(countBs("BBBBBFDC"));

//count character
function countChar(string, char) {
  var count = 0;
      for(var i=0; i<string.length; i++) {
          if (string.charAt(i)==char) {
            count++;
          };
        };
        return count;
      };

console.log(countChar("kakkerlakk", "a"));
