import {onIncButtonActionCreator, onResetButtonActionCreator} from "../redux/CounterReducer";
import {connect} from "react-redux";
import Counter from "./Counter";

let mapStateToProps =(state)=>{
    return{
        counterData:state.counter
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        onIncButton:()=>{dispatch(onIncButtonActionCreator())},
        onResetButton:()=>{dispatch(onResetButtonActionCreator())}
    }
}
const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter)
export default CounterContainer

