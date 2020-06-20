import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    dashboard:() => ({summary: {credti: 100, debt: 50}})
})

export default rootReducer