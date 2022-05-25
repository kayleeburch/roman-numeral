const toRoman = (num) => {
    let result = []
    let romanToArabic = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};
    for(let x in romanToArabic){
        let arabic = romanToArabic[x]
        let roman = x
        while(num >= arabic){
            result.push(roman)
            num = num - arabic;
        }    
    }
    return result.join('')
};

module.exports.toRoman = toRoman;
