let tempCelsius = 37;
let tempFahrenheit = 100;

// F = 32 + C * 5/9 ;

const cTof = (x) => {
    return (x * 9 / 5) + 32;
}

const fToc = (x) => {
    return (x - 32) * 5 / 9;
}


console.log(cTof(tempCelsius), fToc(tempFahrenheit)); 