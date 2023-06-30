const router = require("express").Router()

router.use("/", require('./index.routes'))
router.use("/", require('./drinks.routes'))
router.use("/", require('./random.routes'))
router.use("/", require('./auth.routes'))
router.use("/", require('./user.routes'))
router.use("/", require('./cocktail.routes'))

module.exports = router