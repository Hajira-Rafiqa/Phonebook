export function allContactsReducer(state = [
    {
        id: 0,
        name: "Sattar Shariff",
        mobile: "987543210",
        email: "shariff@gmail.com",
        isFav: true
    },    
    {
        id: 1,
        name: "Shanaz Begum",
        mobile: "987543210",
        email: "sb@gmail.com",
        isFav: true
    },
    {
        id: 2,
        name: "Ayesha Nafeesa",
        mobile: "987543210",
        email: "ayesha@gmail.com",
        isFav: false
    },
    {
        id: 3,
        name: "Hajira Rafiqa",
        mobile: "987543210",
        email: "rafi@gmail.com",
        isFav: false
    }


],action)
{
    switch(action.type)
    {
        case "NEW_CONTACT": 
            return[...state, {...action.payload, isFav: true, id: (state? state[state.length-1].id+1 :0)}]
        
        case "TOGGLE_FAV": 
            let copyState = [...state]
            state.forEach((element, i) => {
                if(action.payload === element.id){
                    copyState[i].isFav = !state[i].isFav
                }
            })
            return state

        default:
            return state;
    }
}