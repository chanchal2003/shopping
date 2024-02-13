const reducer = (state,action) =>{
    if(action.type==="REMOVE_ITEM"){
        return{
            ...state,
            item : state.item.filter((curElement)=>{
                return curElement.id!==action.payload
            })
        }
    }
    return state;
}

export default reducer;