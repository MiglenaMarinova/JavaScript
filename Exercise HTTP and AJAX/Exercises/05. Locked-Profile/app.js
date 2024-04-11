function lockedProfile() {

    const usersUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const lockButtonElement = document.querySelector('input[type=radio][value=lock]');
    const unlockButtonElement = document.querySelector('input[type=radio][value=unlock]');
    const mainElement = document.getElementById('main');  
    

    fetch(usersUrl)
    .then(response => response.json())
    .then(data => {
        Object.values(data)
            .forEach(user => {
                createPrifilCard(user)                
            }
        ); 
    });


    function createPrifilCard(user){

        const divElement = document.createElement('div');
        divElement.classList.add('profile');

        divElement.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user1Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${user.username}" disabled readonly />
            <div id="user1HiddenFields">
                <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${user.email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user1Age" value="${user.age}" disabled readonly />
            </div>

            <button>Show more</button>
        `;
        
        mainElement.appendChild(divElement);
    }
}
