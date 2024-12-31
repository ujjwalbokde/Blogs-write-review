const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 200,
  },
  content: {
    type: String,
    required: true,
  },
  media: {
    type: {
      url: String, // URL or path to the uploaded media
      type: {
        type: String, // e.g., 'image' or 'video'
        enum: ['image', 'video'], // Restrict to these two types
      },
    },
    default: null, // Media is optional
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      user: {
        type: String, // Name or ID of the user who commented
        required: true,
      },
      comment: {
        type: String, // Content of the comment
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
