import { asyncActionCreator, createTypes, async } from "redux-action-creator";
import { schema } from "normalizr";

/**
 * API helper functions
 */

// const URL_BASE = "http://seed.jackrose.co.nz";
const URL_BASE = "http://192.168.43.241:8000";

const get = async url => {
  const response = await fetch(`${URL_BASE}${url}`);
  const json = await response.json();
  return json;
};

const post = async (url, payload, options) => {
  const response = await fetch(`${URL_BASE}${url}`, {
    method: "POST",
    ...options,
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json;
};

/**
 * Action Types
 */
const types = createTypes([
  ...async("GET_OPTIONS"),
  ...async("GET_ASSETS"),
  ...async("ADD_ASSET"),
]);

/**
 * Actions
 */
const actions = {
  getOptions: asyncActionCreator(types.GET_OPTIONS, () => get("/options/")),
  getAssets: asyncActionCreator(types.GET_ASSETS, () => get("/assets/")),
  addAsset: asyncActionCreator(
    types.ADD_ASSET,
    "short_description",
    "barcode",
    "asset_type",
    "brand",
    "location",
    {
      action: payload => post("/assets/", payload),
      schema: new schema.Entity("assets"),
    }
  ),
};

export { types, actions };
