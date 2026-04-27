import { useCameraPermissions } from "expo-camera";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView>
      <Text style={styles.title}>QR Code Scanner</Text>
      <View style={{ gap: 20 }}>
        <TouchableOpacity
          onPress={requestPermission}
          disabled={isPermissionGranted}
        >
          <Text style={styles.button}>Request Permission</Text>
        </TouchableOpacity>{" "}
        <TouchableOpacity
          onPress={() => {
            alert("Scanning QR Code");
          }}
          disabled={!isPermissionGranted}
        >
          <Text style={styles.button}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    alighnItems: "center",
    justifyContent: "space-around",
    paddingVertical: 80,
  },
  title: {
    color: "black",
    fontSize: 20,
  },
  button: {
    color: "blue",
    fontSize: 20,
    textAlign: "center" as const,
  },
} as const;

export default Index;
