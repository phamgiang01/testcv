

let arr = ["one","two","three","four","five","six"];
var arrIndex = []

let maxLength = 1;
for(let i =0;i<arr.length;i++){
  if(arr[i].length>=maxLength) maxLength = arr[i].length
}

// for(let i=0;i<arr.length;i++){
//   if(arr)
// }

console.log(maxLength)


// for (var i = 1; i < arr.length; i++) {
//   console.log([i])
//   // if(arr)
//   // if (arr) team1.push(arr[i]);
//   // if ([i] > Math.floor(arr.length / 3) && [i] <= arr.length - 3)
//   //   team2.push(arr[i]);
//   // if ([i] > arr.length - 3) team3.push(arr[i]);
// }

