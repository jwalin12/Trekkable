import React, { useState} from 'react';
import { TouchableOpacity, FlatList,Text }from 'react-native';
import { NativeRouter } from 'react-router-native';
import logo from './app/src/logo.svg'
import './app/src/App.css'
import Search from './app/src/views/search';
import Announcer from './app/src/views/announcer';
import posts from './app/src/views/mockdata/mockHike.json';
import { FormatPaint } from '@material-ui/icons';
import HikeSearchView from './app/src/views/search';
const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

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

  return (
          <div className="App">
            <HikeSearchView data = {posts}></HikeSearchView>

          </div>

  );
};

export default App;