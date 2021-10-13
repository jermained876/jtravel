import React from 'react'
import { Box, Typography, Card, CardMedia, cardContent, CardActions, Chip, Button } from '@material-ui/core'
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';
import Rest from '../../image/rest.png'
import useStyles from './Style'
import { CardContent } from '@mui/material';

const PlaceDetails = ({ place, selected, refProp }) => {

    const classes = useStyles()

    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block:'start'})

    return (

       

        <Card elevaction={6}>
            <CardMedia

                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : "https://cdnimg.webstaurantstore.com/uploads/blog/2019/4/restaurant-table-settings-formal.gif"}
                title={ place.name}

            />

            <CardContent>

                <Typography gutterBottom variant='h5'>{place.name}</Typography>

                <Box display="flex" justifyContent="space-between">

                    <Typography  variant='subtitle1'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.price_level }</Typography>

                </Box>

                <Box display="flex" justifyContent="space-between">

                    <Rating name="read-only" value={Number(place?.rating)} readOnly />
                    <Typography gutterBottom variant='subtitle1'>out of { place.num_reviews }</Typography>

                </Box>
               

                <Box display="flex" justifyContent="space-between">

                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>

                </Box>

                {place?.awards?.map((award) => (

                    <Box my={1} display="flex" justifyContent="space-between" alignItems='center'>

                        <img src={award.images.small} alt={award.display_name} />
                        <Typography gutterBottom variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>

                    </Box>
                    
                ))}


                {place?.cuisine?.map(({name }) => (
                    
                    <Chip key={name} label={name} size='small' className={ classes.chip}/>
                    
                ))}


                {place?.address && (

                    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
                        <RoomIcon /> { place.address}
                    </Typography>
                    
                )}


                {place?.phone && (

                    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>

                )}


                <CardActions display='flex' justifyContent='space-between'>
                    


                    <Button size='small' color='primary' onClick={ ()=> window.open(place.web_url,'_blank') } >
                        Trip Advisor
                    </Button>

                    <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')} >
                        Website
                    </Button>

                </CardActions>



            </CardContent>

           
 

        </Card>

    );
}

export default PlaceDetails;
    ;