import axios from 'axios';
import Constant from '../Constant';
import {
      GET_TODO_LIST,
      ADD_TODO_DETAILS,
      DELETE_TODO_BY_ID
} from "./types";
import Swal from 'sweetalert2';



// // GET PACKAGE
// export const getPackage = (data) => (dispatch) => {
// 	axios
// 		.post(Constant.getAPI() + '/package/get', data, config)
// 		.then((res) => {
// 			dispatch({
// 				type: SET_PACKAGE,
// 				payload: res.data.data,
// 			});
// 		})
// 		.catch((err) => console.log(err));
// };

// // addBooking
// export const addBooking = (data) => (dispatch) => {
// 	axios
// 		.post(Constant.getAPI() + '/post/book/add', data, config)
// 		.then((res) => {
// 			window.location.href = `#/auction-payment/${data.PostId}`;
// 		})
// 		.catch((err) => console.log(err));
// };
