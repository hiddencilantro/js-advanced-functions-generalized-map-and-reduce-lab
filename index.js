function map(sourceArray, fn) {
    const newArray = [];
    for (const element of sourceArray) {
        newArray.push(fn(element));
    };
    return newArray;
}

function reduce(sourceArray, fn, startingValue) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (const element of sourceArray) {
            total = fn(element, total);
        };
        return total;
    } else {
        total = sourceArray[0];
        for (let i=1; i<sourceArray.length; i++) {
            total = fn(sourceArray[i], total);
        };
        return total;
    };
}
