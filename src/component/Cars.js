import { Fragment } from "react/cjs/react.production.min"
import MyContext from "./MyContext"
import Car from './Car';

const Cars = () => {
    <MyContext.Consumer>
        {context => (
            <Fragment>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                    <Car 
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                    />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
}

export default Cars;