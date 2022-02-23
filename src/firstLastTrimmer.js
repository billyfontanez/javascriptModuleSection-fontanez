const firstLastTrimmer = arr => {
    //error checking
    if (arr.length >= 3){
        return arr.slice(1, -1);
    } else {
        throw new Error('You need at least three elements in the array');
    }
}

console.log(firstLastTrimmer([1,2,3,4,5,6,7,8,9,10]))