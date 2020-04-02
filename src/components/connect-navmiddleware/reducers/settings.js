const FETCH_SETTINGS_SUCCESS = 'settings/FETCH_SETTINGS_SUCCESS'

//reducers

const initialState = {}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SETTINGS_SUCCESS:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}
export default reducer

//actions

export function fetchSettingsSuccess(data) {
    return {
        type: FETCH_SETTINGS_SUCCESS,
        payload: data
    }
}

//action functions
export const loadSettings = (prefix = '') => {
    const url = `${prefix}/api/settings`
    return dispatch => {
        fetch(url)
            .then(data => {
                dispatch(fetchSettingsSuccess(data))
            })
            .catch((error) => {
                console.log('error', error);
            })
    }
}