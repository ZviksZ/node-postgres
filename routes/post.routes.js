const Router = require('express')
const router = new Router()
const postrController = require('../controllers/post.controller')

router.post('/post', postrController.createPost)
router.get('/post', postrController.getPostsByUser)

module.exports = router
