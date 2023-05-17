const getUserRole = user => {

    const userRole = {
        isAdmin: user?.role === 'ADMIN',
        isEditor: user?.role === 'EDITOR',
    }

    return userRole
}

module.exports = { getUserRole }