

const ADD_CAR = 'ADD_CAR';
const INCREMENT_NUM = 'INCREMENT_NUM';
const INCREMENT_NUMFIVE = 'INCREMENT_NUMFIVE';
const DECREMENT_NUM = 'DECREMENT_NUM';
const DECREMENT_NUMFIVE = 'DECREMENT_NUMFIVE';
const RESET_NUM = 'RESET_NUM';

const initState = {
    cars:[
        {
            model: "BMW",
            year: 2017
        },
        {
            model: "Honda",
            year: 2015
        },
        {
            model: "Audi",
            year: 2010
        },
        {
            model: "Toyota",
            year: 2020
        },
        {
            model: "Mercedes",
            year: 2016
        }
    ],
    num:0,
   
};



export default (state = initState, action) => {
    switch (action.type) {

        case ADD_CAR:{
            return {
            ...state,
            cars: [
                action.car,
               
               ...state.cars
            ]
            }
        }
        case INCREMENT_NUM :{
            return{
                ...state,
                num:state.num< 15?(state.num +1):15
            }
        }
        case DECREMENT_NUM :{
            return{
                ...state,
                num:state.num> 0?(state.num -1):0
            }
        }
        case RESET_NUM :{
            return{
                ...state,
                num:0
            }
        }
        case INCREMENT_NUMFIVE :{
            return{
                ...state,
                num:state.num< 11?(state.num +5):15
            }
        }
        case DECREMENT_NUMFIVE :{
            return{
                ...state,
                num:state.num> 4?(state.num -5):0
            }
        }



        default: return state
    }

}



export const addCar = () =>{
    return (dispatch) =>{
        dispatch({type: ADD_CAR, car:{
                model: "Keneniggseg",
                year: 2022 
        }, })
    }
}


export const incrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: INCREMENT_NUM })
    }


}

export const decrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: DECREMENT_NUM })
    }
}
export const resetNum = () =>{
    return (dispatch) =>{
        dispatch({type: RESET_NUM })
    }
}


export const incrementNumFive = () =>{
    return (dispatch) =>{
        dispatch({type: INCREMENT_NUMFIVE })
    }
}
export const decrementNumFive = () =>{
    return (dispatch) =>{
        dispatch({type: DECREMENT_NUMFIVE })
    }
}