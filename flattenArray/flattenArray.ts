function flattenArray(arr: any[]): any[] {
    const oneArray = [];

    flatten(arr);

    function flatten(arr: any[]) {
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                flatten(element)
            } else {
                oneArray.push(element);
            }
        });
    }

    return oneArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
