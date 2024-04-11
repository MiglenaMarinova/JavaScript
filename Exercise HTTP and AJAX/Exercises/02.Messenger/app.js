function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const sendButtonElement = document.getElementById('submit');
    const refreshButtonElement = document.getElementById('refresh');
    const textAreaElement = document.getElementById('messages');
    const authorInputElement = document.querySelector('input[name=author]');
    const contentInputElement = document.querySelector('input[name=content]');

    sendButtonElement.addEventListener('click', async () => {

        const messageObj = {};
        messageObj.author = authorInputElement.value;
        messageObj.content = contentInputElement.value;
        
        let isValidMessage = authorInputElement.value !== '' && contentInputElement.value !== '';

        if(isValidMessage){
            await fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(messageObj)
            });
        }

        authorInputElement.value = '';
        contentInputElement.value = '';

    });

    refreshButtonElement.addEventListener('click', async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();

        let messages = [];

        for (const mess of Object.values(data)) {
            messages.push(`${mess.author}: ${mess.content}`);
        }

        textAreaElement.value = messages.join('\n');

    });
}

attachEvents();