function encodeAndDecodeMessages() {
    const encodeTextElement = document.getElementsByTagName('textarea')[0];
    const encodeBtnElement = document.getElementsByTagName('button')[0];

    const decodeTextElement = document.getElementsByTagName('textarea')[1];
    const decodeBtnElement = document.getElementsByTagName('button')[1];

    encodeBtnElement.addEventListener('click', (e) => {
        let encodeMessage = encodeTextElement.value;
        let decodeMessage = '';

        for (let index = 0; index < encodeMessage.length; index++) {
            let currentChar = encodeMessage.charCodeAt(index);            
            decodeMessage += String.fromCharCode(currentChar+1);            
        }

        decodeTextElement.value = decodeMessage;

        encodeTextElement.value = '';
    });

    decodeBtnElement.addEventListener('click', (e) => {
        let decodeMessage = decodeTextElement.value;
        let encodeMessage = '';

        for (let index = 0; index < decodeMessage.length; index++) {
            let currentChar = decodeMessage.charCodeAt(index);            
            encodeMessage += String.fromCharCode(currentChar-1);            
        }

        decodeTextElement.value = encodeMessage;
    });
}