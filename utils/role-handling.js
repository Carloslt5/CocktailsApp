const getUserRole = user => {

    const userRole = {
        isAdmin: user?.role === 'ADMIN',
        isEditor: user?.role === 'EDITOR',
        // isOwner: user?._id === user.id
    }

    return userRole
}

module.exports = { getUserRole }