

function solve(grade){
    const result = formatGrade(grade);

    function formatGrade(grade){
        let formatedGrade = '';
        if(grade < 3.00){
            formatedGrade = `Fail (${grade})`;
        }else if (grade >= 3.00 && grade < 3.50){
            formatedGrade = `Poor (${grade.toFixed(2)})`;
        }else if (grade >= 3.50 && grade < 4.50){
            formatedGrade = `Good (${grade.toFixed(2)})`;
        }else if (grade >= 4.50 && grade < 5.50){
            formatedGrade = `Very good (${grade.toFixed(2)})`;
        }else {
            formatedGrade = `Excellent (${grade.toFixed(2)})`;
        }
    
        return formatedGrade;
    }

    console.log(result);
}

solve(2.00);



function solve2(grade){
    const result = formatGrade(grade);

    function formatGrade(grade){
        let formatedGrade = '';
        if(grade < 3.00){
            return `Fail (${grade})`;
        } 
        if (grade >= 3.00 && grade < 3.50){
            return `Poor (${grade.toFixed(2)})`;
        }
        if (grade >= 3.50 && grade < 4.50){
            return `Good (${grade.toFixed(2)})`;
        }
        if (grade >= 4.50 && grade < 5.50){
            return `Very good (${grade.toFixed(2)})`;
        }
        return `Excellent (${grade.toFixed(2)})`;
    
    }

    console.log(result);
}

solve2(5.00);



