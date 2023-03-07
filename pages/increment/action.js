export const IncBtn=()=>async dispatch=>{
    dispatch({
        type:"INCREMENT"
    })
}
export const ResBtn =()=>async dispatch=>{
    dispatch({
        type:"RESET"
    })
}
export const DecBtn=()=>async dispatch=>{
    dispatch({
        type:"DECREMENT"
    })
}