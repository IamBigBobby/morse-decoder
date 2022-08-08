const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    
    const arrExpr = [];
    for (let i = 0; i < expr.length; i+=10){
        arrExpr.push(expr.slice(i, i + 10));
    }
    
    const arrEachElement = [];
    for (let element of arrExpr){
        if (element == '**********'){
            arrEachElement.push(' ');
        }
        else{
            arrEachElement.push(element);
        }
    }

    const arrEachElementMorse = [];
    for (let element of arrEachElement){
        if (element == ' '){
            arrEachElementMorse.push(' ');
        }
        else{
            element = element.replace(/10/gi, '.');
            element = element.replace(/11/gi, '-');
            element = element.replace(/00/gi, '')
            arrEachElementMorse.push(element);
        }
    }

    const finalStringResult = [];
    for(let element of arrEachElementMorse){
        for (key in MORSE_TABLE){
            if (element == key){
                finalStringResult.push(MORSE_TABLE[key]);
            }
            else if (element == ' '){
                finalStringResult.push(' ');
                break;
            }
        }
    }
    result = finalStringResult.join('');
    return result;
}

module.exports = {
    decode
}

console.log(decode("0000000011001010101000000000100011101111**********0000111011000000001000000000100010111110**********00000011110000000010**********00000010100000001110**********000000001100101010100000000010**********00111010100000001011000010101000000000100000001111000000001000000011100000000011"))