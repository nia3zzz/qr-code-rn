// ✅ Works in Expo Go
import { View, StyleSheet } from "react-native";

const Overlay = () => (
  <View style={StyleSheet.absoluteFillObject}>
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
    <View style={{ flexDirection: "row", height: 250 }}>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
      <View style={{ width: 250 }} />
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
    </View>
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
  </View>
);

export default Overlay;