import {
    GET_TODO_LIST,
    TODO_BY_SEARCH,
    GET_TODO_BY_ID
  } from "../actions/types";
  
  var initialState = {
      todoList:[]
  };
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_LIST:
          return {
            ...state,
            todoList: action.payload,
          };
          case GET_TODO_BY_ID:
          return {
            ...state,
            todoList: action.payload,
          };
        case TODO_BY_SEARCH:
        return {
          ...state,
          sTodoList: action.payload,
        };
       default:
          return state;
      }
  };
  export default Reducer;
  