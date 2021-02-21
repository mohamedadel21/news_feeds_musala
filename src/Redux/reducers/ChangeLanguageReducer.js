import {

    CHANGE_LANGUAGE_ATTEMPING,
    CHANGE_LANGUAGE_SUCCESS

} from '../actions/Types';
import fr from '../../Utils/translations/fr'

const INITIAL_STATE = {
    loading: false, lang: fr,

};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case CHANGE_LANGUAGE_ATTEMPING:
            return { ...state, loading: true }

        case CHANGE_LANGUAGE_SUCCESS:
            return { ...state, loading: false, lang: action.payload, }

        default: return state;

    }

};
