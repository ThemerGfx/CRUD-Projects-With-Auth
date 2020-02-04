import 'firebase/firestore'
import firebase from 'firebase/app'


const createProject = (title, content) => { 
  
  return (dispatch) => { 

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        console.log(firebaseUser.uid)
        firebase.firestore().collection("users").doc(firebaseUser.uid).get().then( doc => {
          console.log(doc.data())
          const { firstName, lastName, initials } = doc.data()
          const currentUser = {
            uid: firebaseUser.uid,
            firstName,
            lastName,
            initials
          }
         console.log(currentUser)
        firebase.firestore().collection('projects').add({
          title: title,
          content: content,
          authorFirstName: currentUser.firstName, 
          authorLastName: currentUser.lastName, 
          authorId: currentUser.uid,
          initials: currentUser.initials,
          createdAt: new Date()
        })
        .then(() => {
          dispatch({ 
            type: 'CREATE_PROJECT_SUCCESS',
            title: title,
            content: content,
            authorFirstName: "Thamer",
            authorLastName: "Gouider",
            authorId: 12345,
            createdAt: new Date()
          });
        }) 
        })
      }
    })  
  }
}

const updateProject = (id, title, content) => {
  return (dispatch) => {
    firebase.firestore().collection('projects').doc(id).update({
      title: title, 
      content: content
    })
    .then(() => {
      dispatch({
        type: "UPDATE_PROJECT_SUCCESS",
        id
      })
    })
  }
}

const deleteProject = (id) => {
  return (dispatch) => { 
    if (id !== null){
      //console.log(id)
      firebase.firestore().collection('projects').doc(id).delete()
      .then(() => {
        dispatch({
          type: "DELETE_PROJECT_SUCCESS",
          id
        })    
      })
    }
  }
}

export { createProject, updateProject, deleteProject };