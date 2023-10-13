const numbers = [43, 22, 1, 34, 54, 23, 45, 15, 2, 34];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// for (const number of numbers) {
//     console.log(number);
// }

const products = [
    { id: 1, name: 'oppo', price: 1200 },
    { id: 2, name: 'iphone', price: 100000 },
    { id: 3, name: 'HTC', price: 1200 },
    { id: 4, name: 'wallton', price: 34200 },
    { id: 5, name: 'shymphone', price: 21200 },
    { id: 6, name: 'redmi', price: 132000 },
    { id: 7, name: 'sumsame', price: 14200 },
    { id: 8, name: 'itell', price: 12600 },
    { id: 9, name: 'tecnno', price: 21200, hagu: 'netkagu' }
];
// for(const product of products){
// console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.include(search)) {
            matched.push(search);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);