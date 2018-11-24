import { connect } from "react-redux";

import AddAssetScreen from "./AddAssetScreen";
import { actions } from "../actions";
import {
  nestedAssetsSelector,
  assetTypesSelector,
  brandsSelector,
  locationsSelector,
} from "../selectors";

const mapStateToProps = state => ({
  assets: nestedAssetsSelector(state),
  assetTypes: Object.values(assetTypesSelector(state)),
  brands: Object.values(brandsSelector(state)),
  locations: Object.values(locationsSelector(state)),
});

const mapDispatchToProps = {
  getOptions: actions.getOptions,
  getAssets: actions.getAssets,
  addAsset: actions.addAsset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAssetScreen);
