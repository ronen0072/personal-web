const initState = {
    languages:[
    ],
    libraries:[
    ]
}
const projectReducer = (state = initState, action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            console.log('add item', action.list);
            //let item = {id: action.list.length, name:action.item};
            return {
                ...state,
                [action.listName]: [...action.list, action.item] 
            };
        case 'REMOVE_ITEM':
                console.log('action.item', action.item);
            let newList =  (action.list).filter( (item)=>{return(item !== action.item)})
            console.log('newList');
            console.log(newList);
            return {
                ...state,
                [action.listName]: newList
            };
        case 'ADD_ITEM_ERROR':
            console.log('add item error', action.err);
            return state;
        case 'REMOVE_ITEM_ERROR':
            console.log('remove item error', action.err);
            return state;
        default:
                return state;
    }
}
export default projectReducer;