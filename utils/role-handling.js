const getUserRole = user => {

    const userRole = {
        isAdmin: user?.role === 'ADMIN',
        isEditor: user?.role === 'EDITOR',
        isBasic: user?.role === 'BASIC'
    }

    return userRole
}

module.exports = { getUserRole }