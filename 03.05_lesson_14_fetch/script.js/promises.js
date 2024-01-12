let a = 45;

// setTimeout(() => {
//     a = 67;
//     console.log(a);
// }, 3000)

// console.log(a);

const promise = new Promise((res) => {
    setTimeout(() => {
        res(a = 67)
    }, 3000)
})
.then(() => console.log(a))

console.log(a);