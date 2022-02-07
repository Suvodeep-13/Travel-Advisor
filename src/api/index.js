import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'  

export const getPlacesData =  async (sw, ne) => {
    try {

        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'b18a3eff72msh94af92965bc421dp194726jsn12de3e7bed5e'
          }
        });

        return data;
    } catch (error){
        console.log(error)
    }
}