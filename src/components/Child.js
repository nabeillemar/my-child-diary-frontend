import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getChildren, deleteChildren } from '../actions/children'
import ChildContainer from '../containers/ChildContainer';
import ChildForm from '../containers/ChildForm';



class Child extends Component {
    componentDidMount(){
        console.log("calls on GetChildren")
        this.props.getChildren()
    }

    handleOnClick = (event) => {
      this.props.deleteChildren(event.target.id)
    }


  render() {
      //debugger
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


    //debugger
    console.log("return in Child.js")
    return (
      <div>
        <h3>Add Child Below</h3>
        <ChildForm/>
        <br></br>
        <h3>Children List</h3>
          {children}
          {/*<ul>{this.props.loading ? <h3>Loading...</h3> : children}</ul>*/}

      </div>
    )
  }
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

export default connect(mapStateToProps, { getChildren, deleteChildren })(Child);
