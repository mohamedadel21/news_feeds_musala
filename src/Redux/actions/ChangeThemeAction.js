import {
    CHANGE_THEME_ATTEMPING,
    CHANGE_THEME_SUCCESS
} from './Types';

import Dark from '../../Utils/Themes/Dark'
import Light from '../../Utils/Themes/Light'


export const ChangeTheme = (type) => {

    return async (dispatch) => {
        dispatch({
            type: CHANGE_THEME_ATTEMPING
        });
        let theme = {}
        if (type == 'light') {
            theme = Light
        } else if (type == 'dark') {
            theme = Dark
        }
        dispatch({ type: CHANGE_THEME_SUCCESS, payload: theme })

    }

}

