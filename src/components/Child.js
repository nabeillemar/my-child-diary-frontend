import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getChildren, deleteChildren } from '../actions/children'
//import { getChildren, deleteChildren } from '../actions/children'
import ChildContainer from '../containers/ChildContainer';
import ChildForm from '../containers/ChildForm';


//Container that fetches all the children data and is able to delete them all as well 

class Child extends Component {
    componentDidMount(){
      //debugger
        console.log("calls on GetChildren, componentDIDMount")
        this.props.getChildren() 
    }

    handleOnClick = (event) => {
      this.props.deleteChildren(event.target.id)
    }

  render() {
      console.log("render calling on ChildContainer")
      //debugger
      //these are the props that gets passed to the ChildContainer 
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
          {/*<ul>{this.props.loading ? <h3>Loading...</h3> : children}</ul>*/}

      </div>
    )
  }
}


const mapStateToProps = state => {
    console.log("maptoStateProp in Child")
    //debugger
    return{
      children: state.childReducer.children, //should this be children.data, data does come across but it should be state.childReducer.children.data
      loading: state.childReducer.loading
    }
  }

export default connect(mapStateToProps, { getChildren, deleteChildren })(Child); //getChildren is MapDispatchtoProps 

// mapDispatchtoProps is the second callback function passed to connect
// this allows us to call getChildren and get the data and state THEN we use  to use MapStateToProps to make the current state into props for the current component to use 
// mapdispatchtoProps (get Children) is calling on our dispatch which is inside of our action creator 


//export default connect(mapStateToProps, { getChildren, deleteChildren })(Child);



/*

FLOW of page

Child Link gets called

- MapStateToProps is called but does not have any data, both arrays are empty 
- children on line 26 gets called but the poprs are empty as well since there is no data 
- return() is rendered on the DOM
- ComponentDidMount is called to call GetChildren Action Creator 
- Action Creator is called 
- Dispatch sends the action to the reducer and reducer gets called and state gets updated 
- MapStatetoProps now has Array data and get called 
- Children on line 26 gets called and has the data as well now that array has data
- return () is rendered again and now this time Child Container gets called from children on line 26 and updates the DOM with the children buttons 
- Loaded Children reducer is called 
- 




*/