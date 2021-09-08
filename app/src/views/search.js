import React from 'react';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { FlatList,TouchableOpacity,Text } from 'react-native';
import { useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





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


function HomeScreen({navigation, params}) {
    return <HikeSearchView data = {props.data} navigation = {props.navigation}></HikeSearchView>
}

function HikeSearchView (props) {
    const navigation = useNavigation();

    const [search, updateSearch] = useState('');
    const allData =props.data;
    const [filteredData, updateFilteredData] = useState(allData);
    
    const Item = ({ item}) => (
      <TouchableOpacity style={[styles.item]} onPress= {() =>  navigation.navigate('Hike', {hikeData:item})}>
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

    const searchHandler = (event) => {
      let text = event.target.value;
      updateSearch(text);
      updateFilteredData(allData.filter(
          (hike) => {
              return hike.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
          }
      ));
  }


    return (
        <div>
        <SearchBar
        placeholder='Find your hike...'
        onChange= {searchHandler}
        value = {search}>
        </SearchBar>
        <FlatList
        data = {filteredData}
        renderItem = {renderItem}>
        </FlatList>
        </div>

        )
    



}

export default HikeSearchView;