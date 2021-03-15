const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
};

function toWord(number) {
    return numbers[number];
}

module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    let [hundreds, tens] = [0, 0];
    let result = '';
    hundreds = parseInt(number / 100);
    let rest = number % 100;
    if (rest > 19) {
        tens = parseInt(rest / 10);
        rest = number % 10;
    }
    if (hundreds > 0) result += `${toWord(hundreds)} hundred`;
    if (tens > 0) result += ` ${toWord(tens * 10)}`;
    if (rest > 0) result += ` ${toWord(rest)}`;
    return result.trim();
}