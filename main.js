let list = ["one", "two", "three", "four", "five", "six"];
let len = "length";
let lengthObj = list.reduce((acc, curr) => {
  const lengthKey = curr.length;
  if (acc[lengthKey]) {
    acc[lengthKey].push(curr);
  } else {
    acc[lengthKey] = [curr];
  }

  return acc;
}, {});
