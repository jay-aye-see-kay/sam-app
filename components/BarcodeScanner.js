import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo";

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    flashMode: "off",
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission, flashMode } = this.state;
    const { onBarCodeScanned } = this.props;

    if (hasCameraPermission === null) {
      return <Text>Waiting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera
          onBarCodeScanned={onBarCodeScanned}
          style={StyleSheet.absoluteFill}
          flashMode={flashMode}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: "flex-end",
                alignItems: "center",
              }}
              onPress={() => {
                this.setState({
                  flashMode: flashMode === "off" ? "torch" : "off",
                });
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                Torch on
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}
