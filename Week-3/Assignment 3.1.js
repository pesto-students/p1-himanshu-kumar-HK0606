// Memoizing
const add = (n) => (n + 10);
add(9);

const memoizedAdd = () => {
    let cache = [];
    return (n) => {
        if (n in cache) {
            console.log('Fetch from cache');
            return cache[n];
        }
        else {
            console.log('calculate result');
            let result = n + 10;
            cache[n] =  result;
            return result;
        }
    }
}

// retuened function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9));
console.log(newAdd(9));
console.log(newAdd(9));
