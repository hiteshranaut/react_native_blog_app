import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const BlogPosts = [
        { title: "BlogPost #1"} ,
        { title: "BlogPost #2"}
    ]
    return <BlogContext.Provider value={BlogPosts}>
        {children}
    </BlogContext.Provider>
}


export default BlogContext;