
export const addItem = (project) => {
    
    return (dispatch, getState) => {
      // make async call to database
     dispatch({ type: 'ADD_ITEM', project });  
    }
};
