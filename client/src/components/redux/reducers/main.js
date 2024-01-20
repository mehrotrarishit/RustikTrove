import { getProductsReducers } from "./Productreducers";
// import { getProductsmenReducers } from "./Productmenreducers";
import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducers 
    // getproductsmendata : getProductsmenReducers
});

export default rootreducers;