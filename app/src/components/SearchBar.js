import React, { useDebugValue } from 'react';
import {ThemeProvider} from 'react-native-elements';
import { SearchOutlined} from '@ant-design/icons';
import { AntDesign } from '@expo/vector-icons';
import SearchForHikeHandler from '../../../backend/eventHandlers';


function SearchBar({placeholder, data}) {
    return(
              <div className = "search">
        <div className ="searchInput">
            <input type = "text" placeholder = {placeholder}>
            </input>
            <SearchOutlined>
            </SearchOutlined>
            
        </div>
        <div className = "dataResult">
            {data.map((value,key) => {
                return <a className = "dataItem" href = {value.link}> 
                <p>{value.name}
                </p></a>

            })}
        </div>
    </div>



    )

  
}


export default SearchBar;
