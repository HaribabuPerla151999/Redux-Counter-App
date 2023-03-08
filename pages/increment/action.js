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

export const FiveIncBtn=(value)=>async dispatch=>{
    dispatch({
        type:"FIVEINC",
        payload:value
    })


}

export const FiveDecBtn=(value)=>async dispatch=>{
    dispatch({
        type:"FIVEDEC",
        payload:value
    })


}