function solve(input){
    const heroRegister = [];

    for (const line of input) {
        const[name, level, items] = line.split(' / ');

        const hero = {
            name: name,
            level: Number(level),
            items: items
        }

        heroRegister.push(hero);
    }

    heroRegister.sort((a, b) => a.level - b.level);

    for (const hero of heroRegister) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )