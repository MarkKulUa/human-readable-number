module.exports = function toReadable (number) {

    if(number === 0) return 'zero';

    let result = '';
    let units = {
            0: "",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
        },
        firstTen = {
            0: "ten",
            1: "eleven",
            2: "twelve",
            3: "thirteen",
            4: "fourteen",
            5: "fifteen",
            6: "sixteen",
            7: "seventeen",
            8: "eighteen",
            9: "nineteen",
        },
        dozens = {
            0: "",
            1: "",
            2: "twenty ",
            3: "thirty ",
            4: "forty ",
            5: "fifty ",
            6: "sixty ",
            7: "seventy ",
            8: "eighty ",
            9: "ninety ",
        };

    let number_str=String(number).valueOf();
   
    switch (number_str.length) {
        case 1:
            result=units[number_str];
            break;
        case 2:
            if (number_str[0] === '1'){
                result=`${firstTen[number_str[1]]}`;
            } else {
                result=`${dozens[number_str[0]]}${units[number_str[1]]}`;
            }
            break;
        case 3:
            if (number_str[1]==='1'){
                result=`${units[number_str[0]]} hundred ${firstTen[number_str[2]]}`;
            } else {
                result=`${units[number_str[0]]} hundred ${dozens[number_str[1]]}${units[number_str[2]]}`;
            }
            break;
        case 4:
            if (number_str[2]==='1'){
                result=`${units[number_str[0]]} thousand ${units[number_str[1]]} hundred ${firstTen[number_str[3]]}`;
            } else {
                result=`${units[number_str[0]]} thousand ${units[number_str[1]]} hundred ${dozens[number_str[2]]}${units[number_str[3]]}`;
            }
            break;

        default:
            break;
    }
    return result.trim();
}
