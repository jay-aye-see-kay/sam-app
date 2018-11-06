import React from "react";
import { Platform } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Camera, Permissions } from "expo";

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
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignItems: "center",
                marginTop: 24,
                marginRight: 12,
              }}
              onPress={() => {
                this.setState({
                  flashMode: flashMode === "off" ? "torch" : "off",
                });
              }}
            >
              <Icon.Ionicons
                name={this.props.name}
                size={26}
                color="white"
                name={
                  Platform.OS === "ios" ? "ios-flashlight" : "md-flashlight"
                }
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}
