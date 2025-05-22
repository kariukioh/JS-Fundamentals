const arg1 = process.argv[2]; //means the first argument found
const arg2 = process.argv[3]; //means the second arguement found

if (arg1 === undefined) {
    console.log("No argument");
} else if(arg2 === undefined){
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
