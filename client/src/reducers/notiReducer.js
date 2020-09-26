export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_NOTIFICATION':
            
            return[...state,action.payload.item];

        default:
            return state;
    }
}