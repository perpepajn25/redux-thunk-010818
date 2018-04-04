export default function(state={jobs:[], loading: false}, action){
  console.log("HEY I'M IN JOBS REDUCER", action)
  switch(action.type){
    case "LOAD_RESOURCES":
      console.log('in the jobs reducer', action.payload)
      return {
        ...state,
        jobs: action.payload.jobs
      }
    default:
      return {...state}
  }
}
