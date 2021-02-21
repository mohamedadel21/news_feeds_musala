import {

    CHANGE_THEME_ATTEMPING,
    CHANGE_THEME_SUCCESS

} from '../actions/Types';

import Dark from '../../Utils/Themes/Dark'

const INITIAL_STATE = {
    loading: false, theme: Dark,

};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case CHANGE_THEME_ATTEMPING:
            return { ...state, loading: true }

        case CHANGE_THEME_SUCCESS:
            return { ...state, loading: false, theme: action.payload, }

        default: return state;

    }

};
