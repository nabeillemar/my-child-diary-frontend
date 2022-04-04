import React from 'react'
import { getChildren } from '../actions/children'
import { connect } from 'react-redux';



function Childrendata(props) {
debugger
  return (
    console.log(props.children)
  )
}


const mapStateToProps = state => {
    //debugger
    console.log("maptoStateProp in Child")
    //debugger
    return{
      children: state.childReducer.children, //should this be children.data, data does come across but it should be state.childReducer.children.data
      loading: state.childReducer.loading
    }
  }


export default connect(mapStateToProps, {getChildren})(Childrendata);