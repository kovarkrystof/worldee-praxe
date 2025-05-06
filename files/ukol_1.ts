const input: string = "";
let floor = 0;

for (const i of input) {
    if (i === "(") {
        floor += 1;
    } else if (i === ")") {
        floor -= 1;
    }
}

console.log(floor);