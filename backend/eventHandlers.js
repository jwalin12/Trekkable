import axios from 'axios';
import EmptyHike from '../app/src/views/emptyHike';
import Hike from '../app/src/views/hike';

function SearchForHikeHandler({match}) {
    //make request to get hike info
    axios.get(process.env.SERVER_URI + "/hikes/".concat(match.params.val))
    .then(response => {
        if (response.status == 400) {
            
    //if 400 render empty page
            console.log("hike not found");
            return EmptyHike();

        } else {
            return Hike(response.body.name, response.body.trailStatus, response.body.parkingLot,response.body.bearSightings);
    //render hike view 

        }
    } 
        )





}

export default SearchForHikeHandler;