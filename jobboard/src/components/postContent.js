import React from 'react'

const PostContent = (props) => {
    const {post}  = props
    return (
        <div>
            <h1>{post.title}</h1>
            <p>
                {post.content}
            </p>
            <p>{post.author}</p>
        </div>
    )
}

export default PostContent
