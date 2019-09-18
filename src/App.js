import { connect } from "react-redux";
import Counter from "./Counter";

// Map redux state to component properties
// subscribes to all Store updates
// i.e. it returns whenever the store gets updated
function mapStateToProps(state){
  return {
    countValue: state.count
  };
}

// Actions
var increaseAction = {type: "increase"};
var decreaseAction = {type: "decrease"};

// Map actions to props
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  };
}

// the higher order component (HOC)
// passes map functions to Counter component
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// this renders the following:
/*
<Connect>
  <Counter increaseCount={increaseCount}
           decreaseCount={decreaseCount}
           countValue={countValue}/>
</Connect>
*/
export default connectedComponent;
