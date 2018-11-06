import { connect } from "react-redux";

import HomeScreen from "./HomeScreen";
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
)(HomeScreen);
