var casual = require('casual')

// index.js
module.exports = () => {
    const data = { posts: [] }
    // Create 1000 users
    for (let i = 0; i < 25; i++) {
        data.posts.push({ id: i, title: casual.title, content: casual.sentences(25), author: casual.name })
    }
    return data
}