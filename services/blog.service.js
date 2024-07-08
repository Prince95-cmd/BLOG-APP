const blogModel = require('../schema/blog.schema');

class BlogService {

    async createBlog (blogInfo){
        try{
            const newBlog = new blogModel(blogInfo);
            const savedBlog  = await newBlog.save();
            return savedBlog;
        }catch(err){
            throw new Error(`Error creating blog: ${err.message}`);
        }
    }

    async findAllBlogs(){
        try{
            const allBlogs = await blogModel.find().populate('author');
            return allBlogs;
        }catch(err){
            throw new Error(`Error finding all blogs: ${err.message}`);
        }
    }

    async findOneBlog (id){
        try{
            const foundBlog = await blogModel.findOne({_id: id});
            return foundBlog;
        }catch(err){
            throw new Error(`Error finding blog with id: ${id}: ${err.message}`)
        }  
    }

    async updateOneBlog (id, blogInfo){
        try{
            const updated = await blogModel.findOneAndUpdate({_id: id}, blogInfo, {new: true});
            return updated;
        }catch(err){
            throw new Error(`Error updating blog with id: ${id}: ${err.message}`);
        }
    }

    async deleteOneBlog (id){
        try{
            const deleted = await blogModel.findOneAndDelete({_id: id});
            return deleted;
        }catch(err){
            throw new Error(`Error deleting blog with id: ${id}: ${err.message}`);
        } 
    }
};

const blogInstance = new BlogService();

module.exports = blogInstance;