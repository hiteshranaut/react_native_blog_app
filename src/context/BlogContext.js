
import createDataContext from './createDataContext';

// const BlogContext = React.createContext();

const blogReducer = (state , action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state , {title: `blogPost ${state.length + 1}`}];
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost'  })
    };
    
};

// export const BlogProvider = ({ children }) => {
//     const [blogPosts , dispatch] = useReducer(blogReducer , []); 

//     // const addBlogPost = () => {
//     //     setBlogPosts([...blogPosts , {title: `blogPost ${blogPosts.length + 1}`} ])
//     // } 
   
//     const addBlogPost = () => {
//         dispatch({ type: 'add_blogpost'  })
//     };
    
//     return <BlogContext.Provider value={{data: blogPosts , addBlogPost: addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// }

export const { Context , Provider } = createDataContext(
    blogReducer , 
    {addBlogPost} , 
    [] 
    );