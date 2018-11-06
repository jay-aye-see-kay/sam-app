import { combineReducers } from "redux";
import { normalize, schema } from "normalizr";

import { types } from "./actions";

/**
 * API schemas used by mornalizr
 */
const assetSchema = new schema.Entity("assets");

/**
 * utility function to convert arrays to objects keyed by id
 */
const toObject = array =>
  array.reduce((obj, el) => {
    obj[el.id] = el;
    return obj;
  }, {});

/**
 * The entities reducer (handles all data from server)
 */
const entities = (
  state = {
    assets: {},
    assetTypes: {},
    brands: {},
    locations: {},
  },
  action
) => {
  switch (action.type) {
    case types.GET_ASSETS_SUCCESS:
      return {
        ...state,
        assets: toObject(action.response),
      };

    default:
      return state;
  }
};

/**
 * The root reducer
 */
const rootReducer = combineReducers({
  entities,
});

export default rootReducer;
