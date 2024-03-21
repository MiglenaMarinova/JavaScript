function solve(input){
    let count = input[0];
    let typeListInput = input[input.length - 1];

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 1; i <= count ; i++) {
        let line = input[i];
        let typeList= line.split('_')[0];
        let name = line.split('_')[1];
        let time = line.split('_')[2];
        let song = new Song(typeList, name, time);
        if(typeList === typeListInput || typeListInput === "all"){
            console.log(song.name);
        }
        
    }
}

function solve2(input){
    class Song {
        constructor(name, time){
            this.name = name;
            this.time = time;
        }
    }

    const collection = {};
    const allSongs = [];

    const numberOfSongs = input.shift();

    for (let i = 0; i < numberOfSongs; i++) {
        const [typeList, name, time] = input.shift().split('_');

        if(!collection[typeList]) {
            collection[typeList] = [];
        }

        const song = new Song(name, time);
        collection[typeList].push(song);
        allSongs.push(song);       
    }

    const typeList = input.shift();
        if(typeList == 'all'){
            allSongs.forEach(song => console.log(song.name));
            //Object.values(collection).flat(1).forEach(song => console.log(song.name));
        }else{
            collection[typeList].forEach(song => console.log(song.name));
        }


}

solve2([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'] 
    )