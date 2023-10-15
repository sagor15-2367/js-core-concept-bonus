const array=[12,14,12,23,34,45,56,67,78];
for(const number of array){
    // console.log(number);
}
const products=[
    { id: 1, name: 'oppo phone', price: 1200 },
    { id: 2, name: 'iphone', price: 100000 },
    { id: 3, name: 'HTC phone', price: 1200 },
    { id: 4, name: 'wallton', price: 34200 },
    { id: 5, name: 'shymphone phone', price: 21200 },
    { id: 6, name: 'redmi', price: 132000 },
]
// for(const product of products){
//     console.log(product)
// }
function matchedProducts(products,search) {
    const matched=[];
    for(const product of products){
        // console.log(product.name.includes(search));
        // another way 
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
const result=matchedProducts(products,'phone');
console.log(result);

