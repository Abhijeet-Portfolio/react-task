import { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = (props) => {
    const [state, setState] = useState({
        cars: {
            car1: { name: 'Honda' , price: 100},
            car2: { name: 'BMW' , price: 150}
        }
    });

    return (
        <MyContext.Provider>
            value={{
                cars: state.cars,
                incrementPrice: ID => {
                    const cars = Object.assign({}, state.cars);
                    cars[ID].price = cars[ID].price + 1;
                    setState({cars});
                },
                decrementPrice: ID => {
                    const cars = Object.assign({}, state.cars);
                    cars[ID].price = cars[ID].price - 1;
                    setState({cars});
                }
            }}
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider;