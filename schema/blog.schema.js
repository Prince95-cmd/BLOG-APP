const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    content: {
        type: String,
        required: [true, 'content is required']
    },
    author :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'author is required']
    }
}); 

const blogModel =  mongoose.model('blog', blogSchema);

module.exports = blogModel;