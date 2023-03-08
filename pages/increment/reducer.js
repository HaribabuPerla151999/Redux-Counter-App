const count=0;

export default function reducer(state=count,action){
    const {type,payload}=action
    switch(type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        case "RESET":
            return state=0;
        case "FIVEINC":
            return state+payload;
        case "FIVEDEC":
                return state-payload;
        default:
            return state;

    }
}