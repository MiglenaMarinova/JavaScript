function solve(num, operation1, operation2, operation3, operation4, operation5){

    let result = Number(num);
    let command = operation1.charAt(0) + operation2.charAt(0)+operation3.charAt(0)+operation4.charAt(0)+operation5.charAt(0);

    for (let i = 0; i < command.length; i++) {
        
        let current = command.charAt(i);

        switch (current) {
            case 'c':
                result /=2;
                break;
            case 'd':
                result = Math.sqrt(result);
                break;
            case 's':
                result += 1;
                break;
            case 'b':
                result *=3;
                break;
            case 'f':
                result *=0.8;
                break;
               
        }
        console.log(result);
        
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');