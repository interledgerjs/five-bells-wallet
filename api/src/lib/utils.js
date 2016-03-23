"use strict"

const _ = require('lodash')
const WebFinger = require('webfinger.js')

const Config = require('./config')
const Ledger = require('./ledger')

// TODO implement caching
module.exports = class Utils {
  static constitute () { return [ Config, Ledger ] }
  constructor (config, ledger) {
    this.config = config.data
    this.ledger = ledger
    this.ledgerUri = this.config.getIn(['ledger', 'uri'])
    this.ledgerUriPublic = this.config.getIn(['ledger', 'public_uri'])
  }

  isAccountUri (destination) {
    return destination.indexOf('http://') > -1 || destination.indexOf('https://') > -1
  }

  getAccountType (accountUri) {
    return this.isForeignAccountUri(accountUri) ? 'foreign' : 'local'
  }

  isForeignAccountUri (accountUri) {
    return accountUri.indexOf(this.ledgerUriPublic) === -1
  }

  isWebfinger (destination) {
    // TODO better email style checking
    return destination.search('@') > -1
  }

  * parseDestination (options) {
    let self = this

    let destination = options.destination
    let retrieveLedgerInfo = options.retrieveLedgerInfo

    // Ledger account URI
    if (self.isAccountUri(destination) && self.isForeignAccountUri(destination)) {
      // TODO should also parse the ledger info here
      // TODO should also retrieve ledger info here
      return {
        type: self.getAccountType(destination),
        accountUri: destination
      }
    }

    // Webfinger
    else if (self.isWebfinger(destination)) {
      var webfinger = new WebFinger({
        webfist_fallback: true,
        tls_only: true,
        uri_fallback: false,
        request_timeout: 10000
      });

      let data

      try {
        data = yield new Promise(function(resolve, reject){
          webfinger.lookup(destination,
            function(err, res){
              if (err) {
                return reject(err)
              }

              resolve(res.object)
            }
          )
        })
      } catch(e) {
        // TODO handle
      }

      let accountUri = _.filter(data.links, {rel: 'http://webfinger.net/rel/ledgerAccount'})[0].href
      let ledgerUri = _.filter(data.links, {rel: 'http://webfinger.net/rel/ledgerUri'})[0].href

      let parsedDestination = {
        type: self.getAccountType(accountUri),
        accountUri: accountUri,
        ledgerUri: ledgerUri
      }

      if (retrieveLedgerInfo) {
        try {
          parsedDestination.ledgerInfo = yield self.ledger.getInfo(parsedDestination.ledgerUri)
        } catch(e) {
          // TODO handle
        }

        parsedDestination.ledgerInfo = parsedDestination.ledgerInfo.body
      }

      return parsedDestination
    }

    else {
      let accountUri = self.isAccountUri(destination)
        ? destination
        : self.ledgerUriPublic + '/accounts/' + destination

      // Local account
      let parsedDestination = {
        type: self.getAccountType(accountUri),
        accountUri: accountUri,
        ledgerUri: self.ledgerUriPublic
      }

      // TODO api should already know the current ledgerInfo at this point
      if (retrieveLedgerInfo) {
        try {
          parsedDestination.ledgerInfo = yield self.ledger.getInfo(parsedDestination.ledgerUri)
        } catch(e) {
          // TODO handle
        }

        parsedDestination.ledgerInfo = parsedDestination.ledgerInfo.body
      }

      return parsedDestination
    }
  }
}
