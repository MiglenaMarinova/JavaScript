function timeLogger(date, text){
    console.log(`${date}: ${text}`);
}

function timeLoggerBuilder(date){
    return function(text){
        timeLogger(date, text);
    }
}

const logger = timeLoggerBuilder('05.03.2024');

logger('Hello Pesho');
logger('Hello Gosho');
logger('Hello Tosho');

//----------------------------------

function loggerBuilder(date){
    return function(text){
        console.log(`${date}: ${text}`);
    }
}

const logger1 = loggerBuilder('05.03.2024');

logger1('Hello Pesho');
logger1('Hello Gosho');
logger1('Hello Tosho');

//---------------------------

function loggerBuilder(date){
    function customLogger(text){
        console.log(`${date}: ${text}`);
    }

    return customLogger;
}

const logger2 = loggerBuilder('05.03.2024');
const yesterdayLogger = loggerBuilder('04.03.2024');

logger2('Hello Pesho');
yesterdayLogger('Hello Pesho'); 
logger2('Hello Gosho');
logger2('Hello Tosho');