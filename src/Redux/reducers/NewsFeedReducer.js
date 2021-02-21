import {

    GET_NEWS_FEED_ATTEMPING,
    GET_NEWS_FEED_FAILED,
    GET_NEWS_FEED_SUCCESS

} from '../actions/Types';


const INITIAL_STATE = {
    loading: false, newsfeed: null,

};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_NEWS_FEED_ATTEMPING:
            return { ...state, loading: true }

        case GET_NEWS_FEED_FAILED:
            return { ...state, loading: false }

        case GET_NEWS_FEED_SUCCESS:
            return { ...state, loading: false, newsfeed: action.payload, }



        default: return state;

    }

};
