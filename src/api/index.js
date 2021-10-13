import axios from 'axios'








export const getPlacesData = async (type,bounds) => {

    console.log(bounds)
    try {

        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: bounds.sw.lat,
                tr_latitude: bounds.ne.lat,
                bl_longitude: bounds.sw.lng,
                tr_longitude: bounds.ne.lng,
                limit: '50  ',

            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'f40c089468msh67c6e19bc4be841p1e068ejsn76b32511d687'
            }
        });

        return data;
    }
    catch (error) {
        console.log(error)
    }
}

