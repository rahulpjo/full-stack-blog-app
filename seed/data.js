import db from "../db/connection.js";
import Post from "../models/post.js";
import faker from "faker";

const insertData = async () => {
    //resetting the database 
    await db.dropDatabase()

    //creating array of 20 objects
    //using faker to generate fake blog data
    const posts = [...Array(20)].map((item) => {
        return { 
            title:  faker.lorem.sentence(),
            imageURL: faker.image.imageUrl(),
            content:  faker.lorem.paragraph(),
            author:  faker.name.findName()
        }
    })
    await Post.insertMany(posts)
    console.log("created posts!")

    //closes Mongodb database connection
    db.close()
}
    insertData();
