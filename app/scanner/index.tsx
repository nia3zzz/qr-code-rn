import { CameraView } from "expo-camera";
import React, { useEffect, useRef } from "react";
import { AppState, Linking, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Overlay from "./Overlay";


const index = () => {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  });

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(async () => {
              await Linking.openURL(data);
            }, 1000);
          }
        }}
      />
      <Overlay/>
    </SafeAreaView>
  );
};

export default index;
