import { USER, PASSWORD } from '../actions/sampleActions';

export default function reducer(state = {name:'Ramya'},action) {
    switch (action.type) {
        case USER:
            return Object.assign({},state,{ user: action.payload });
         
        case PASSWORD:
            return Object.assign({}, state, {password: action.payload });
            
         default:
             return state;   

    }
}