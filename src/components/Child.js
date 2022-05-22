import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getChildren, deleteChildren } from '../actions/children'

import ChildContainer from '../containers/ChildContainer';
import ChildForm from '../containers/ChildForm';




class Child extends Component {
    componentDidMount(){

        console.log("calls on GetChildren, componentDIDMount")
        this.props.getChildren() 
    }

    handleOnClick = (event) => {
      this.props.deleteChildren(event.target.id)
    }

  render() {
      console.log("render calling on ChildContainer")
      const children = this.props.children.map((child, i) => { return < ChildContainer 
        key={i}
        child_name={child.attributes.child_name} 
        age={child.attributes.age} 
        allergies={child.attributes.allergies} 
        guardian_name={child.attributes.guardian_name} 
        home_address={child.attributes.home_address} 
        phone_number={child.attributes.phone_number}
        id={child.id}
        handleClick={this.handleOnClick}/>
      })


    return (
      <div>
        {console.log("return is being called")}
        <h3>Add Child Below</h3>
        {console.log("internal HTML")}
        <ChildForm/> {console.log("ChildForm")}
        <br></br>
        <h3>Children List</h3>{console.log("Children list")}
          {children}{console.log("Children list actual")}

      </div>
    )
  }
}


const mapStateToProps = state => {
    console.log("maptoStateProp in Child")

    return{
      children: state.childReducer.children, 
      loading: state.childReducer.loading
    }
  }

export default connect(mapStateToProps, { getChildren, deleteChildren })(Child); 

