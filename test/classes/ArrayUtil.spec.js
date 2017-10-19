import * as assert from 'assert'
import * as sinon from 'sinon'
import Util from '../../util'

// Classes
import ArrayUtil from '../../src/classes/ArrayUtil'
import SolutionArrayUtil from '../../solutions/classes/ArrayUtil'

let oldConsole = console.log;

const args = Util.getArgs()

let arrayUtil, isArray, logger
beforeEach(() => {
    isArray = sinon.spy(Array, 'isArray')
    logger = sinon.spy(console, 'log')

    if (args.c) {
        arrayUtil = new SolutionArrayUtil()
    } else {
        arrayUtil = new ArrayUtil()
    }
})

afterEach(() => {
    isArray.restore()
    logger.restore()
})

describe('ArrayUtil', () => {
    describe('getArrayLength()', () => {
        // Tests use of `Array.isArray()`
        it('should return `-1` if the argument is not an Array', () => {
            assert.equal(arrayUtil.getArrayLength(), -1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.getArrayLength(1), -1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.getArrayLength(false), -1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.getArrayLength('testval'), -1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()
        })
        // Tests use of `Array.length`
        it('should return the length of the argument', () => {
            assert.equal(arrayUtil.getArrayLength([]), 0)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.getArrayLength([1]), 1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.getArrayLength([1, 2]), 2)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.getArrayLength([1, 2, 3]), 3)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.getArrayLength([1, 2, 3, 4]), 4)
            sinon.assert.calledOnce(isArray)
            isArray.reset()
        })
    })

    describe('getEvenNumbers()', () => {
        // Tests use of `Array.isArray()`
        it('should return an empty array if the argument is not an Array', () => {
            assert.deepEqual(arrayUtil.getEvenNumbers(), [])
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.deepEqual(arrayUtil.getEvenNumbers(false), [])
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.deepEqual(arrayUtil.getEvenNumbers(2), [])
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.deepEqual(arrayUtil.getEvenNumbers('testval'), [])
            sinon.assert.calledOnce(isArray)
            isArray.reset()
        })
        // Tests use of `Array.prototype.filter()`
        it('should return a filtered Array of even numbers', () => {
            let filter = sinon.spy(Array.prototype, 'filter')
            
            assert.deepEqual(arrayUtil.getEvenNumbers([1, 3, 5, 7]), [])
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledOnce(filter)
            isArray.reset()
            filter.reset()

            assert.deepEqual(arrayUtil.getEvenNumbers([2,4,6,8]), [2, 4, 6, 8])
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledOnce(filter)
            isArray.reset()
            filter.reset()

            assert.deepEqual(arrayUtil.getEvenNumbers([1, 2, 3, 4]), [2, 4])
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledOnce(filter)
            isArray.reset()
            filter.restore()
        })
    })

    describe('logArrayValues()', () => {
        // Tests use of `Array.isArray()`
        it('should log `No array provided!` if the argument is not an Array', () => {
            arrayUtil.logArrayValues()
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledWith(logger, 'No array provided!')
            isArray.reset()

            arrayUtil.logArrayValues(2)
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledWith(logger, 'No array provided!')
            isArray.reset()

            arrayUtil.logArrayValues(false)
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledWith(logger, 'No array provided!')
            isArray.reset()

            arrayUtil.logArrayValues('testval')
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledWith(logger, 'No array provided!')
            isArray.reset()
        })
        // Tests use of `Array.prototype.forEach()`
        it('should log each value in the Array', () => {
            // First pass
            arrayUtil.logArrayValues([1])
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledOnce(logger)
            sinon.assert.calledWith(logger, 1)
            isArray.reset()
            logger.reset()

            // Second pass
            arrayUtil.logArrayValues([1, 2])
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledTwice(logger)
            sinon.assert.calledWith(logger, 1)
            sinon.assert.calledWith(logger, 2)
            isArray.reset()
            logger.reset()

            // Third pass
            arrayUtil.logArrayValues([1, 2, 3])
            sinon.assert.calledOnce(isArray)
            sinon.assert.calledThrice(logger)
            sinon.assert.calledWith(logger, 1)
            sinon.assert.calledWith(logger, 2)
            sinon.assert.calledWith(logger, 3)
            isArray.reset()
            logger.reset()
        })
    })

    describe('createStringFromArray()', () => {
        // Tests use of `Array.isArray()`
        it('should return an empty string if the argument is not an Array', () => {
            assert.equal(arrayUtil.createStringFromArray(), "")
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.createStringFromArray(2), "")
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.createStringFromArray(false), "")
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.createStringFromArray('testval'), "")
            sinon.assert.calledOnce(isArray)
            isArray.reset()
        })
        // Tests use of `Array.prototype.join()`
        it('should return a space delimited string containing each element in the Array', () => {
            let join = sinon.spy(Array.prototype, 'join')

            assert.equal(arrayUtil.createStringFromArray([]), "")
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(join)
            isArray.reset()
            join.reset()

            assert.equal(arrayUtil.createStringFromArray([1]), "1")
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(join)
            isArray.reset()
            join.reset()

            assert.equal(arrayUtil.createStringFromArray(['hello', 'world']), "hello world")
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(join)
            isArray.reset()
            join.reset()

            assert.equal(arrayUtil.createStringFromArray(['hello', 'world', 123, '!']), "hello world 123 !")
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(join)
            isArray.reset()
            join.restore()
        })
    })

    describe('doubleArrayValues()', () => {
        // Tests use of `Array.isArray()`
        it('should return an empty array if the argument is not an Array', () => {
            assert.deepEqual(arrayUtil.doubleArrayValues(), [])
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.deepEqual(arrayUtil.doubleArrayValues(2), [])
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.deepEqual(arrayUtil.doubleArrayValues(false), [])
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.deepEqual(arrayUtil.doubleArrayValues('testval'), [])
            sinon.assert.calledOnce(isArray)
            isArray.reset()
        })
        // Tests use of `Array.prototype.map()`
        it('should return an array with the doubles of the original array values', () => {
            let map = sinon.spy(Array.prototype, 'map')

            assert.deepEqual(arrayUtil.doubleArrayValues([1]), [2])
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(map)
            isArray.reset()
            map.reset()

            assert.deepEqual(arrayUtil.doubleArrayValues([1, 2]), [2, 4])
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(map)
            isArray.reset()
            map.reset()

            assert.deepEqual(arrayUtil.doubleArrayValues([1, 2, 3]), [2, 4, 6])
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(map)
            isArray.reset()
            map.restore()
        })
    })

    describe('sumArrayValues()', () => {
        // Tests use of `Array.isArray()`
        it('should return `-1` if the argument is not an Array', () => {
            assert.equal(arrayUtil.sumArrayValues(), -1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.sumArrayValues(2), -1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.sumArrayValues(false), -1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()

            assert.equal(arrayUtil.sumArrayValues('testval'), -1)
            sinon.assert.calledOnce(isArray)
            isArray.reset()
        })
        // Tests use of `Array.prototype.reduce()`
        it('should return the sum of all array values', () => {
            let reduce = sinon.spy(Array.prototype, 'reduce')

            assert.equal(arrayUtil.sumArrayValues([1]), 1)
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(reduce)
            isArray.reset()
            reduce.reset()

            assert.equal(arrayUtil.sumArrayValues([1, 2]), 3)
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(reduce)
            isArray.reset()
            reduce.reset()

            assert.equal(arrayUtil.sumArrayValues([1, 2, 3]), 6)
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(reduce)
            isArray.reset()
            reduce.reset()

            assert.equal(arrayUtil.sumArrayValues([1, 2, 3, 4]), 10)
            sinon.assert.calledOnce(isArray)
            sinon.assert.called(reduce)
            isArray.reset()
            reduce.restore()
        })
    })
})