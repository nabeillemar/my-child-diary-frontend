import React from 'react'
import { getChildren } from '../actions/children'
import { connect } from 'react-redux';



function Children(props) {
console.log(props.children)
debugger


  return (
    <div>children data</div>
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


export default connect(mapStateToProps, {getChildren})(Children);