const fs = require('fs')

class Daemon {
    constructor (coin) {
        if (!fs.existsSync(`./daemons/${coin}.js`)) {
            throw Error('Daemon not found in node-daemons.')
        }

        const coinDaemon = require(`./daemons/${coin}.js`)
        return new coinDaemon()
    }
}

module.exports = Daemon
