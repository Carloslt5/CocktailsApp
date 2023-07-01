const express = require('express');
const router = express.Router();

const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedOut } = require('../middlewares/route-guard')
const { signupPage, handlerSignup, loginPage, handlerLogin, handlerLogout } = require('../controllers/auth.controllers')

// signup form (render)
router.get("/signup", signupPage)

// singup form handler
router.post("/signup", uploaderMiddleware.single('profileImg'), handlerSignup)

// login render
router.get("/login", isLoggedOut, loginPage)

// login form (handling)
router.post("/login", handlerLogin)

//logout
router.post('/logout', handlerLogout)

module.exports = router;


