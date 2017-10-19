import * as assert from 'assert'
import * as sinon from 'sinon'
import Util from '../../util'

// Classes
import ArrayUtil from '../../src/classes/ArrayUtil'
import SolutionArrayUtil from '../../solutions/classes/ArrayUtil'

let oldConsole = console.log;

const args = Util.getArgs()

let arrayUtil
let logger
beforeEach(() => {
    logger = sinon.spy(console, 'log')

    if (args.c) {
        arrayUtil = new SolutionArrayUtil()
    } else {
        arrayUtil = new ArrayUtil()
    }
})

afterEach(() => {
    logger.restore()
})

describe('ArrayUtil', () => {
    describe('getArrayLength()', () => {
        // Tests use of `Array.isArray()`
        it('should return `-1` if the argument is not an Array', () => {
            assert.equal(arrayUtil.getArrayLength(), -1)
            assert.equal(arrayUtil.getArrayLength(1), -1)
            assert.equal(arrayUtil.getArrayLength(false), -1)
            assert.equal(arrayUtil.getArrayLength('testval'), -1)
        })
        // Tests use of `Array.length`
        it('should return the length of the argument', () => {
            assert.equal(arrayUtil.getArrayLength([]), 0)
            assert.equal(arrayUtil.getArrayLength([1]), 1)
            assert.equal(arrayUtil.getArrayLength([1, 2]), 2)
            assert.equal(arrayUtil.getArrayLength([1, 2, 3]), 3)
            assert.equal(arrayUtil.getArrayLength([1, 2, 3, 4]), 4)
        })
    })

    describe('getEvenNumbers()', () => {
        // Tests use of `Array.isArray()`
        it('should return an empty array if the argument is not an Array', () => {
            assert.deepEqual(arrayUtil.getEvenNumbers(), [])
            assert.deepEqual(arrayUtil.getEvenNumbers(false), [])
            assert.deepEqual(arrayUtil.getEvenNumbers(2), [])
            assert.deepEqual(arrayUtil.getEvenNumbers('testval'), [])
        })
        // Tests use of `Array.prototype.filter()`
        it('should return a filtered Array of even numbers', () => {
            assert.deepEqual(arrayUtil.getEvenNumbers([1, 3, 5, 7]), [])
            assert.deepEqual(arrayUtil.getEvenNumbers([2, 4, 6, 8]), [2, 4, 6, 8])
            assert.deepEqual(arrayUtil.getEvenNumbers([1, 2, 3, 4]), [2, 4])
        })
    })

    describe('logArrayValues()', () => {
        // Tests use of `Array.isArray()`
        it('should log `No array provided!` if the argument is not an Array', () => {
            arrayUtil.logArrayValues()
            arrayUtil.logArrayValues(2)
            arrayUtil.logArrayValues(false)
            arrayUtil.logArrayValues('testval')

            sinon.assert.callCount(logger, 4)
            sinon.assert.alwaysCalledWith(logger, 'No array provided!')
        })
        // Tests use of `Array.prototype.forEach()`
        it('should log each value in the Array', () => {
            // First pass
            arrayUtil.logArrayValues([1])
            sinon.assert.callCount(logger, 1)
            sinon.assert.calledWith(logger, 1)

            logger.reset()

            // Second pass
            arrayUtil.logArrayValues([1, 2])
            sinon.assert.callCount(logger, 2)
            sinon.assert.calledWith(logger, 1)
            sinon.assert.calledWith(logger, 2)

            logger.reset()

            // Third pass
            arrayUtil.logArrayValues([1, 2, 3])
            sinon.assert.callCount(logger, 3)
            sinon.assert.calledWith(logger, 1)
            sinon.assert.calledWith(logger, 2)
            sinon.assert.calledWith(logger, 3)
        })
    })

    describe('createStringFromArray()', () => {
        // Tests use of `Array.isArray()`
        it('should return an empty string if the argument is not an Array', () => {
            assert.equal(arrayUtil.createStringFromArray(), "")
            assert.equal(arrayUtil.createStringFromArray(2), "")
            assert.equal(arrayUtil.createStringFromArray(false), "")
            assert.equal(arrayUtil.createStringFromArray('testval'), "")
        })
        // Tests use of `Array.prototype.join()`
        it('should return a space delimited string containing each element in the Array', () => {
            assert.equal(arrayUtil.createStringFromArray([]), "")
            assert.equal(arrayUtil.createStringFromArray([1]), "1")
            assert.equal(arrayUtil.createStringFromArray(['hello', 'world']), "hello world")
            assert.equal(arrayUtil.createStringFromArray(['hello', 'world', 123, '!']), "hello world 123 !")
        })
    })

    describe('doubleArrayValues()', () => {
        // Tests use of `Array.isArray()`
        it('should return an empty array if the argument is not an Array', () => {
            assert.deepEqual(arrayUtil.doubleArrayValues(), [])
            assert.deepEqual(arrayUtil.doubleArrayValues(2), [])
            assert.deepEqual(arrayUtil.doubleArrayValues(false), [])
            assert.deepEqual(arrayUtil.doubleArrayValues('testval'), [])
        })
        // Tests use of `Array.prototype.map()`
        it('should return an array with the doubles of the original array values', () => {
            assert.deepEqual(arrayUtil.doubleArrayValues([1]), [2])
            assert.deepEqual(arrayUtil.doubleArrayValues([1, 2]), [2, 4])
            assert.deepEqual(arrayUtil.doubleArrayValues([1, 2, 3]), [2, 4, 6])
        })
    })

    describe('sumArrayValues()', () => {
        // Tests use of `Array.isArray()`
        it('should return `-1` if the argument is not an Array', () => {
            assert.equal(arrayUtil.sumArrayValues(), -1)
            assert.equal(arrayUtil.sumArrayValues(2), -1)
            assert.equal(arrayUtil.sumArrayValues(false), -1)
            assert.equal(arrayUtil.sumArrayValues('testval'), -1)
        })
        // Tests use of `Array.prototype.reduce()`
        it('should return the sum of all array values', () => {
            assert.equal(arrayUtil.sumArrayValues([1]), 1)
            assert.equal(arrayUtil.sumArrayValues([1, 2]), 3)
            assert.equal(arrayUtil.sumArrayValues([1, 2, 3]), 6)
            assert.equal(arrayUtil.sumArrayValues([1, 2, 3, 4]), 10)
        })
    })
})