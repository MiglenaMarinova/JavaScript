function solve(input){
const phoneBook = {};

for(let line of input){
    const[name, phone] = line.split(' ');

    phoneBook[name] = phone;
}

for(let name in phoneBook){
    console.log(`${name} -> ${phoneBook[name]}`);
}
 
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)