import { combineReducers } from 'redux';
import items from './items';
import sys from './sys';

export default combineReducers({ items, sys });