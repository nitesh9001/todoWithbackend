import React, { Component } from 'react'
import{Tooltip} from '@material-ui/core';
import moment from "moment";
import { Link } from "react-router-dom";

export default class CardNotes extends Component {
    state={
        dateCreatedAt:''
    }
    componentDidMount(){
        console.log(this.props)
    }
    dateCreatedAt(id){
    const date=moment(id).format('dddd, MMMM Do, YYYY h:mm:ss A')
     return date
    }
    stringlength(d){
        const string=d.substring(0,25)+'...'
        return string
    }
    render() {
        return (
  <div className="card-main-conatiner">
               <div className="card-header">
                  <div className="card-header-left">
                     {this.props.data.title}
                  </div>
                  <div className="card-header-right">
                  <Tooltip title="Edit" aria-label="add">
                    <button className="btnless" onClick={()=>{
                        this.props.onEdit(this.props.data._id)
                    }}>
                    <i class="fa fa-edit" aria-hidden="true" style={{cursor:'pointer'}}></i>
                    </button>
                    </Tooltip>
                    <Tooltip title="Delete" aria-label="add">
                    <button className="btnless" onClick={()=>this.props.onDelete(this.props.data._id)} >
                    <i class="fa fa-trash-o" aria-hidden="true" style={{cursor:'pointer'}}></i>
                    </button>
                    </Tooltip>
                    <Tooltip title="Favourite" aria-label="add">
                    <button className="btnless">
                    {this.props.data.favrouite?<i class="fa fa-heart" aria-hidden="true" style={{cursor:'pointer',color:'red'}} onClick={()=>{
                        this.props.data.favrouite=!this.props.data.favrouite
                    }}></i>
                    : <i class="fa fa-heart-o" aria-hidden="true" style={{cursor:'pointer'}}></i>
                    }
                    </button>
                    </Tooltip>
                  </div>
               </div>
            <Link to={`/detailed_page/${this.props.data._id}`} style={{textDecoration:'none'}}>
               <div className="Priority">
                  <span style={{color:'black'}}>Priority :</span><span style={{color:'red'}}>{" "}{this.props.data.priority === "1" ?'High':this.props.data.priority==="2"?"Medium":this.props.data.priority==="3"?"Low":'-'} </span>
               </div>
               
               <div className="Priority">
                  <span style={{color:'black'}}>Important Date :</span><span style={{color:'blue'}}>
                  {this.props.data.impDate?
               this.dateCreatedAt(this.props.data.impDate):''}
                  </span>
               </div>
               <div className="content">
               <span style={{color:'black'}}> Notes :</span><span  style={{color:'grey'}}>
                {this.props.data.discription?this.stringlength(this.props.data.discription):''}
                </span>
               </div>
               <div style={{padding:'5px'}} >
               <span style={{color:'black'}}> File :</span>{this.props.data.file?this.props.data.file:<span style={{fontSize:'13px',color:'grey'}}>{ " "}No data</span>}
               </div>
               <div className="content datetime">
               {this.props.data.createdAt?
               this.dateCreatedAt(this.props.data.createdAt):''}
               </div>
            </Link>
            </div>
       
           )
    }
}