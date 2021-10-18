const products = [
    {title: "Pizza", price: 121, id: "pizzita"},
    {title: "Burger", price: 121, id: "hamburguesa"},
    {title: "Hot cakes", price: 121, id: "Hot cakes"}
];

const myProducts = [];
/* console.log(products);
console.log(myProducts);
console.log("=" .repeat(10)); */

const productIndex = products.findIndex( item => item.id === "hamburguesa");
if(productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}
console.log(products);
console.log(myProducts);
console.log("=" .repeat(10));

//Actualizacion 
const productsV2 = [
    {title: "Pizza", price: 121, id: "pizzita"},
    {title: "Burger", price: 121, id: "hamburguesa"},
    {title: "Hot cakes", price: 121, id: "Hot cakes"}
];
const update = {
    id: "Hot cakes",
    changes: {
        price: 200,
        description: "delicioso"
    }
}
const productIndexV2 = productsV2.findIndex( item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes
};
console.log(productsV2);