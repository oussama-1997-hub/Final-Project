const mongoose = require ("mongoose")

const schema=mongoose.Schema

const postSchema = new schema({
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    likes: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  });
module.exports=Post=mongoose.model("posts",postSchema)