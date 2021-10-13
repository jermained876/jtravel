import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import RoomIcon from '@mui/icons-material/Room';
import Rating from '@mui/material/Rating';
import useStyle from './Style'
import * as googleMapReact from 'google-map-react';
import AccessibilityIcon from '@mui/icons-material/Accessibility';


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked}) => {

    const classes = useStyle()
    const isMoblie = useMediaQuery('(min-width:600px)')
    

    return (
        <div className={ classes.mapContainer }>

            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={'' }
                onChange={(e) => {
                   
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })

                }}
                onChildClick={(child) => setChildClicked(child)}
                >

                {places?.map((place, i) => (

                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={ i }
                    >
                        {!isMoblie ? (
                            <RoomIcon color='primary' fontSize='large'/>
                        ): (

                                <Paper elevation={3} className={classes.paper}>

                                    <Typography variant='subtitle2' className={classes.typograpy}>
                                        {place.name}
                                    </Typography>

                                    <img alt={ place.name } className={ classes.pointer } src={ place.photo ? place.photo.images.large.url : "https://cdnimg.webstaurantstore.com/uploads/blog/2019/4/restaurant-table-settings-formal.gif"  } />

                                    <Rating name="read-only" size='small' value={Number(place?.rating)} readOnly />

                                </Paper>
                            )}

                       
                        </div>

                    
                    ))}

               


                </GoogleMapReact>


        </div>

    );
}

export default Map;