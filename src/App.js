import React, {useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@mui/material'
import Header from './Components/Header/Header'
import Map from './Components/Map/Map'
import List from './Components/List/List'
import {getPlacesData} from './api/index'

const App = () => {

    const [places, setPlaces] = useState([])

    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})
    const [childClicked, setChildClicked] = useState(null)
    const [filteredPlaces, setFilterPlaces] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('0')
    


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {

            setCoordinates({ lat: latitude, lng: longitude })
        })

    }, [])

    useEffect(() => {
        let fplaces = places.filter((place) => Number(place.rating > rating))
        console.log(fplaces)
        setFilterPlaces(fplaces)

    }, [rating])




    useEffect(() => {
        setIsLoading(true)
        console.log(coordinates, bounds)

        getPlacesData(type,bounds)
            .then((res) => {
                setPlaces(res)
                console.log(res)
                setFilterPlaces([])
                setIsLoading(false)
            })


    }, [type,bounds])

    return (
        <>
            <CssBaseline />

            <Header setCoordinates={setCoordinates}/>

            <Grid container spacing={3} style={{ width: '100%' }}>

                <Grid item xs={12} md={4}>
                    <List
                        places={filteredPlaces.length > 0 ? filteredPlaces :  places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating} setRating={setRating} 
                     />
 />

                 </Grid>


                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length > 0 ? filteredPlaces : places}
                        setChildClicked={setChildClicked }
                    />

                </Grid>



            </Grid>

        </>
        
        );
}

export default App;