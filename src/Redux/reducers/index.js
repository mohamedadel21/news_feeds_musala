import { combineReducers } from 'redux';
import news from './NewsFeedReducer'
import ChangeThemeReducer from './ChangeThemeReducer'
import ChangeLanguageReducer from './ChangeLanguageReducer'

export default combineReducers({
    news,
    theme: ChangeThemeReducer,
    lang: ChangeLanguageReducer
})