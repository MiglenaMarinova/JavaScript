
// Регистрираме Promise със съотвения асинхроннен код

const weddingPromise = new Promise((resolve, reject) => {
    if(Math.random() < 0.3){  // някакъв процент, в който фейла
        reject('Sorry, It is me!');
        return;
    }

    setTimeout(() => {
        resolve('Just Married!');
    }, 5000);
});

// Promise приема функция като параметър на конструктора, коята се нарича executor, която има два параметъра resolve и reject

console.log(weddingPromise); // тука ще ни отпечата само promise като обект със неговия статус, защото още не е изпълнено

weddingPromise
.then((message) => {
    console.log(message);
})
.catch(message => {
    console.log(message);
})
.finally(() => {          // това ще се изпълни винаги, без значение дали е резолвнало или реджектнало преди това
    console.log('Love always wins!');
});

// Always rejecting promise
const rejectingPromise = Promise.reject('Sorry next time ');
console.log(rejectingPromise);
rejectingPromise.catch((message) => console.log(message));

// Multiple parallel promises - приема масив от стойност, където всяка една стойност е promise 
const createTimeOutPromise = function(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time);
    });
}

// Всички трябва да се resolve, за да се resolve groupPromise = Promise.all
const groupPromise = Promise.all([
    Promise.resolve('First promise'),
    createTimeOutPromise('Second promise', 3000),
    createTimeOutPromise('Third promise', 3000),
]);               

groupPromise.then((values) => {
    console.log(values);
});


// Един да reject, reject и groupPromise = Promise.all
//const groupPromise = Promise.all([
//    Promise.resolve('First promise'),
//    createTimeOutPromise('Second promise', 3000),
//    createTimeOutPromise('Third promise', 3000),
//    Promise.reject('sorry'),
//]);               
//
//groupPromise
//.then((values) => {
//    console.log(values);
//})
//.catch(error => {
//    console.log(error);
//});

// ще изчака всички да се settle, ще върне масив, в който елемент е обект със статус и месидж, позволява някои да reject
//const groupPromise = Promise.allSettled([
//    Promise.resolve('First promise'),
//    createTimeOutPromise('Second promise', 3000),
//    createTimeOutPromise('Third promise', 3000),
//    Promise.reject('sorry'),
//]);               
//
//groupPromise.then((values) => {
//    console.log(values);
//});


