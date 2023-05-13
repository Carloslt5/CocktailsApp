const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false,
      minlength: 3
    },
    lastName: {
      type: String,
      trim: true,
      required: false,
      minlength: 3
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['ADMIN', 'EDITOR', 'BASIC'],
      default: 'BASIC',
    },
    profileImg: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    favorites: [Object],
    creations: [{
      type: Schema.Types.ObjectId,
      ref: 'MyCocktail'
    }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
