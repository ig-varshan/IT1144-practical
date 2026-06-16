const name=["a","b","c","d","e","f","g","h","i","j"]
console.log("Printing array elements using loop : ");

for(let key in name) {
		console.log(name[key]);
}

//Modify the 2nd index into another name
name[2]="Mithu";


console.log("After Modification: ");

for(let key in name) {
		console.log(name[key]);
}

//Add another name to the array

name.push("Abi")

console.log("After Adding: ");

for(let key in name) {
		console.log(name[key]);
}


//Remove last element from the array
name.pop();

console.log("After Removing: ");

for(let key in name) {
		console.log(name[key]);
}


