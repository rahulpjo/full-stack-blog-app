import mongoose from "mongoose"

const Schema = mongoose.Schema

//blueprint for what our blog posts look like in our database using mongoose's Schema
const Post = new Schema (
    {
        title: { type: String, required: true },
        imageURL: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String, required: true }
    }, 
        {timestamps: true},
)
export default mongoose.model("posts", Post)