const express = require('express');
const { createBlog, getAllBlogs, getOneBlog, updatOneBlog, deleteBlog} = require('../controller/blog.controller');
const router = express.Router();


router.post('/create', createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getOneBlog);
router.put('/:id', updatOneBlog);
router.delete('/:id', deleteBlog);

module.exports = router;