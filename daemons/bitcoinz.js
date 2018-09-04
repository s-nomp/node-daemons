const Zcash = require('./zcash')

class BitcoinZ extends Zcash {
    constructor () {
        super()

        this.name = 'bitcoinz'
        this.symbol = 'btcz'
    }
}

module.exports = BitcoinZ
