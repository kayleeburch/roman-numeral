def to_roman(num):
    result = []
    dict = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};
    for x in dict:
        roman = x
        arabicNum = dict[x]
        while(num >= arabicNum):
            result.append(roman)
            num = num - arabicNum
    return "".join(result)