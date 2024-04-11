function lockedProfile() {
    const usersElements = Array.from(document.getElementsByClassName('profile'));
    
    for (const user of usersElements) {
        const showMoreButton = user.querySelector('button');
        const lockRadioElement = user.querySelector('input[type=radio][value=lock]');
        
        const userAllElements = Array.from(user.children);
        const moreInfoElement = userAllElements[9];
        
        showMoreButton.addEventListener('click', (e) =>{
            
            if(lockRadioElement.checked){
                return;
            }
            
            if(showMoreButton.textContent === 'Show more'){
                moreInfoElement.style.display = 'block';
                showMoreButton.textContent = 'Hide it';
                
            }else{
                moreInfoElement.style.display ='none';
                showMoreButton.textContent = 'Show more';
            }
        });
        
    }
    
}