import {combineReducers}  from 'redux';
import langReducer from './LangRducer';
import loaderReducer from './LoaderReducer';
import themeReducer from './ThemeReducer';

export default combineReducers({
    // Add your reducers here.
    combineLang: langReducer,
    combineTheme: themeReducer,
    combineLoader: loaderReducer
})