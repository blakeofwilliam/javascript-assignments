import * as assert from 'assert'
import * as sinon from 'sinon'
import Util from '../../util'

// Classes
import ObjectUtil from '../../src/classes/ObjectUtil'
import SolutionObjectUtil from '../../solutions/classes/ObjectUtil'

const args = Util.getArgs()

let objectUtil
beforeEach(() => {
    if (args.c) {
        objectUtil = new SolutionObjectUtil()
    } else {
        objectUtil = new ObjectUtil()
    }
})

describe('ObjectUtil', () => {
    describe('mergeObjects()', () => {
        // Tests use of the `instanceof` operator
        it('should return an empty object if one of the arguments is not an Object', () => {
            assert.deepEqual(objectUtil.mergeObjects(null, {a: true}), {})
            assert.deepEqual(objectUtil.mergeObjects({a: true}, null), {})
        })
        // Tests use of `Object.assign()`
        it('should return an Object containing the properties and values from both Object arguments', () => {
            let assign = sinon.spy(Object, 'assign')

            assert.deepEqual(objectUtil.mergeObjects({}, {a:true}), {a:true})
            sinon.assert.calledOnce(assign)
            assign.reset()

            assert.deepEqual(objectUtil.mergeObjects({a:true}, {b:false}), {a:true, b:false})
            sinon.assert.calledOnce(assign)
            assign.reset()

            assert.deepEqual(objectUtil.mergeObjects({a:true}, {a:false}), {a:false})
            sinon.assert.calledOnce(assign)
            assign.restore()
        })
    })

    describe('getObjectKeys()', () => {
        // Tests use of `instanceof` operator
        it('should return an empty Array if the argument is not an Object', () => {
            assert.deepEqual(objectUtil.getObjectKeys(), [])
            assert.deepEqual(objectUtil.getObjectKeys(false), [])
            assert.deepEqual(objectUtil.getObjectKeys(2), [])
            assert.deepEqual(objectUtil.getObjectKeys('testval'), [])
        })
        // Testus use of `Object.keys()`
        it('should return an array of property names belonging to the Object argument', () => {
            let keys = sinon.spy(Object, 'keys')

            assert.deepEqual(objectUtil.getObjectKeys({}), [])
            sinon.assert.called(keys)
            keys.reset()

            assert.deepEqual(objectUtil.getObjectKeys({a: true, b: false}), ['a', 'b'])
            sinon.assert.called(keys)
            keys.reset()

            assert.deepEqual(objectUtil.getObjectKeys({1:1, 2:2, 3:3}), [1, 2, 3])
            sinon.assert.called(keys)
            keys.restore()
        })
    })

    describe('getObjectValues()', () => {
        // Tests use of `instanceof` operator
        it('should return an empty Array if the argument is not an Object', () => {
            assert.deepEqual(objectUtil.getObjectKeys(), [])
            assert.deepEqual(objectUtil.getObjectKeys(false), [])
            assert.deepEqual(objectUtil.getObjectKeys(2), [])
            assert.deepEqual(objectUtil.getObjectKeys('testval'), [])
        })
        // Testus use of `Object.keys()`
        it('should return an array of property names belonging to the Object argument', () => {
            let values = sinon.spy(Object, 'values')

            assert.deepEqual(objectUtil.getObjectValues({}), [])
            sinon.assert.called(values)
            values.reset()

            assert.deepEqual(objectUtil.getObjectValues({a: true, b: false}), [true, false])
            sinon.assert.called(values)
            values.reset()

            assert.deepEqual(objectUtil.getObjectValues({1:1, 2:2, 3:3}), [1, 2, 3])
            sinon.assert.called(values)
            values.restore()
        })
    })

    describe('objectHasProperty()', () => {
        // Tests use of `instanceof` operator
        it('should return `false` if the first argument is not an Object', () => {
            assert.deepEqual(objectUtil.getObjectKeys(), [])
            assert.deepEqual(objectUtil.getObjectKeys(false, 'test'), [])
            assert.deepEqual(objectUtil.getObjectKeys(2, 'test'), [])
            assert.deepEqual(objectUtil.getObjectKeys('testval', 'test'), [])
        })
        // Testus use of `Object.keys()`
        it('should return an array of property names belonging to the Object argument', () => {
            let hasOwnProperty = sinon.spy(Object.prototype, 'hasOwnProperty')

            assert.deepEqual(objectUtil.objectHasProperty({}, 'test'), false)
            sinon.assert.called(hasOwnProperty)
            hasOwnProperty.reset()

            assert.deepEqual(objectUtil.objectHasProperty({test: 'test'}, 'test'), true)
            sinon.assert.called(hasOwnProperty)
            hasOwnProperty.reset()

            assert.deepEqual(objectUtil.objectHasProperty({1:1, 2:2, 3:3}, 4), false)
            sinon.assert.called(hasOwnProperty)
            hasOwnProperty.restore()
        })
    })
})