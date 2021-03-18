import React, { Component } from 'react'
import moment from "moment";
import Swal from "sweetalert";

export default class AddForm extends Component {
    state={
        dateCreatedAt:''
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
      saveData = (e) => {
        e.preventDefault();
        const date= new Date()
        var unixTimestamp = moment(date, "YYYY.MM.DD").unix();
        console.log(unixTimestamp)
        const data = {
          id: this.state.id,
          title: this.state.title,
          notes: this.state.notes,
          priority: this.state.priority,
          importantDate: this.state.importantDate,
          importantLink: this.state.importantLink,
          favrouite: false,
          CreatedAt: unixTimestamp,
        };
        console.log(data)
        // this.setState({
        //   notes_dairy: [...this.state.notes_dairy, data],
        //   openAdd: false,
        //   sortType:''
        // });
        Swal({
          title: "Added Successfully.!",
          icon: 'success',
          text: "",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok"
        })
       
      };
   
    
    render() {
        return (<>
        {this.props.open ?  <>
                <div
                  className="notes-alignment-conatiner"
                  style={{ display: "block", margin: "60px" ,paddingBottom:'40px' }}
                >
                  {/* <div className="input-box-style">
                    <div className="lable">
                      <label>ID :</label>
                    </div>{" "}
                    <input
                      type="number"
                      placeholder="ID"
                      name="id"
                      value={this.state.id}
                      onChange={this.handleChange}
                    />
                  </div> */}
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
                      <label>Important Date :</label>
                    </div>{" "}
                    <input
                      type="date"
                      placeholder="Important Date"
                      name="importantDate"
                      value={this.state.importantDate}
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
                      <option value={"Urgent"}>Urgent</option>
                      <option value={"High"}>High</option>

                      <option value={"Medium"}>Medium</option>

                      <option value={"Low"}>Low</option>
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
                      <label>Important Date :</label>
                    </div>{" "}
                    <input
                      type="file"
                      placeholder="Select file"
                      name="Selectedfile"
                      value={this.state.selectedFile}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    className="tn_save"
                    onClick={this.saveData.bind(this)}
                  >
                    <i className="fa fa-save" style={{ margin: "0 5px" }}></i>
                    Save
                  </button>
                  <button
                    className="tn_cancel"
                    onClick={this.props.close}
                  >
                    Cancel
                  </button>
                </div>
              </>
            :""}
         </>  
        )
    }
}