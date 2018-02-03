import { combineReducers } from 'redux';
import ClothReducer from './ClothReducer';


export default combineReducers({
  clothes: ClothReducer
});
