
//Тези не сравняват правилно, когато имаме малки и големи букви


//function solve(listOfNames){
//    let sortedListOfNames = listOfNames.sort(); //излишно е създаването на нова променлива, защото сорт връща същата референция
//
//    let number = 1;
//
//    for(let name of sortedListOfNames){
//        console.log(`${number}.${name}`);
//        number++;
//    }
//}
//
//function solve2(listOfNames){
//    listOfNames
//        .sort()
//        .forEach((element, index) => {
//            console.log(`${index + 1}.${element}`);
//        });
//}

function solve(listOfNames){
    listOfNames
        .sort((a, b) => a.localeCompare(b))
        .forEach((element, index) => console.log(`${index + 1}.${element}`));
}

//еквивалент на горното, подробно разписано

//function solve2(listOfNames){
//    listOfNames
//        .sort((a, b) => {
//            if(a.toLowerCase() > b.toLowerCase()){
//                return 1;
//            }else if(a.toLowerCase() < b.toLowerCase()){
//                return -1;
//            }else{
//                return 0;
//            }
//        })
//        .forEach((element, index) => console.log(`${index + 1}.${element}`));
//}


solve(["John", "bob", "Christina", "Ema"]);