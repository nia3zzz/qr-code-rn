import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { checkAccurateDomain } from "@/types/typeChecker";
import { SafeAreaView } from "react-native-safe-area-context";

const Generator = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [qrCode, setQrCode] = React.useState("");
  const [error, setError] = React.useState("");

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setQrCode("");
    setError("");
  };

  const generateQRCode = () => {
    try {
      const checkType = checkAccurateDomain.safeParse(inputValue);

      if (!checkType.success) {
        setError(checkType.error.issues[0].message);
        return;
      }
      setQrCode(inputValue);
    } catch (error) {
      setError("An error occurred while generating the QR code.");
    }
  };

  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Generate a QR Code</Text>
        <Text>Enter domain for QR Code</Text>
      </View>
      <View style={styles.mid_funcs}>
        <TextInput
          style={styles.input}
          placeholder="example.com"
          value={inputValue}
          onChangeText={handleInputChange}
        />

        <TouchableOpacity
          onPress={generateQRCode}
          style={{
            backgroundColor: "#2563eb",
            paddingVertical: 14,
            paddingHorizontal: 32,
            borderRadius: 28,
            marginTop: 18,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 4,
          }}
        >
          <Text style={{ color: "white" }}>Generate</Text>
        </TouchableOpacity>

        {error ? <Text style={styles.type_error}>{error}</Text> : null}

        {qrCode ? (
          <View style={styles.qrcode_container}>
            <QRCode
              value={qrCode}
              size={200}
              color="black"
              backgroundColor="white"
            />
            <TouchableOpacity style={styles.download_button} onPress={() => {}}>
              <Text style={{ color: "white", textAlign: "center" }}>
                Download QR Code
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Generator;

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  mid_funcs: {
    alignItems: "center",
  },
  top_container: {
    margin: 20,
  },
  qrcode_container: {
    marginTop: 20,
  },
  title: {
    color: "black",
    fontWeight: 500,
    fontSize: 32,
    fontFamily: "Inter-Regular",
  },
  input: {
    height: 56,
    borderColor: "#e5e7eb",
    borderWidth: 1.5,
    width: "90%",
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: "#f9fafb",
    color: "#111827",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  download_button: {
    backgroundColor: "#bdb003",
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
  type_error: {
    color: "red",
    marginTop: 10,
  },
});
