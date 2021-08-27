import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Button, Grid, TextField, Slider, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function SearchScreen({history}){
    // Set the states
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [distance, setDistance] = useState('');
    const [price, setPrice] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Load on entering the page
    // check if the data is initialized
    useEffect(() => {
        setLoading(true);

        axios.get('/initdata')
        .catch(function (error) {
            if (error.response) {
              setError(error.response.data);
            }
        });
        
        setLoading(false);
    }, [history]);

    // Submit the search on clicking the button
    const submitHandler = (e) => {
        e.preventDefault();

        // Reset the states
        setLoading(true);
        setError('');
        setRestaurants([]);

        // Add only the search fields with value to params dictionary
        const get_params = {};
        if (name) get_params['NAME'] = name;
        if (rating) get_params['RATING'] = rating;
        if (distance) get_params['DISTANCE'] = distance;
        if (price) get_params['PRICE'] = price;
        if (cuisine) get_params['CUISINE'] = cuisine;
        
        // Make the request to the backend
        axios.get('/restaurant', {
            params: get_params
        })
        .then(res => {
            setRestaurants(res.data);
        })
        .catch(function (error) {
            if (error.response) {
              setError(error.response.data);
            }
        });

        setLoading(false);
    };

    return (
        <Container>
            <Grid container spacing={3} className='my-2'>

                {/*SEARCH ROW*/}
                <Grid item xs={12}>
                    <form onSubmit={submitHandler}>
                        <Grid container spacing={3}>
                            {/*NAME*/}
                            <Grid item xs={2}>
                                <TextField id="Name" type="text" margin="normal" variant="outlined" label="Name" value={name} size="small" onChange={(e) => setName(e.target.value)} />
                            </Grid>

                            {/*RATING*/}
                            <Grid item xs={2}>
                                <Typography id="ratting-slider" gutterBottom>
                                    Rating
                                </Typography>
                                <Slider
                                    value={rating}
                                    aria-labelledby="discrete-slider"
                                    step={1}
                                    valueLabelDisplay="auto"
                                    marks
                                    min={0}
                                    max={5}
                                    onChange={(e, val) => setRating(val)}
                                /> 
                            </Grid>

                            {/*DISTANCE*/}
                            <Grid item xs={2}>
                                <TextField id="Distance" type="number" margin="normal" variant="outlined" label="Distance" value={distance} size="small" onChange={(e) => setDistance(e.target.value)} />
                            </Grid>

                            {/*PRICE*/}
                            <Grid item xs={2}>
                                <TextField id="Price" type="number" margin="normal" variant="outlined" label="Price" value={price} size="small" onChange={(e) => setPrice(e.target.value)} />
                            </Grid>

                            {/*CUISINE*/}
                            <Grid item xs={2}>
                                <TextField id="Cuisine" margin="normal" variant="outlined" label="Cuisine" value={cuisine} size="small" onChange={(e) => setCuisine(e.target.value)} />
                            </Grid>

                            {/*BUTTON*/}
                            <Grid item xs={2}>
                                <Button disableElevation variant="contained" color="primary" type="submit" className='mt-3'>Search</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                {/*TABLE ROW*/}
                <Grid item xs={12}>
                    {loading && 'Loading..'}
                    {error && <Alert severity="error">{error}</Alert>}
                    <Table style={{width: '100%'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{width: '30%'}}>NAME</TableCell>
                                <TableCell style={{width: '15%'}}>RATING</TableCell>
                                <TableCell style={{width: '15%'}}>DISTANCE</TableCell>
                                <TableCell style={{width: '15%'}}>PRICE</TableCell>
                                <TableCell style={{width: '25%'}}>CUISINE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurants?.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.customer_rating}</TableCell>
                                <TableCell>{item.distance}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.cuisine.name}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SearchScreen;
