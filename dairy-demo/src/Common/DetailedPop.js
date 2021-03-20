import React, { Component } from "react";
import moment from "moment";
import Header from "./Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { gettodoByid } from "../actions/action";
class Detailed extends Component {
  state = {
    dateCreatedAt: "",
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.gettodoByid(this.props.match.params.id);
  }
  dateCreatedAt(id) {
    const date = moment(id).format("dddd, MMMM Do, YYYY h:mm:ss A");
    return date;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.todoList,
    });
    console.log(this.state.data, "data");
  }
  dateCreatedAt(id) {
    const date = moment(id).format("dddd, MMMM Do, YYYY h:mm:ss A");
    return date;
  }
  stringlength(d) {
    const string = d.substring(0, 25) + "...";
    return string;
  }
  render() {
    console.log(this.props.todoList.data, "to");
    return (
      <div className="">
        <Header />
        <div className="deatield_list_page">
          <ul className="tile_name">
          <li>Created At </li>
            <li>Title </li>
            <li>Priority </li>
            <li>File </li>
            <li>Notes </li>
           
          </ul>
          <ul className="tile_name">
            <li>: </li>
            <li>: </li>
            <li>: </li>
            <li>: </li>
            <li>: </li>
          </ul>
          <ul>
          <li>
              {this.props.todoList.data.createdAt
                ? this.dateCreatedAt(this.props.todoList.data.createdAt)
                : ""}{" "}
            </li>
            <li>
              {this.props.todoList.data.title ? this.props.todoList.data.title : "-"}
            </li>
            <li>
              {this.props.todoList.data.priority === "1"
                ? "High"
                : this.props.todoList.data.priority === "2"
                ? "Medium"
                : this.props.todoList.data.priority === "3"
                ? "Low"
                : "-"}
            </li>
         
            <li><a href={`${this.props.todoList.data.file}`} download>
            {this.props.todoList.data.file?this.props.todoList.data.file:<span style={{fontSize:'13px',color:'grey'}}>{ " "}No data</span>}</a></li>
            <li>{this.props.todoList.data.discription} </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.home.todoList,
  };
};
Detailed.propsTypes = {
  gettodoByid: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  gettodoByid,
})(Detailed);
