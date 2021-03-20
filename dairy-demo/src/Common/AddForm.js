import React, { Component } from "react";
import moment from "moment";
import Swal from "sweetalert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTodo } from "../actions/action";

class AddForm extends Component {
  state = {
    dateCreatedAt: "",
    file:''
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChangeFile=(e)=>{
    console.log(e.target.files[0]);
    const reader = new FileReader();

    this.setState({ [e.target.name]: e.target.files[0] });
  }
  saveData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("title", this.state.title);
    formData.append("discription", this.state.notes);
    formData.append("priority", this.state.priority);
    console.log(formData);
    this.props.addTodo(formData);
    Swal({
      title: "Added Successfully.!",
      icon: "success",
      text: "",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    });
  };

  render() {
    return (
      <>
        {this.props.open ? (
          <>
            <div
              className="notes-alignment-conatiner"
              style={{
                display: "block",
                margin: "60px",
                paddingBottom: "40px",
              }}
            >
              <form method="post" encType="multipart/form-data">
                <div className="input-box-style">
                  <div className="lable">
                    <label>Title :</label>
                  </div>{" "}
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </div>

                 <div className="input-box-style">
                  <div className="lable">
                    <label>Priority :</label>
                  </div>{" "}
                  <select
                    onChange={this.handleChange}
                    value={this.state.priority}
                    name="priority"
                  >
                    <option value={""}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>
                <div className="input-box-style">
                  <div className="lable">
                    <label>Description :</label>
                  </div>{" "}
                  <textarea
                    rows={3}
                    cols={40}
                    className="form-control"
                    onChange={this.handleChange}
                    name="notes"
                    placeholder="Notes"
                    value={this.state.notes}
                  />
                </div>
                <div className="input-box-style">
                  <div className="lable">
                    <label>Important Files : </label>
                  </div>{" "}
                  <input
                    type="file"
                    placeholder="Select file"
                    name="file"
                    multiple
                    onChange={this.handleChangeFile}
                  />
                </div>
                <button className="tn_save" onClick={this.saveData.bind(this)}>
                  <i className="fa fa-save" style={{ margin: "0 5px" }}></i>
                  Save
                </button>
                <button className="tn_cancel" onClick={this.props.close}>
                  Cancel
                </button>
              </form>
            </div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // todoAdd: state.home.todoList,
  };
};
AddForm.propsTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  addTodo,
})(AddForm);
