import React from 'react'

const BlogPost = (props) => {
    
    
    return (
        <div>
            <h1>Title: {props.ti}</h1>
            <h2>Subtitle: {props.subt}</h2>
            <p>Posted by {props.aut} on {props.da}</p>
            {/* These will be the blog posts. I think they need to be an array?
            Or does the list above it need to be an array? */}
        </div>
    )
}

export default BlogPost