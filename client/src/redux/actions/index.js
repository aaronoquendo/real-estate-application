import {
  LOAD_PROPERTIES, 
  FILTER_PROPERTIES
} from './types'

//Loading properties into the global state
export const loadProperties = (properties) => {
  return{
    type: LOAD_PROPERTIES,
    payload: {
      properties
    },
  }
};

//Sorting properties based on the users input
export const filterProperties = (properties, filterSettings) => {
  return{
    type: FILTER_PROPERTIES,
    payload: {
      properties,
      filterSettings
    },
  }

};