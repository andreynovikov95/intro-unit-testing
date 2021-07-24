const Ajax = require('./async')

describe('Ajax: echo', () => {
    test('shoud return value async', async () => {
        const result = await Ajax.echo('some data')
        expect(result).toBe('some data')
    })

    test('shoud return value with promise', () => {
        return Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        })
    })

    test('shoud catch error with promise', () => {
        return Ajax.echo('some data').catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })

    test('shoud catch error with promise', async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })
})