import {combineReducers}  from 'redux';
import blogsReducer from './BlogsReducer';
import langReducer from './LangRducer';
import loaderReducer from './LoaderReducer';
import themeReducer from './ThemeReducer';
import userReducer from './UsersReducer';

export default combineReducers({
    // Add your reducers here.
    combineLang: langReducer,
    combineTheme: themeReducer,
    combineLoader: loaderReducer,
    combineUsers: userReducer, 
    combineBlogs: blogsReducer
})