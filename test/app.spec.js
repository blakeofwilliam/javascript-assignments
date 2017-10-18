import * as assert from 'assert'
import App from '../src/app'

let app;
beforeEach(() => {
    app = new App()
})

describe('App', () => {
    describe('#constructor()', () => {
        it('should set isInitialized', () => {
            assert.equal(app.name, 'Javascript')
        })
    })
})