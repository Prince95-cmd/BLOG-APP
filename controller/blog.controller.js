const blogInstance = require('../services/blog.service');
const userInstance = require('../services/user.service');

const createBlog = async (req, res) => {
    try {
        const { userId, ...data } = req.body;
        const user = await userInstance.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        data.user = user._id;
        const createdBlog = await blogInstance.createBlog(data);
        res.status(201).json(createdBlog);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
        
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await blogInstance.findAllBlogs();
        res.json(allBlogs);
    } catch (err) {
        throw new Error(err);
    }
}

const getOneBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const oneBlog = await blogInstance.findOneBlog(id);
        res.json(oneBlog);
    } catch (err) {
        throw new Error(err);
    }
}

const updatOneBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blogInfo = req.body;
        const updatedBlog = await blogInstance.updateOneBlog(id, blogInfo);
        res.json(updatedBlog); 
    } catch (err) {
        throw new Error(err);
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await blogInstance.deleteOneBlog(id);
        res.json(deletedBlog);
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = { createBlog, getAllBlogs, getOneBlog, updatOneBlog, deleteBlog };
