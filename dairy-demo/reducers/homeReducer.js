import {
    GET_TODO_LIST,
    ADD_TODO_DETAILS
  } from "../actions/types";
  
  var initialState = {
      
  };
  const Reducer = (state = initialState, action) => {
  
    switch (action.type) {
        case GET_TODO_LIST:
          return {
            ...state,
            todoList: action.payload,
          };
          
        case ADD_TODO_DETAILS:
        return {
          ...state,
         addTodo: action.payload,
        };
       default:
              return state;
      }
  };
  export default Reducer;
  