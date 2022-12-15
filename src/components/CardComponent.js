import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CarCard(props) {
    console.log(props);
    return (
        <Card
            sx={{
                width: 500,
                margin: '2em auto',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    {props.car.Year}
                </Typography>
                <Typography variant='h5' component='div'>
                    {props.car.Name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {props.car.Origin}
                </Typography>
                <Typography variant='body2'>
                    {`Cylinders: ${props.car.Cylinders} / Horsepower: ${props.car.Horsepower} / MPG: ${props.car.Miles_per_Gallon}`}
                </Typography>
            </CardContent>
        </Card>
    );
}