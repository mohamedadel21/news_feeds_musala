import {
    CHANGE_LANGUAGE_SUCCESS,
    CHANGE_LANGUAGE_ATTEMPING
} from './Types';

import en from '../../Utils/translations/en'
import fr from '../../Utils/translations/fr'


export const ChangeLanguage = (language) => {

    return async (dispatch) => {
        dispatch({
            type: CHANGE_LANGUAGE_ATTEMPING
        });
        let lang = {}
        if (language == 'en') {
            lang = en
        } else if (language == 'fr') {
            lang = fr
        }
        dispatch({ type: CHANGE_LANGUAGE_SUCCESS, payload: lang })

    }

}

