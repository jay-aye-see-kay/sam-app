import { connect } from "react-redux";

import SearchScreen from "./SearchScreen";
import { actions } from "../actions";
import { nestedAssetsSelector } from "../selectors";

const mapStateToProps = state => ({
  assets: nestedAssetsSelector(state),
});

const mapDispatchToProps = {
  getOptions: actions.getOptions,
  getAssets: actions.getAssets,
  addAsset: actions.addAsset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
