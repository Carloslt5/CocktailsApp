const express = require('express');
const router = express.Router();

const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard');
const { profilePage, profileEditPage, handlerProfileEdit, userPage, userDetailsPage, userDelete, userRole } = require('../controllers/user.controllers')


// User profile (render)
router.get("/", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), profilePage)

//User profile edit (render)
router.get("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), profileEditPage)

//User profile edit(handler)
router.post("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), uploaderMiddleware.single('profileImg'), handlerProfileEdit)

//Users list
router.get('/users', isLoggedIn, checkRoles('ADMIN'), userPage)

//Users details
router.get("/:id", isLoggedIn, checkRoles('ADMIN'), userDetailsPage)

//User profile delete (handler)
router.post("/:id/delete", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), userDelete)

//Change ROLE
router.post('/:id/role', isLoggedIn, checkRoles('ADMIN'), userRole)


module.exports = router;

