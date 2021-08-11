import { NativeRouter, Route } from "react-router-native";
import SearchField from "react-search-field";
import Hike from "../app/src/views/hike";
import SearchForHikeHandler from "./eventHandlers";


function ShowSearches(value) {
 return (
<NativeRouter>
  <Route exact path = "/" component = {Home}></Route>
  <Route path = "/hike/:val" component ={SearchForHikeHandler(val)} ></Route>
</NativeRouter>
 )

}

export default ShowSearches;
