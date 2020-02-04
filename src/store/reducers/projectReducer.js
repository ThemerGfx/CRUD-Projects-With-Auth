const initState = {
  projects: [
    { id: "1",
      title: "help me", 
      content: "blah blah blah"
    }
  ]
}

const projectReducer = (state = initState, action) => {
  if (action.type === "CREATE_PROJECT_SUCCESS"){
     return Object.assign( {}, state, {
         projects: [
             ...state.projects,
             {
                title: action.title,
                content: action.content
             }
         ]
         
     })
}
if (action.type === "DELETE_PROJECT_SUCCESS"){
  const liste =  state.projects || []
  return (
      liste.filter( (proj) => proj.id !== action.id )
  ); 
} 
if (action.type === "UPDATE_PROJECT_SUCCESS"){
  return Object.assign({}, state, {
      projects: [
          ...state.projects,
          {
            id: new Date(),
            title: action.title,
            content: action.content
          }
      ]
  })
}  
return state
}

export default projectReducer;