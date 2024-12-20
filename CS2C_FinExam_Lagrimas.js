// Create a multi-dimensional array containing the following values: (use prompt() function)
let names = prompt("Enter names separated by commas:").split(",");
let ages = prompt("Enter ages separated by commas:").split(",").map(Number);


// Restructure the declared multi-dimensional array above and store in a new multi-dimensional array, where each of the sub-array must contain [name, age].
let restructuredArray = [];
for (let i = 0; i < names.length; i++) {
  restructuredArray.push([names[i], ages[i]]);
}


// Log to the console the restructured multidimensional array [name, age] per line.
console.log("Restructured array:");
restructuredArray.forEach(item => console.log(item));
