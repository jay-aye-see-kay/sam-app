import { createTypes, async } from "redux-action-creator";
import { schema } from "normalizr";
import { asyncActionCreator } from "redux-action-creator";

/**
 * API helper functions
 */

const URL_BASE = "http://192.168.0.3:8000";

const get = async url => {
  const response = await fetch(`${URL_BASE}${url}`);
  const json = await response.json();
  return json;
};

const post = async (url, options) => {
  const response = await fetch(`${URL_BASE}${url}`, {
    method: "POST",
    ...options,
  });
  const json = await response.json();
  return json;
};

/**
 * Action Types
 */
const types = createTypes([...async("GET_ASSETS"), ...async("ADD_ASSET")]);

/**
 * Actions
 */
const actions = {
  getAssets: asyncActionCreator(types.GET_ASSETS, () => get("/assets/")),
  addAsset: asyncActionCreator(
    types.ADD_ASSET,
    /*"electric", "wheels",*/ {
      action: payload => post("/assets/", payload),
      schema: new schema.Entity("assets"),
    }
  ),
};

export { types, actions };
