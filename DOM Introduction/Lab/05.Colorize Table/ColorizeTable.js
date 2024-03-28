function colorize() {
    const rowToChange = document.querySelectorAll('table tr:nth-child(2n)');
    for (const row of rowToChange) {
        row.style.background = "teal";
    }
}