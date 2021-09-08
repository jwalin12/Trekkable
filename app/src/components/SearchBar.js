import React, { useDebugValue } from 'react';
import { SearchOutlined} from '@ant-design/icons';


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
