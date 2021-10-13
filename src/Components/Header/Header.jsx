import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './Style'

import { Autocomplete } from '@react-google-maps/api'

const Header = ({ setCoordinates }) => {

    const classes = useStyles()
    const [autocomplete, setAutocomplete] = useState(null)

    const onload = (autoC) => setAutocomplete(autoC)

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat()
        const lng = autocomplete.getPlace().geometry.location.lng()

        setCoordinates({lat,lng})
    }

    return (

        <AppBar position='static'>

            <Toolbar className={classes.toolbar}>

                <Typography variant='h5' className={classes.title}>
                    Travel Advisor
                </Typography>

                <Box display='flex'>

                    <Typography variant='h6' className={classes.title}>
                        Travel Advisor
                    </Typography>

                    <Autocomplete
                        onLoad={onload}
                        onPlaceChanged={onPlaceChanged}

                    >
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>

                        </Autocomplete>
                </Box>

            </Toolbar>

         </AppBar>

    );
}

export default Header;