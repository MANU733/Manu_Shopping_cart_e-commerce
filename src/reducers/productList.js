import * as actionType from '../action/actionType.js';

const initialState = {
    productList: [],
    addtocartitems: [],
    addedtocart: false,
    idToken:'',
    Signuperrormsg:'',
    Signinerrormsg:'',
    signinidToken:null,
    signedinusername:""


}

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload.productListItems,
                idToken:""
            }

        case actionType.ADD_TO_CART:
            return {
                ...state,
                addtocartitems: [...state.addtocartitems, action.payload],
                addedtocart: true,
                idToken:'idToken'
            }
        case actionType.SIGNUP:
            return {
                ...state,idToken:action.payload
            }
        case actionType.SIGNUPERROR:
            return {
                ...state,Signuperrormsg:action.payload,
                idToken:''
            }
            case actionType.SIGNIN:
                return {
                    ...state,signinidToken:action.payload.idToken,
                    signedinusername:action.payload.email,
                    idToken:""
                }
            case actionType.SIGNINERROR:
                return {
                    ...state,Signinerrormsg:action.payload,
                    idToken:''
                }
                case actionType.LOGOUT:
                return {
                    ...state,signinidToken:null,
                    idToken:''
                }
        default:
            return state;
    }
}

export default productListReducer;