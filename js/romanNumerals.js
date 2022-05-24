// function toRoman(num) {
//     //Lazy roman numerals 
//     let result = []
//     let romanToArabic = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};
//     for(let x in romanToArabic){
//         let arabic = romanToArabic[x]
//         let roman = x
//         // let divisible = Math.floor(num / arabic)
//         while(num >= arabic){
//             result.push(roman)
//             num = num - arabic;
//             console.log(num, arabic)
//         }    
//     }
//     return result.join('')
// };

// console.log(toRoman(44))

function fibonacci(num) {
    let arr = [0,1]
    for(let i = 0; i < num - 1; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    return arr[arr.length - 1]
}

console.log(fibonacci(7))

function factorial(num){
    let multiply = 1
    for(let i = num; i > 0; i--){
        multiply = multiply * i
    }
    return multiply
}

console.log(factorial(7))