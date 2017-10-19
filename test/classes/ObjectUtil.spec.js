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
})