import axios from 'axios';
import { ServiceURL } from '../../global/services/Conf';

import {

    GET_NEWS_FEED_ATTEMPING,
    GET_NEWS_FEED_FAILED,
    GET_NEWS_FEED_SUCCESS

} from './Types';

let today = new Date()
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0');
let year = today.getFullYear();
let date = year + "-" + month + "-" + day

export const getNewFeed = (query) => {

    return async (dispatch) => {
        dispatch({
            type: GET_NEWS_FEED_ATTEMPING
        });

        const url = ServiceURL.getNewsFeed(date, query)
        console.log(url);
        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

        const { data, status } = await axios.get(url, { headers: headers })
        if (data.status == 'ok') {
            dispatch({ type: GET_NEWS_FEED_SUCCESS, payload: data.articles })

        } else
            if (status == 'error') {
                dispatch({ type: GET_NEWS_FEED_FAILED })

            }

    }

}

