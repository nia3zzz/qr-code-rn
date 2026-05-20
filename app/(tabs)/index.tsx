import { useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Scan a QR Code</Text>
        <Text>Hold camera to a QR Code</Text>
      </View>
      <View style={styles.mid_funcs}>
        {!isPermissionGranted && (
          <TouchableOpacity style={styles.button} onPress={requestPermission}>
            <Text style={styles.buttonText}>Request Permission</Text>
          </TouchableOpacity>
        )}
        {isPermissionGranted && (
          <Link href="/scanner" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Scan QR Code</Text>
            </TouchableOpacity>
          </Link>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = {
  safe_area: {
    flex: 1,
  },
  top_container: {
    margin: 20,
  },
  title: {
    color: "black",
    fontWeight: 500,
    fontSize: 32,
    fontFamily: "Inter-Regular",
  },
  mid_funcs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 260,
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 28,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
};

export default Index;
