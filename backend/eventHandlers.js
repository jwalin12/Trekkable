import axios from 'axios'
import EmptyHike from '../app/src/views/emptyHike'

const searchForHikeHandler = (input) => {
    //make request to get hike info
    axios.get(process.env.SERVER_URI + "/"+input)
    .then(response => {
        if (response.status == 400) {
            
    //if 400 render empty page
            console.log("hike not found")
            return EmptyHike()

        } else {


            
    //render hike view 

        }
    } 
        )





}