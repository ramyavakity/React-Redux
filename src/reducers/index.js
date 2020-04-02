import { combineReducers } from 'redux';
import sample from './sampleReducer';
import settings from '../../src/components/connect-navmiddleware/reducers/settings'

const rootReducer = combineReducers({
    settings,sample
})

export default rootReducer;