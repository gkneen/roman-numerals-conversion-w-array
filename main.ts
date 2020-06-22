let offset = 0
let digit = 0
let arabicNumber = 107
let anAsText = convertToText(arabicNumber)
let romanNumber = ""
let romanDigit = ""
let romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M", "MM", "MMM"]
for (let index = 0; index <= anAsText.length - 1; index++) {
    digit = parseFloat(anAsText.charAt(anAsText.length - index - 1))
    offset = index * 9
    if (digit != 0) {
        romanDigit = romanNumerals[offset + (digit - 1)]
        romanNumber = "" + romanDigit + romanNumber
    }
}
basic.showString("" + (romanNumber))
