const mongoose = require('mongoose')

const likeButtonSchema = mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const LikeButton = mongoose.model('LikeButton', likeButtonSchema)

module.exports = LikeButton
