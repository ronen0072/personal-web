const initState = {
    projects:[],
    projectToDisplay: null,
    projectToEdit: null
}
const projectReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'EDIT_PROJECT':
            console.log('edit project', action.project);
            return state;
        case 'EDIT_PROJECT_ERROR':
            console.log('edit project error', action.err);
            return state;
        case 'POJECT_TO_DISPLAY':
            console.log('project to display', action.project.id);
            return{
                ...state,
                projectToDisplay: action.project
            };
        case 'POJECT_TO_EDIT':
            console.log('project to edit', action.project.id);
            return{
                ...state,
                projectToDisplay: action.project
            };
        default:
            return state;
    }
}
export default projectReducer;