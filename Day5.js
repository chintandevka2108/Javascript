let add = (a, b,c) => {
      c = a + b
    return c
};
console.log(add(10, 10))

let sub = (a,b,c) => {
    c = a -b
    return c
}
console.log(sub(20,10))

let mul = (a,b,c) => {
    c = a * b
    return c 
}
console.log(mul(25,10))

let div = (a,b,c) => {
    c = a / b
    return c
}
console.log(div(10,2))

let mod = (a, b) => {
    let c = a % b; // Perform modulus operation
    return c; // Return the result
};

console.log(mod(2001, 20)); // Output: 0
