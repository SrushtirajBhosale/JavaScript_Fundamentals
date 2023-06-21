console.log("script start");

const first = setTimeout(() => {
    console.log("inside setTimeout1");
}, 1000);

setTimeout(() => {
    console.log("inside setTimeout2");
}, 1000);


for (let i = 0; i < 100; i++) {
    console.log("...");
}

console.log("clearing setTimeout1");
clearTimeout(first);
console.log("script end");