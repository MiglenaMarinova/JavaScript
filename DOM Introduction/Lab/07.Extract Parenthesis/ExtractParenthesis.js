function extract(content) {

    const contentElemnt = document.getElementById(content);

    const matches = contentElemnt.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);

    const text = Array
        .from(matches)
        .map(match => match[1])
        .join('; ');



    //console.log(text);
    return text;

}