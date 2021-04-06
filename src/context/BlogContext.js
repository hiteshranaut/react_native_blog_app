
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';


// const BlogContext = React.createContext();

const blogReducer = (state , action) => {
    switch(action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'add_blogpost':
            return [...state , { id: Math.floor( Math.random() * 99999 ) , title: action.payload.title , content: action.payload.content}];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload); 
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id 
                    ? action.payload 
                    : blogPost;
                // if(blogPost.id === action.payload.id) {
                //     return action.payload;
                // } else {
                //     return blogPost;
                // }
            });
        default:
            return state;
    }
}


const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogPosts');
        //response.data === [{} . {}]
        dispatch({ type: 'get_blogposts' , payload: response.data });
    }
}

const addBlogPost = (dispatch) => {
    return async (title , content  , callback) => {
       const response = await jsonServer.post('/blogPosts' , {title: title , content: content})
       callback();
    }
    // return (title , content , callback) => {
    //     dispatch({ type: 'add_blogpost' , payload: {title , content}   });
    // callback(); 
    // };
};


const deleteBlogPost = (dispatch) => {

    return async (id) => {
        console.log("deleting here")
        await jsonServer.delete(`/blogPosts/${id}`);
        dispatch({type: 'delete_blogpost' , payload: id});
    }
}

const editBlogPost = (dispatch) => {
    return async (id , title , content , callback) => {
        await jsonServer.put(`/blogPosts/${id}` , {
            title , content
        })
        dispatch({type: 'edit_blogpost' , payload: {id: id, title: title , content: content} } )
        callback();
    }
}

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
    {addBlogPost , deleteBlogPost , editBlogPost , getBlogPosts } , 
    [] 
    );