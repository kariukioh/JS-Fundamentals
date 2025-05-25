const x = process.argv[2]; //acessing the first argument
const num = parseInt(x); //converting to a number

if (isNaN(num)) {
	console.log("Missing number of occurrences");
} else {
	let i = 0;
	while (i < num) {
		console.log("C is fun");
		i++;
	}
}

