import axios from 'axios';
import { GET_DATA,SORT,FILTER_PRICE,MORE_INFO} from './types';
const API_KEY = "Z79DGoLmWXMM1BW7BicJFKBGrhesVFiuc_X3awThCXwqhrCZvQ5w5D2tLb2q5qWX7fd-GwgxEl9fVp1WC8Rcr_ld9qEy7k3Oj153Fi5syXRufmWV70KEOVzWibHYXnYx"
const URL = 'https://api.yelp.com/v3/businesses';
export const GetData = (name,location) => async (dispatch) => {
    try {
        const {data} =  await axios.get(`${'https://cors-anywhere.herokuapp.com/'}${URL}/search`, {
            params: {
                location, name,
            },
            headers: {
                'Authorization':`Bearer ${API_KEY}`,
            }
        });
        dispatch({type: GET_DATA, payload: data.businesses})
        return data.businesses;
    } catch (err) {
        console.log(err);
    }
};
export const sort = (businesses) => async (dispatch) => {
    try {
        businesses = businesses.sort((a, b) => a.review_count - b.review_count);
        dispatch({type: SORT, payload: businesses})
    } catch (err) {
        console.log(err);
    }
};
export const filterPrice = (price,businesses) => async (dispatch) => {
    try {
        if(price === ""){
            businesses = await businesses.filter(bus=> !bus.price || bus.price === "");
        }else {
            businesses = await businesses.filter(bus=> bus.price === price);
        }
        dispatch({type: FILTER_PRICE, payload: businesses})
    } catch (err) {
        console.log(err);
    }
};
export const getBusinessesData = (id) => async (dispatch) => {
    try {
        const {data} =  await axios.get(`${'https://cors-anywhere.herokuapp.com/'}${URL}/${id}`, {
            headers: {
                'Authorization':`Bearer ${API_KEY}`,
            }
        });
        console.log(data);
        dispatch({type: MORE_INFO, payload: data})
    } catch (err) {
        console.log(err);
    }
};

