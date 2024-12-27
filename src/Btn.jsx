import {  useDispatch } from "react-redux";

import {addCar, incrementNum, decrementNum,resetNum, incrementNumFive, decrementNumFive} from "./redux/reducers/car"
 
const Btn = () => {

    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() =>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={() =>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={() =>{
                dispatch(resetNum())
            }}>reset</button>
            <button onClick={() =>{
                dispatch(incrementNumFive())
            }}>+5</button>
            <button onClick={() =>{
                dispatch(decrementNumFive())
            }}>-5</button>
            
        </div>
    );
}

export default Btn;
