export default class ArrayUtil {
    getArrayLength(arr) {
        if (!Array.isArray(arr)) {
            return -1
        }

        return arr.length
    }

    getEvenNumbers(arr) {
        if (!Array.isArray(arr)) {
            return []
        }

        return arr.filter((num) => {
            return num % 2 == 0
        })
    }

    logArrayValues(arr) {
        if (!Array.isArray(arr)) {
            return console.log('No array provided!')
        }

        arr.forEach((val) => {
            console.log(val)
        })
    }

    createStringFromArray(arr) {
        if (!Array.isArray(arr)) {
            return ""
        }

        return arr.join(" ")
    }

    doubleArrayValues(arr) {
        if (!Array.isArray(arr)) {
            return []
        }

        return arr.map((val) => {
            return val * 2
        })
    }

    sumArrayValues(arr) {
        if (!Array.isArray(arr)) {
            return -1
        }

        return arr.reduce((sum, val) => {
            return sum + val
        }, 0)
    }
}