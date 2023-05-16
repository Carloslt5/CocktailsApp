const loggedUser = (req, res, next) => {
    console.log('hollaaaaaaaa')
    next()
}


module.exports = { loggedUser }