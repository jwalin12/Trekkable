import { useHistory } from 'react-router-dom';
import React from 'react';
import { RecentActorsRounded, SpeedRounded } from '@material-ui/icons';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { FlatList,TouchableOpacity,Text } from 'react-native';
import { text } from 'dom-helpers';

const Item = ({ item}) => (
    <TouchableOpacity style={[styles.item]}>
      <Text style={[styles.title]}>{item.name}</Text>
    </TouchableOpacity>
  );

const renderItem = ({item}) => {
    return (
      <Item 
      item = {item}
     >

      </Item>
    )
  }

const styles= {
    title: {
      fontSize:16
    },
    item:{
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,

    },


  }



class HikeSearchView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search:'',
            filteredData:this.props.data,
            allData:this.props.data,
        }
    }

    updateSearch(event) {
        this.setState({
            search:event.target.value.substr(0,20)
        });

    }

    updateFilteredData(newData) {

        this.setState({
            filteredData:newData
        });

    }



    
    searchHandler = (event) => {
        let text = event.target.value;
        this.updateSearch(text);
        this.updateFilteredData(this.state.allData.filter(
            (hike) => {
                return hike.name.toLowercase().indexOf(text.toLowerCase()) !== -1;
            }
        ));
    }
    

    render () {
        let filteredData = this.state.allData.filter(
            (hike) => {
                return hike.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )

        return (
            <div>
           <SearchBar
           placeholder='Find your hike...'
           onChange= {this.updateSearch.bind(this)}
           value = {this.state.search}>
           </SearchBar>\
           <FlatList
           data = {filteredData}
           renderItem = {renderItem}>
           </FlatList>
            </div>

        )
    }



}

export default HikeSearchView;