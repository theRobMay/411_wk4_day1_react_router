import React from 'react';
import cars from '../cars.json';
import CardComponent from './CardComponent';
// Import {useParams} from "react-router-dom" here //
import { useParams } from 'react-router-dom';
// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const { id } = useParams();
    //   console.log(id);
    // % Looping over "Car" JSON to grab only the car object that matches the param
    // % ID.
    const car = cars.find((car) => car.id === +id);
    console.log(car);
    return <CardComponent car={car} />;
};

export default Car;