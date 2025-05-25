const arg1 = process.argv[2];
const num = parseInt(arg1);

if (isNaN(num)) {
	console.log("Missing size");
} else if (num <= 0) {
	// do nothing for 0 or negative input - just exit
} else {
	let i = 0;
while (i < num) {
	console.log("X".repeat(num));
	i++;
}
}
