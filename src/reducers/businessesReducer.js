import {GET_DATA,SORT,FILTER_PRICE,MORE_INFO} from "../actions/types";

const initialState = {business: null,businesses: [],allPrice:[]};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            let allPrice = [...new Set(action.payload.map(({ price}) => price))];
            return {...state,businesses:action.payload,allPrice};
        case SORT:
            return {...state,businesses:action.payload};
        case FILTER_PRICE:
            return {...state,businesses:action.payload};
        case MORE_INFO:
            return {...state,business:action.payload};
        default:
            return state;
    }

}
