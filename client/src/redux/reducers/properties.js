import { LOAD_PROPERTIES, FILTER_PROPERTIES } from '../actions/types';

const INITIAL_STATE = {
  allProperties: [],
  filteredProperties:[]
};

export default function (state = INITIAL_STATE, action) {

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

      //Below is all of the tests to filter the data to the user's liking
      filteredProperties = filteredProperties.filter((item) => {
        return (item.price >= filterSettings.min_price) && (item.price <= filterSettings.max_price)
      })

      // homeType Filtering
      filteredProperties = filteredProperties.filter((item) => (item.rooms >= filterSettings.bedrooms))

      // ListingType Filtering
      if (filterSettings.listingType === 'isForSale')
        filteredProperties = filteredProperties.filter((item) => (item.listingType === 'isForSale'))
      
      if (filterSettings.listingType === 'isForRent') 
        filteredProperties = filteredProperties.filter((item) => (item.listingType === 'isForRent'))

      if (filterSettings.listingType === 'wasSold') 
        filteredProperties = filteredProperties.filter((item) => (item.listingType === 'wasSold'))

      if (filterSettings.listingType === 'all') 

      // homeType Filtering
      if (filterSettings.homeType === 'house') 
        filteredProperties = filteredProperties.filter((item) => (item.homeType === 'house'))

      if (filterSettings.homeType === 'apartment') 
        filteredProperties = filteredProperties.filter((item) => (item.homeType === 'apartment'))

      if (filterSettings.homeType === 'condo') 
        filteredProperties = filteredProperties.filter((item) => (item.homeType === 'condo'))

      if (filterSettings.homeType === 'townhome') 
        filteredProperties = filteredProperties.filter((item) => (item.homeType === 'townhome'))

      if (filterSettings.homeType === 'lot') 
        filteredProperties = filteredProperties.filter((item) => (item.homeType === 'lot'))

      if (filterSettings.homeType === 'studio') 
      filteredProperties = filteredProperties.filter((item) => (item.homeType === 'studio'))
       
      // Price Asc Desc Filtering
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