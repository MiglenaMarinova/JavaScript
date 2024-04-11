// Asynch prodramming with callback
// Винаги се изпълнява първо синхронния код и после асинхронния


console.log('start'); // първо се изпълнява това (синхронен код)
delayStart(() => {
    console.log('delayed start1')
    console.log('delayed start2') // кода в delayStart се изпълнява синхронно
    console.log('delayed start3')
    console.log('delayed start4')
}); // нашата callback ф-я е () => console.log('start'), тя се подава на setTimeout, и чака в event loop-а да свърши изпълнението на синхронния код
console.log('finish'); // второ се изпълнява това (синхронен код)

function delayStart(callback){ // delayStart очаква callback, което е функция, която ще се изпълни с отложен старт 

    setTimeout(() => {
        callback();
    }, 2000);
}

// когата се изпълни всичко от stack-а , се взима callback functio от event queue-то, където си чака реда, където може да има още callback function
//delayStart(() => {
//    console.log('delay start1');
//}, 2000);
//
//delayStart(() => {
//    console.log('delay start2');
//}, 1000);
// тука нищо, че втората е регистрирана като втора в queue-то, тя щя се върне първа в stack-а и ще се изпълни преди другата

