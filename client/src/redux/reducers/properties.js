import { LOAD_PROPERTIES, FILTER_PROPERTIES } from '../actions/types';

const INITIAL_STATE = {
  allProperties: [],
  filteredProperties:[]
};

export default function(state = INITIAL_STATE, action){

  switch(action.type){
    //Reducer to load properties to the search page
    case LOAD_PROPERTIES:
      return {
        ...state,
        allProperties: [...action.payload.properties]
      }

    //Reducer to filter Properties
    case FILTER_PROPERTIES: {
      const { filterSettings } = action.payload
      let filteredProperties = action.payload.properties

      console.log("filterSettings", filterSettings)
      //Below is all of the tests to filter the data to the user's liking
      // filteredProperties = properties.filter((item) => {
      //   return (item.price >= filterValue) && (item.price <= this.state.max_price) && (item.floorSpace >= this.state.min_floor_space) && (item.floorSpace <= this.state.max_floor_space) && (item.rooms >= this.state.bedrooms)
      // })
  
      if (filterSettings.listingType === 'isForSale')
        filteredProperties = filteredProperties.filter((item) => (item.listingType === 'isForSale'))
      
      if (filterSettings.listingType === 'isForRent') 
        filteredProperties = filteredProperties.filter((item) => (item.listingType === 'isForRent'))

      if (filterSettings.listingType === 'wasSold') 
        filteredProperties = filteredProperties.filter((item) => (item.listingType === 'wasSold'))

      if (filterSettings.listingType === 'all') 
  
        // if (filterSettings.houseType === 'All')
        //   filteredProperties = filteredProperties.filter((item) => (filteredProperties.houseType !== ''))
        
        // if (filterSettings.houseType !== 'All') 
        //   filteredProperties = filteredProperties.filter((item) => (item.houseType === filterSettings.houseType))
        console.log(filterSettings)
       
        if (filterSettings === 'price-dsc')
          filteredProperties = filteredProperties.sort((a, b) => (a.price - b.price))

        if (filterSettings === 'price-asc') 
          filteredProperties = filteredProperties.sort((a, b) => (b.price - a.price))



        
    

      console.log("properties after",filteredProperties)
      //We return the filtered list of properties
      return {
        ...state,
        filteredProperties: [...filteredProperties]
      }
    }
    //Default case
    default:
      return state;
  }

}