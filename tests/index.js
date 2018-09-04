const chai = require('chai')
const { assert, expect } = chai

const Daemon = require('../index')

it('parent (zcash) daemon was returned', () => {
    const zcash = new Daemon('zcash')

    expect(zcash).to.be.a('object')
    expect(zcash).to.have.property('name').equal('zcash')
    expect(zcash).to.have.property('symbol').equal('zec')
})

it('child (bitcoinz) daemon was returned', () => {
    const zcash = new Daemon('bitcoinz')

    expect(zcash).to.be.a('object')
    expect(zcash).to.have.property('name').equal('bitcoinz')
    expect(zcash).to.have.property('symbol').equal('btcz')
})

it('is online', () => {
    const zcash = new Daemon('zcash')
    const bitcoinz = new Daemon('bitcoinz')

    expect(zcash.isOnline()).to.equal(false)
    expect(bitcoinz.isOnline()).to.equal(false)
})
