const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return items.reduce(reducer)
}

//console.log(toThePowerOf(2,3))

const arr = Array(11).fill(3)
console.log(arr)