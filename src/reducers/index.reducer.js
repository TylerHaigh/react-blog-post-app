import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';

import BlogPostsReducer from './blog-post.reducer'

const rootReducer = combineReducers({
    posts: BlogPostsReducer,
    form: formReducer
});

export default rootReducer;
