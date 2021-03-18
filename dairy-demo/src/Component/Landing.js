import React, { Component } from "react";
import CardNotes from "../Common/CardNotes";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Button, Tooltip } from "@material-ui/core";
import moment from "moment";
import Swal from "sweetalert";
import AddForm from "../Common/AddForm";
// import ReactQuill from "react-quill";

export default class Landing extends Component {
  state = {
    openAdd: false,
    sortType: "",
    dataToedit: "",
    editData: "",
    id: "",
    title: "",
    notes: "",
    priority: "",
    importantDate: "",
    importantLink: "",
    data: "",
    favrouite: false,
    notes_dairy: [
      {
        id: 1,
        title: "Daily update",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        priority: "high",
        importantDate: "12-01-2021",
        importantLink: "www.google.com",
        CreatedAt: "1619515835",
        favrouite: true,
      },
      {
        id: 2,
        title: "Daily update 2",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        priority: "Medium",
        importantDate: "12-01-2021",
        importantLink: "www.google.com",
        CreatedAt: "1609515814",
        favrouite: false,
      },
      {
        id: 3,
        title: "Daily update 3",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        priority: "low",
        importantDate: "12-01-2021",
        importantLink: "www.google.com",
        CreatedAt: "1619015835",
        favrouite: true,
      },
      {
        id: 4,
        title: "Daily update 4",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic nemo quas, dolore perspiciatis expedita placeat assumenda aliquid cumque itaque amet rem fugiat. Ipsam in tenetur officia vitae nobis qui!",
        priority: "high",
        importantDate: "12-01-2021",
        importantLink: "www.google.com",
        CreatedAt: "1612500835",
        favrouite: false,
      },
    ],
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveData = (e) => {
    e.preventDefault();
    const date = new Date();
    var unixTimestamp = moment(date, "YYYY.MM.DD").unix();
    console.log(unixTimestamp);
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
    console.log(data);
    this.setState({
      notes_dairy: [...this.state.notes_dairy, data],
      openAdd: false,
      sortType: "",
    });
    Swal({
      title: "Added Successfully.!",
      icon: "success",
      text: "",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    });
  };
  edit(id) {
    this.setState({
      openAdd: true,
    });
    console.log(id);
    var d = this.state.notes_dairy.filter((item) => item.id === id);
    const data = {
      id: d.id,
      title: d.title,
      notes: d.notes,
      priority: d.priority,
      importantDate: d.importantDate,
      importantLink: d.importantLink,
    };
    this.setState({
      data: data,
    });
  }
  Delete(id) {
    console.log(id);
    this.setState({
      notes_dairy: this.state.notes_dairy.filter((item) => item.id !== id),
    });
  }
  handleSOrting = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { data } = this.state;
    const { notes_dairy, sortType } = this.state;
    const sortedNotes = sortType
      ? notes_dairy.sort((a, b) => {
          const isReversed = sortType === "ascend" ? 1 : -1;
          return (
            isReversed *
            a.CreatedAt.toString().localeCompare(b.CreatedAt.toString())
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
                      <option value={"priority"}>Priority Wise</option>
                    </select>
                  </div>
                  <div className="filtering">
                    <select
                      onChange={this.handleFilter}
                      value={this.state.filter}
                      name="filter"
                    >
                      <option>Date Filter</option>
                      <option>This Week</option>
                      <option>This Month</option>
                      <option>This Year</option>
                    </select>
                  </div>
                  <div className="searhing">
                    <input type="search" placeholder="Search" />
                    <button class="button_search">
                      <i
                        class="fa fa-search"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="notes-alignment-conatiner">
                  {sortedNotes.map((data, i) => (
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
