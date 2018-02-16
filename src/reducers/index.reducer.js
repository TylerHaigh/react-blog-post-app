import { combineReducers } from "redux";

import BlogPostsReducer from './blog-post.reducer'

const rootReducer = combineReducers({
    posts: BlogPostsReducer
});

export default rootReducer;
