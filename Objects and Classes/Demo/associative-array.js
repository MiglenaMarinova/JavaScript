let fullName = 'Sasho Sashev';
let fullName2 = 'Gosho Goshev';

let phoneBook = {
    'Ivan Ivanov': '+359888388500',
    'Ginka Stamenova': '+359888388501',
    [fullName]: '+359888388503',
    'Ivaylo Papazov': null,
};

phoneBook['Peter Petrov'] = '+359888388502';
phoneBook[fullName2] = '+359888388504';

console.log(phoneBook);

// Use for in loop - работи за обекти, минава по key
for(let name in phoneBook){ 
    console.log(`${name} ->>> ${phoneBook[name]}`) ;
}

for (const name of Object.keys(phoneBook)){
    console.log(name);
}

// Use for in for array - когато се ползва за масиви, връща индекса
const names = ['Pesho', 'Gosho', 'Sasho'];
for (const name in names){
    console.log(name);
}

// Check if the person has value in the phoneBook
if(phoneBook['Ivaylo Papazov']){
    console.log('Phone Found');
}else{
    console.log('Phone Not found');
}

// Check if property Name exists
if(phoneBook.hasOwnProperty('Ivaylo Papazov')){
    console.log('Name found');
}else{
    console.log('Name not found');
}

console.log('Ivaylo Papazov' in phoneBook); // true or false

// Sort an object
let sortedArray = Object.entries(phoneBook)  // връща масив от масиви, всеки от които има key-value pair 
    .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))
   //.sort((a, b) => a[0].localeCompare(b[0]));

console.log(Object.fromEntries(sortedArray));    

