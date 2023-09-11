
const promise = new Promise((resolve, reject) => { console.log('Hello there'); resolve();
})
console.log('Calling the promise'); promise.then(() => { console.log('Executed...');
})