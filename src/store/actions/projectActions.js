//import firebase from "../../config/fbConfig";

export const createProject = (project) => {
    
    return (dispatch, getState,{ getFirebace, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      const isAdmin = getState().firebase.profile.admin;
      console.log("is he admin",isAdmin);
      if(isAdmin){
        firestore.collection('projects').add({
            title: project.title,
            sub_title: project.sub_title,
            content: project.content,
            date: new Date(),
            imgFileName: project.title.replace(" ", "")+project.sub_title.replace(" ", ""),
            languages: project.languages,
            libraries: project.libraries,
            githubURL: project.githubURL,
            webURL: project.webURL
        }).then(()=>{
          dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err)=>{
          dispatch({ type: 'CREATE_PROJECT_ERROP)', err })
        });
      }
    }
    
};
export const editProject = (project) => {
    
  return (dispatch, getState,{ getFirebace, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      title: project.title,
      sub_title: project.sub_title,
      content: project.content,
      date: new Date(),
      imgFileName: project.title.replace(" ", "")+project.sub_title.replace(" ", ""),
      languages: project.languages,
      libraries: project.libraries
    }).then(()=>{
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err)=>{
      dispatch({ type: 'CREATE_PROJECT_ERROP)', err })
    });
    
  }
};

