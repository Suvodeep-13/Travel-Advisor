import React, {useState, useEffect} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api'; // data from api

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


function App() {

  const [places, setPlaces] = useState([]); // to get all the places in the area
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({}); // to get the buttom left and top right cords

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, [])

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data)
        setPlaces(data);
      })
  },[coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
