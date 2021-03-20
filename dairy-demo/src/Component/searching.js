import React, { Component } from "react";
import CardNotes from "../Common/CardNotes";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Tooltip } from "@material-ui/core";
import AddForm from "../Common/AddForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { gettodoList, deleteTodo, searchTodo } from "../actions/action";
import { Link } from "react-router-dom";

class Searching extends Component {
  state = {
    openAdd: false,
    sortType: "",
    dataForfilter: [],
    dataToedit: "",
    editData: "",
    data: "",
    notes_dairy: [],
    searchList: [],
    searchingBegin: false,
  };

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps.newList, "data");
    this.setState({
      searchList: nextProps.newList,
    });
  };

  search = (e) => {
    this.props.searchTodo(e.target.value);
    this.setState({
      searchingBegin: true,
    });
  };

  render() {
    const { searchList, searchingBegin } = this.state;
    console.log(searchList,'fdfd')
    return (
      <div>
        <Header />
        <div className="Searching-page-conatiner">
          <div className="center-heading">Daily Dairy</div>
          <div className="notes-alignment">
            <div className="action-center-header"></div>
            <div className="sorting-filtering-action">
              <div className="sorting">
                <div className="searhing">
                  <input
                    type="search"
                    placeholder="Search"
                    onChange={this.search.bind(this)}
                  />
                  <button
                    class="button_search"
                    onClick={this.search.bind(this)}
                  >
                    <i
                      class="fa fa-search"
                      aria-hidden="true"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="notes-alignment-conatiner">
              {searchingBegin === true
                ? searchList
                  ? searchList.map((data, i) => (
                      <CardNotes
                        key={i}
                        data={data}
                        onEdit={(id) => {
                          this.edit(id);
                        }}
                        onDelete={(id) => {
                          this.Delete(id);
                        }}
                      />
                    ))
                  : "No data"
                : "Search for data"}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.home.todoList,
    newList: state.home.sTodoList,
  };
};
Searching.propsTypes = {
  gettodoList: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  searchTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  gettodoList,
  deleteTodo,
  searchTodo,
})(Searching);
