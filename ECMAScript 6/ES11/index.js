// Dinamic Import

const button = document.getElementById("btn")

button.addEventListener("Click", async function() {
    const module = await import("./File.js");
    module.hello();
})

//
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// mas promesas

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(Response => console.log(Response));


// global this

console.log(window);
console.log(globalThis);

// Operador de nulo

const fooo = null ?? "defaul string";
console.log(fooo);

//optional chaining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log("email")
}
else {
    console.log("fail")
}