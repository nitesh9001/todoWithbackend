import axios from 'axios';
import Constant from '../Constant';
import {
      GET_TODO_LIST,
      TODO_BY_SEARCH,
      DELETE_TODO_BY_ID, 
	  GET_TODO_BY_ID
} from "./types";

// // GET todo
export const gettodoList = () => (dispatch) => {
	axios.get('http://localhost:3030/todo/get')
	.then((res) => {
            dispatch({
			type: GET_TODO_LIST,
			payload: res,
		});
        console.log(res.data)
	})
	.catch((err) => console.log(err));
};
// GET ToDO by id
export const gettodoByid = (data) => (dispatch) => {
	axios.get(`http://localhost:3030/todo/get/${data}`)
	.then((res) => {
            dispatch({
			type: GET_TODO_BY_ID,
			payload: res,
		});
        console.log(res.data)
	})
	.catch((err) => console.log(err));
};

//delete 
export const deleteTodo = (id) => (dispatch) => {
	axios.delete(`http://localhost:3030/todo/delete/${id}`)
	.then((res) => {
            dispatch({
			type: DELETE_TODO_BY_ID,
			payload: res,
		});
        console.log(res.data)
		window.location.reload()
	})
	.catch((err) => console.log(err));
};
// add todo
export const addTodo = (data) => (dispatch) => {
	axios
		.post('http://localhost:3030/todo/upload', data, {headers: {
			'content-type': 'multipart/form-data'
		}})
		.then((res) => {
			window.location.reload();
		})
		.catch((err) => console.log(err));
};

// search
export const searchTodo = (data) => (dispatch) => {
	axios
		.post('http://localhost:3030/todo/search', {"title":data})
		.then((res) => {
			dispatch({
				type: TODO_BY_SEARCH,
				payload: res.data,
			});
			console.log(res.data,'fg')
		})
		.catch((err) => console.log(err));
};
