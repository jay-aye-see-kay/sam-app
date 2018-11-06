import { createSelector } from "reselect";

export const assetsSelector = state => state.entities.assets;
export const assetTypesSelector = state => state.entities.assetTypes;
export const brandsSelector = state => state.entities.brands;
export const locationsSelector = state => state.entities.locations;

export const nestedAssetsSelector = createSelector(
  [assetsSelector, assetTypesSelector, brandsSelector, locationsSelector],
  (assets, assetTypes, brands, locations) =>
    Object.values(assets).reduce((obj, asset) => {
      const nestedAsset = { ...asset };
      nestedAsset.asset_type = assetTypes[asset.asset_type];
      nestedAsset.brand = brands[asset.brand];
      nestedAsset.location = locations[asset.location];

      obj[asset.id] = nestedAsset;
      return obj;
    }, {})
);
