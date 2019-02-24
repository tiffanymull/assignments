import React from 'react'
import BlogPosts from './BlogPosts' //means BlogPosts are nested in BlogList. Need an array somewhere.

const BlogList = () => {
    return (
        <div>
            This is the Blog List.
            <BlogPosts />
        </div>
    )
}

export default BlogList