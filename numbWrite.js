//ТЕКСТОВОЕ ПРЕДСТАВЛЕНИЕ ЧИСЛА

const numbMass = [0, 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const numbDozen = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const numbHundred = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
const minus = 'минус';

let dozen, hundreds, len, numWrite, numberOk;
let numb = 998;
// если число положительное
function numWritePlus (numb) {
    // если число от 0 до 20
    if (len >= 0 && numb < 20) {
        return numWrite = numbMass[numb];
    }
    // если число от 20 до 99
    if (len >= 2 && numb > 20 && numb < 100) {
        dozen = numb.toString();
        // если 2-я цифра в числе равна 0
        if (dozen[1] == 0){
            return numWrite = `${numbDozen[dozen[0] - 2]}`;
        } else {
            return numWrite = `${numbDozen[dozen[0] - 2]} ${numbMass[dozen[1]]}`;
        }
    }
    // если число от 100 до 999 
    if (len === 3 && numb < 1000) {
        hundreds = numb.toString();
        // если после 1-й цифры стоят два нуля
        if (hundreds[1] == 0 && hundreds[2] == 0) {
            return numWrite = `${numbHundred[hundreds[0] -1]}`;
        // если по центру числа, цифра равна нулю
        }else if (hundreds[1] == 0 && hundreds[2] > 0) {
            return numWrite = `${numbHundred[hundreds[0] - 1]} ${numbMass[hundreds[2]]}`;
        // если 2-е последние цифры больше 10-и, но меньше 20-и
        } else if (hundreds[1] == 1) {
            return numWrite = `${numbHundred[hundreds[0] - 1]} ${numbMass[hundreds.slice(1, 3)]}`;
        // все остальные числа не более 999
        } else if (hundreds[2] == 0) {
            return numWrite = `${numbHundred[hundreds[0] - 1]} ${numbDozen[hundreds[1] - 2]}`;
        // все остальные числа не более 999
        } else {
            return numWrite = `${numbHundred[hundreds[0] - 1]} ${numbDozen[hundreds[1] - 2]} ${numbMass[hundreds[2]]}`;
        }
    
    }
}
// если число отрицательное
function numWriteMinus (numb) {
    
    if (len >= 0 && numb < 20) {
        return numWrite = `${minus} ${numbMass[numb]}`;
    }
    
    if (len >= 2 && numb > 20 && numb < 100) {
        dozen = numb.toString();
        if (dozen[1] == 0){
            return numWrite = `${minus} ${numbDozen[dozen[0] - 2]}`;
        } else {
            return numWrite = `${minus} ${numbDozen[dozen[0] - 2]} ${numbMass[dozen[1]]}`;
        }
    }
    
    if (len === 3 && numb < 1000) {
        hundreds = numb.toString();
        
        if (hundreds[1] == 0 && hundreds[2] == 0) {
            return numWrite = `${minus} ${numbHundred[hundreds[0] -1]}`;
        } else if (hundreds[1] == 0 && hundreds[2] > 0) {
            return numWrite = `${minus} ${numbHundred[hundreds[0] - 1]} ${numbMass[hundreds[2]]}`;
        } else if (hundreds[1] == 1) {
            return numWrite = `${minus} ${numbHundred[hundreds[0] - 1]} ${numbMass[hundreds.slice(1, 3)]}`;
        } else {
            return numWrite = `${minus} ${numbHundred[hundreds[0] - 1]} ${numbDozen[hundreds[1] - 2]} ${numbMass[hundreds[2]]}`;
        }
    
    }
}
// генератор текстового представления числа
function generatePhrase(numb) {
    let genNum;
    if (numb.toString()[0] == '-') {
        len = numb.toString().slice(1).length;
        numb = numb.toString().slice(1);
        return genNum = numWriteMinus(numb);
    } else {
        len = numb.toString().length;
        return genNum = numWritePlus(numb);
    }

}

