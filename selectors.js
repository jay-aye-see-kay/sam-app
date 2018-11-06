export const assetsSelector = state => {
  try {
    return state.entities.assets;
  } catch (e) {
    console.log("Assets selector failed with the following error: ", e);
    return {};
  }
};
