const express = require('express')

module.exports =  function(app){

    const router = express.Router()
    app.use('/api', router)

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}