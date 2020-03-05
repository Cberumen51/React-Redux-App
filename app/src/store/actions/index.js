import axios from "axios";

export const FETCHING_DOG_START = "FETCHING_DOG_START";
export const FETCHING_DOG_SUCCESS = "FETCHING_DOG_SUCCESS";
export const FETCHING_DOG_FAILURE = "FETCHING_DOG_FAILURE";

export const getDog = () => dispatch => {
    dispatch({type: FETCHING_DOG_START});

    axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            console.log('res', res)
            dispatch({type: FETCHING_DOG_SUCCESS, payload: res.data.message})
        })
        .catch(err => {
            console.log('err', err);
            dispatch({
                tyep: FETCHING_DOG_FAILURE,
                payload: `${err.response.message} with respose code ${err.response.code}`
            });
        });
    };