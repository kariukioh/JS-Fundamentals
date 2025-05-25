const a = process.argv[2];
const b = process.argv[3];

const numA = parseInt(a);
const numB = parseInt(b);

if (isNaN(numA) || isNaN(numB)) {
	console.log("NaN");
} else {
	function add(x, y) {
		return x + y;
	}
console.log(add(numA, numB));
}
