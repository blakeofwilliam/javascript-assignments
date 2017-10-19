import * as assert from 'assert'
import Util from '../util'

// Classes
import App from '../src/app'
import SolutionApp from '../solutions/app'

const args = Util.getArgs()

let app
beforeEach(() => {
    if (args.c) {
        app = new SolutionApp()
    } else {
        app = new App()
    }
})

describe('App', () => {
    describe('constructor()', () => {
        it('should set instance `name` property to `Javascript`', () => {
            assert.equal(app.name, 'Javascript')
        })
    })
})

