function square(input: number | number[]): number | number[] | undefined {
    if (Array.isArray(input)) {
        return input.map(num => num * num);
    } else {
        return input*input
    }
}
console.log(square(5));

console.log(square([1, 2, 3, 4]));
