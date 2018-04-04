export default function hobbitReducer(
  state = {
    hobbits: [],
    loading: false,
    selectedHobbit: {}
    },
  action
) {

  switch (action.type) {
    case 'LOAD_RESOURCES':
    console.log('in the hobbits reducer', action.payload)
    return {
      ...state,
      hobbits: action.payload.hobbits,
      loading: !state.loading
    }

    case 'LOADING':
      return {
        ...state,
        loading: !state.loading
      }

    case 'SELECT_HOBBIT':
    console.log('selecting hobbit', action.payload)
    return {
      ...state,
      selectedHobbit: action.payload
    }
    case 'UPDATE_HOBBIT':
    console.log(action.payload)

    return {
      ...state,
      hobbits: [...state.hobbits.filter((hobbit) => {
        return hobbit.id !== action.payload.id
      }), action.payload]
    }
    default:
      return state;
  }
}
