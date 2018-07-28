const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts');

router.get('/', PostsController.posts_get);

module.exports = router;
