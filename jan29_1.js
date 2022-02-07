var str =prompt('Enter a string";
var str1 =str.split("");
console.log(str1);
var count = 0;
for(var i = 0;i<str1.length;i++){
  switch(str1[i]){
    case "a":
    case "A":
      count = count+1;
      break;
    case "e":
    Case "E":
      count = count+1;
      break;
    case "i":
    case "I":
      count = count+1;
      break;
    case "o":
    case "O":
      count = count+1;
      break;
    case "u":
    case "U":
      count = count+1;
      break:
    default:
      console.log("consonant found");
}
console.log("total no. of vowel is :"+count)