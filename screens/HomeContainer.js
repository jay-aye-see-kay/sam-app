import { connect } from "react-redux";

import HomeScreen from "./HomeScreen";
import { actions } from "../actions";
import { assetsSelector } from "../selectors";

const mapStateToProps = state => ({
  assets: assetsSelector(state),
});

const mapDispatchToProps = {
  getAssets: actions.getAssets,
  addAsset: actions.addAsset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
