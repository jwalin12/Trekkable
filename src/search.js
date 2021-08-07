import SearchField from "react-search-field";

function renderHikePage(value) {
  return (
    {Hike}
  )

}


function showSearches(value) {

}

const SearchBar = () => (
<SearchField
  placeholder="Find your next hike!"
  searchText="Find your next hike!"
  classNames="hike-search-bar"
  onSearchClick={showSearches}
/>
);

export default SearchBar;