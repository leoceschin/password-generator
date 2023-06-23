const sumNumbers = (birth) => {
    const birthArr = birth.split("/")
    const convertStringToInt = numberString => Number(numberString)

    const numbersSum = birthArr.map(convertStringToInt).reduce((accumulator, currentValue)=>{
        return accumulator+currentValue
    })

    return numbersSum
}

const threeLetters = (name) => {
    return name.substring(0,3)
}

module.exports = {
    sumNumbers,
    threeLetters
}