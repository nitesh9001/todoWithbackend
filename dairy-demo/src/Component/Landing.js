import React, { Component } from "react";
import CardNotes from "../Common/CardNotes";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Tooltip } from "@material-ui/core";
import AddForm from "../Common/AddForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {gettodoList,deleteTodo,searchTodo} from '../actions/action';
import { Link } from "react-router-dom";


class Landing extends Component {
  state = {
    openAdd: false,
    sortType: "",
    dataForfilter:[],
    dataToedit: "",
    editData: "",
    data: "",
    notes_dairy: [],
    searchList:[],
    searchingBegin:false
  };

  componentDidMount(){
   this.props.gettodoList();
  }

  componentWillReceiveProps=(nextProps)=>{
    console.log(nextProps,'nexprops')
    this.setState({
      notes_dairy:nextProps.todoList.data,
      dataForfilter:nextProps.todoList.data,
    });
    if(nextProps.newList){
      console.log(nextProps.newList,'data')
      this.setState({
        searchList:nextProps.newList.data,
      });
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
 
  Delete(id) {
    console.log(id);
    this.props.deleteTodo(id)
  };

  handleSOrting = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFilter=(e)=>{
    console.log(e.target.value)
    const data=this.state.dataForfilter.filter(d=>d.priority === e.target.value)
    console.log(data,'new')
    this.setState({
      notes_dairy:data
    })
  };

  search=(e)=>{
    this.props.searchTodo(e.target.value);
    this.setState({
      searchingBegin:true
    });
  };

  render() {
    const { notes_dairy, sortType, searchList } = this.state;
    const sortedNotes = sortType
      ? notes_dairy.sort((a, b) => {
          const isReversed = sortType === "ascend" ? 1 : -1;
          return (
            isReversed *
            a.createdAt.toString().localeCompare(b.createdAt.toString())
          );
        })
      : notes_dairy;
      
    return (
      <div>
        <Header />
        <div className="landing-page-conatiner">
          <div className="center-heading">Daily Dairy</div>
          <div className="notes-alignment">
            <div className="action-center-header">
              <div>
                {this.state.openAdd ? (
                  <Tooltip title="Back" aria-label="add">
                    <button
                      className="btnless"
                      onClick={() => {
                        this.setState({
                          openAdd: false,
                        });
                      }}
                    >
                      <i
                        class="fa fa-arrow-left"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </button>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add Notes" aria-label="add">
                    <button
                      className="btnless"
                      onClick={() => {
                        this.setState({
                          openAdd: true,
                        });
                      }}
                    >
                      <i
                        class="fa fa-plus"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                      ></i>{" "}
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        ADD
                      </span>
                    </button>
                  </Tooltip>
                )}
              </div>
            </div>
            {this.state.openAdd ? (
              <AddForm
                open={this.state.openAdd}
                close={() => {
                  this.setState({
                    openAdd: false,
                  });
                }}
              />
            ) : (
              <>
                <div className="sorting-filtering-action">
                  <div className="sorting">
                    <select
                      onChange={this.handleSOrting}
                      value={this.state.sortType}
                      name="sortType"
                    >
                      <option value={""}>Sort Notes</option>
                      <option value={"decend"}>Newest First</option>
                      <option value={"ascend"}>Oldest First</option>
                    </select>
                  </div>
                  <div className="filtering">
                    <select
                      onChange={this.handleFilter}
                      value={this.state.filter}
                      name="filter"
                    >
                      <option>Priority Filter</option>
                      <option value={1}>High</option>
                      <option value={2}>Medium</option>
                      <option value={3}>Low</option>
                    </select>
                  </div>
                  <Link to="/searching..">
                  <div className="searhing">
                  
                    <input type="search" placeholder="Search" onChange={this.search.bind(this)}/>
                    <button class="button_search" onClick={this.search.bind(this)}>
                      <i
                        class="fa fa-search"
                        aria-hidden="true"
                         
                        style={{ cursor: "pointer" }}
                      ></i>
                    </button>
                  </div>
                  </Link>
                </div>
                <div className="notes-alignment-conatiner">
                {
                sortedNotes.map((data, i) => (
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
                  ))}
                </div>
              </>
            )}
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
    newList:state.home.sTodoList
  };
};
Landing.propsTypes = {
  gettodoList: PropTypes.func.isRequired,
  deleteTodo:PropTypes.func.isRequired,
  searchTodo:PropTypes.func.isRequired
};

export default connect(mapStateToProps, {
  gettodoList,deleteTodo,searchTodo
})(Landing);



